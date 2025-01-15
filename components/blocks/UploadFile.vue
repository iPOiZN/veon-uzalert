<template>
	<div class="input-file">
		<input
			:id="input.id"
			v-model="localValue"
			:type="input.type"
			:placeholder="input.placeholder"
			:required="input.required"
			accept="image/png, image/pdf, image/jpeg, image/jpg"
			@input="handleFileUpload" />

		<div v-if="uploadStatus.isUploading || selectedImgSrc" class="input-file__content">
			<div class="input-file__content-img-wrapper">
				<img
					class="input-file__content-img"
					:class="{ uploaded: uploadStatus.isUploaded && !uploadStatus.isUploading }"
					:src="selectedImgSrc"
					:alt="input.placeholder"
					@click="uploadFileModal?.showModal()" />
				<span v-if="uploadStatus.isUploading" class="input-file__content-actions-overlay">
					{{ uploadStatus.percent }}%
				</span>
			</div>
			<div class="input-file__content-actions">
				<button class="input-file__content-actions-btn" type="button" :title="uploadStatus.isUploading ? $t('basics.buttons.cancel') : $t('basics.buttons.delete')" @click="handleCancelUpload">
					<!-- {{ uploadStatus.isUploading ? $t('basics.buttons.cancel') : $t('basics.buttons.delete') }} -->
					<Icon :name="uploadStatus.isUploading ? 'mdi:cancel' : 'mdi:delete'" size="24" />
				</button>
			</div>
		</div>
		<div v-if="uploadStatus.isCanceled || uploadStatus.isFailed" class="input-file__content-error">
			<span>{{ uploadStatus.statusText }}</span>
		</div>
		<Teleport to="body">
			<dialog
				id="uploadFileModal"
				ref="uploadFileModal"
				class="upload-file-modal"
				@click.self="uploadFileModal?.close()">
				<div class="upload-file-modal__content">
					<img :src="selectedImgSrc" :alt="input.placeholder" />
					<button type="button" class="upload-file-modal__close" @click="uploadFileModal?.close()">
						<Icon name="mdi:close" size="24" />
					</button>
				</div>
			</dialog>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
	import type { ISearchRequest } from '~/types/content.interface'

	defineProps<{
		input: ISearchRequest['inputs'][number]
	}>()

	const emit = defineEmits<{
		(event: 'update', value: string): void
	}>()

	const { t } = useI18n()

	const localValue = ref('')
	const uploadFileModal = ref<HTMLDialogElement | null>(null)

	const currentUploadRequest = ref<XMLHttpRequest | null>(null)
	const selectedImgSrc = ref<string>()

	const uploadStatus = reactive({
		isUploading: false,
		isUploaded: false,
		isCanceled: false,
		percent: 0,
		isFailed: false,
		statusText: '',
	})

	const handleFileUpload = async (e: Event) => {
		uploadStatus.isCanceled = false
		uploadStatus.isFailed = false
		uploadStatus.statusText = ''

		const formData = new FormData()
		const targetFile = (e.target as HTMLInputElement).files?.[0]
		if (!targetFile) return
		const maxFileSize = 1 * 1024 * 1024 // 1 MB
		if (targetFile.size > maxFileSize) {
			uploadStatus.isFailed = true
			uploadStatus.statusText = 'File size is too large (max 1 MB)'
			return
		}
		selectedImgSrc.value = URL.createObjectURL(targetFile)
		formData.append('file', targetFile)
		const xhr = new XMLHttpRequest()
		currentUploadRequest.value = xhr

		xhr.open('POST', 'https://api.uzalert.uz/v1/upload', true)
		uploadStatus.isUploading = true
		xhr.upload.addEventListener('progress', (e) => {
			uploadStatus.percent = Math.floor((e.loaded / e.total) * 100)
		})

		xhr.onload = function () {
			if (xhr.status === 200) {
				uploadStatus.isUploaded = true
				emit('update', JSON.parse(xhr.response).filePath)
			}
			uploadStatus.isUploading = false
			currentUploadRequest.value = null
		}
		xhr.onerror = function () {
			uploadStatus.statusText = xhr.statusText
			uploadStatus.isFailed = true
			uploadStatus.isUploading = false
			currentUploadRequest.value = null
		}
		xhr.onabort = function () {
			uploadStatus.isCanceled = true
			uploadStatus.isUploading = false
			currentUploadRequest.value = null
			uploadStatus.statusText = t('contactsRequest.uploadCanceled')
		}
		xhr.send(formData)
	}
	const handleCancelUpload = () => {
		if (currentUploadRequest.value) {
			currentUploadRequest.value.abort()
			currentUploadRequest.value = null
			uploadStatus.isUploading = false
			uploadStatus.isCanceled = true
		}
		selectedImgSrc.value = ''
		localValue.value = ''
		emit('update', '')
	}
</script>

<style scoped lang="scss">
	.input-file {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		background-color: var(--white);
		border: 1px solid var(--border);
		padding: 10px;
		input {
			// padding: 10px;
			resize: none;
			width: 100%;
		}
		&__content {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 12px;
			width: 100%;
			border: 1px solid var(--border);
			padding: 10px;

			@media (max-width: 575.98px) {
				flex-direction: column;
				justify-content: center;
			}
			&-img {
				max-width: 300px;
				width: 100%;
				object-fit: scale-down;
				opacity: 0.5;
				transition: 0.5s opacity;
				cursor: pointer;
				&-wrapper {
					position: relative;
					overflow: hidden;
					background-color: var(--black);
				}
				&.uploaded {
					opacity: 1;
				}
			}
			&-actions {
				position: relative;
				z-index: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 10px;
				&-overlay {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					font-weight: 600;
					z-index: 10;
					color: var(--white)
				}
				&-btn {
					font-weight: 600;
					color: var(--danger);
					border: 2px solid var(--danger);
					padding: 4px 8px;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 4px;
					border-radius: 50%;
					width: 40px;
					height: 40px;
					transition: 0.1s background-color, 0.1s color;
					&:hover {
						background-color: var(--danger);
						color: var(--white);
					}
				}
			}
			&-error {
				align-self: flex-start;
				padding: 10px;
				color: var(--danger);
			}
		}
	}
	.upload-file-modal {
		border: none;
		background: transparent;
		&::backdrop {
			backdrop-filter: blur(2px);
		}
		&__content {
			position: relative;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		}
		&__close {
			position: absolute;
			top: 15px;
			right: 15px;
			padding: 10px;
			background-color: var(--white);
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
