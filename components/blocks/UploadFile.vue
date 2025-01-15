<template>
	<div class="input-file">
		<input
			:id="input.id"
			v-model="localValue"
			:type="input.type"
			:placeholder="input.placeholder"
			:required="input.required"
			@input="handleFileUpload" />

		<div v-if="uploadStatus.isUploading || selectedImgSrc" class="input-file__content">
			<div class="input-file__content-img-wrapper">
				<img
					class="input-file__content-img"
					:class="{ uploaded: uploadStatus.isUploaded }"
					:src="selectedImgSrc"
					:alt="input.placeholder" />
				<!-- <div
					:style="{
						backdropFilter: `blur(${5 - (uploadStatus.percent / 100) * 5}px)`,
					}"
					class="input-file__content-cover"></div> -->
				<span v-if="uploadStatus.isUploading" class="input-file__content-actions-percent">
					{{ uploadStatus.percent }}%
				</span>
			</div>
			<div class="input-file__content-actions">
				<button class="input-file__content-actions-btn" type="button" @click="handleCancelUpload">
					{{ uploadStatus.isUploading ? $t('basics.buttons.cancel') : $t('basics.buttons.delete') }}
				</button>
			</div>
		</div>
		<div
			v-if="uploadStatus.isCanceled && !selectedImgSrc && !uploadStatus.isUploading"
			class="input-file__content-error">
			<span>{{ uploadStatus.statusText }}</span>
		</div>
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
		uploadStatus.isUploaded = false
		const formData = new FormData()
		const targetFile = (e.target as HTMLInputElement).files?.[0]
		if (!targetFile) return
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
			selectedImgSrc.value = ''
			localValue.value = ''
		} else {
			selectedImgSrc.value = ''
			localValue.value = ''
		}
	}
</script>

<style scoped lang="scss">
	.input-file {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		input {
			background-color: var(--white);
			border: 1px solid var(--border);
			padding: 10px;
			resize: none;
			width: 100%;
		}
		&__content {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			&-img {
				max-width: 200px;
				width: 100%;
				object-fit: scale-down;
				opacity: 0.5;
				transition: 0.5s opacity;
				&-wrapper {
					position: relative;
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
				&-percent {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					font-weight: 600;
					z-index: 10;
				}
				&-btn {
					font-weight: 600;
					color: var(--danger);
					border: 1px solid var(--danger);
					padding: 8px 16px;
				}
			}
			&-error {
				align-self: flex-start;
				padding: 10px;
			}
		}
	}
</style>
