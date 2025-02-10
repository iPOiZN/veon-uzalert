<template>
	<section id="join" class="join">
		<div class="join__container container">
			<UIHeading level="3" class="join__title">{{ JOIN.title }}</UIHeading>
			<form class="join__form" @submit.prevent="handleSubmit">
				<div class="join__block">
					<div class="join__block-title required">{{ JOIN.help.title }}</div>
					<ul class="join__block-checkboxes" :class="{ error: v$Form['help_types']?.$error }">
						<li
							v-for="(checkbox, i) in JOIN.help.checkboxes"
							:key="i"
							class="join__block-checkbox-item"
							:class="{ error: v$Form['help_types']?.$error }">
							<input
								:id="checkbox.name"
								v-model="formData['help_types']"
								:value="+checkbox.id"
								type="checkbox" />
							<label :for="checkbox.name">{{ checkbox.label }}</label>
						</li>
					</ul>
					<div v-if="v$Form['help_types']?.$error" class="join__block-input-error">
						{{ JOIN.help.errorMsg }}
					</div>
				</div>
				<div class="join__block">
					<div class="join__block-title">{{ JOIN.contacts.title }}</div>
					<div class="join__block-inputs">
						<div
							v-for="(input, i) in JOIN.contacts.inputs"
							:key="i"
							class="join__block-input-item"
							:class="{ error: v$Form[input.id]?.$error }">
							<label
								:for="input.id"
								class="join__block-input-label"
								:class="{ required: input.required }">
								{{ input.label }}
							</label>
							<div class="join__block-input-wrapper">
								<template v-if="input.type === 'tel'">
									<span class="join__block-input-tel">
										<label :for="input.id" class="join__block-input-prefix">+{{ countryCode }}</label>
										<input
											:id="input.id"
											v-model="formData[input.id]"
											class="join__block-input"
											:type="input.type"
											:placeholder="input.placeholder"
											:required="input.required"
											minLength="9"
											maxLength="9"
											oninput="this.value = this.value.replace(/[^0-9]/g, '')" />
									</span>
								</template>
								<template v-else>
									<input
										:id="input.id"
										v-model="formData[input.id]"
										class="join__block-input"
										:type="input.type"
										:placeholder="input.placeholder"
										:required="input.required" />
								</template>
								<div v-if="v$Form[input.id]?.$error" class="join__block-input-error">
									{{ input.errorMsg }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="join__footer">
					<div class="join__policy" :class="{ error: v$Form['agreement']?.$error }">
						<span class="join__policy-checkbox">
							<input :id="JOIN.policy.id" v-model="formData['agreement']" required type="checkbox" />
							<label v-dompurify-html="JOIN.policy.label" :for="JOIN.policy.id"></label>
						</span>
						<div v-if="v$Form['agreement']?.$error" class="join__block-input-error">
							{{ JOIN.policy.errorMsg }}
						</div>
					</div>
					<button
						type="submit"
						class="join__submit-btn"
						:class="{ disabled: volunteerLoading }"
						@click="v$Form.$touch">
						<span>{{ volunteerLoading ? JOIN.submit.loading : JOIN.submit.title }}</span>
						<Icon v-if="volunteerLoading" name="svg-spinners:3-dots-scale" size="16" />
					</button>
					<template v-if="formStore.isJoinError">
						<span v-for="(error, i) in formStore.joinErrorMessage" :key="i" style="color: red">
							<b>Error</b> {{ error.field }}: {{ error.messages[0] }}
						</span>
					</template>
				</div>
			</form>
		</div>
		<BlocksPolicyModal @accept="handleAcceptAgreement" @close="privacyPolicyModal.close()" />
	</section>
</template>

<script setup lang="ts">
	import { useVuelidate } from '@vuelidate/core'
	import { maxLength, minLength, required } from '@vuelidate/validators'
	import { useReCaptcha } from 'vue-recaptcha-v3'
	import { countryCode, useJoinContent } from '~/constants/content'
	import type { IVolunteerInputs } from '~/types/content.interface'

	const { locale } = useI18n()
	const formStore = useFormStore()
	const recaptchaInstance = useReCaptcha()
	const recaptcha = async () => {
		await recaptchaInstance?.recaptchaLoaded()
		const token = await recaptchaInstance?.executeRecaptcha('')
		return token
	}

	const privacyPolicyModal = ref()
	// const submittedModal = ref()

	const { JOIN } = await useJoinContent()
	const { mutate: sendVolunteerForm, loading: volunteerLoading } = useVolunteerMutation()
	const formData = reactive({} as IVolunteerInputs)

	const formValidationRules: Partial<Record<keyof IVolunteerInputs, object>> = {
		name: { required },
		phone: { required, minLength: minLength(9), maxLength: maxLength(9) },
		agreement: { required, checked: (value: boolean) => value === true },
		help_types: { required },
	}

	const v$Form = useVuelidate(formValidationRules, formData)

	const handleSubmit = async () => {
		formStore.joinErrorMessage = []
		if (v$Form.value.$invalid) return
		await sendVolunteerForm({
			...formData,
			phone: `${countryCode} ${formData.phone}`,
			captcha_token: await recaptcha(),
		})
		if (formStore.isJoined) {
			v$Form.value.$reset()
			formData.name = ''
			formData.surname = ''
			formData.phone = ''
			formData.help_types = []
			formData.agreement = false
			formData.city = ''
			formData.district = ''
		}
	}

	function handleModals() {
		// submittedModal.value = document.querySelector('#submittedModal') as HTMLDialogElement
		if (window.matchMedia('(min-width: 1198.98px)').matches) {
			privacyPolicyModal.value = document.querySelector('#policyModal') as HTMLDialogElement
			document.querySelector('.join__policy-checkbox .link')?.addEventListener('click', () => {
				privacyPolicyModal.value?.showModal()
			})
		} else {
			document.querySelector('.join__policy-checkbox .link')?.addEventListener('click', () => {
				navigateTo(`/files/uzalert-privacy-policy-${locale.value}.pdf`, {
					open: {
						target: '_blank',
					},
					external: true,
				})
			})
		}
	}

	function handleAcceptAgreement() {
		formData['agreement'] = true
		privacyPolicyModal.value?.close()
	}

	onMounted(() => {
		handleModals()
		formData['help_types'] = []
	})
</script>

<style scoped lang="scss">
	.join {
		&__title {
			color: var(--orange);
			margin-bottom: 32px;
			text-align: center;
		}
		&__form {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 24px;
			@media (max-width: 767.98px) {
				display: flex;
				flex-direction: column;
			}
		}
		&__block {
			display: flex;
			flex-direction: column;
			gap: 16px;
			&-title {
				font-size: 25px;
				color: var(--primary-text);
				// margin-bottom: 16px;
			}
			&-checkboxes {
				display: grid;
				gap: 16px;
			}
			&-checkbox-item {
				display: flex;
				align-items: center;
				gap: 12px;
				&.error {
					input {
						outline: 1px solid var(--danger);
					}
				}
			}
			&-inputs {
				display: grid;
				gap: 12px;
			}
			&-input {
				background-color: var(--white);
				border: 1px solid var(--border);
				padding: 10px;
				line-height: 120%;
				min-height: 45px;
				width: 100%;
				&[type='tel'] {
					padding-left: 50px;
				}
				&-item {
					display: flex;
					justify-content: space-between;
					gap: 12px;
					&.error {
						.join__block-input {
							border-color: var(--danger);
						}
					}
					@media (max-width: 991.98px) {
						flex-direction: column;
						gap: 4px;
					}
				}
				&-label {
					white-space: nowrap;
				}
				&-wrapper {
					position: relative;
					max-width: 300px;
					width: 100%;
					@media (max-width: 991.98px) {
						max-width: 100%;
					}
				}
				&-tel {
					position: relative;
				}
				&-prefix {
					position: absolute;
					left: 10px;
					top: 50%;
					transform: translateY(-50%);
					margin-top: 0.5px;
				}
				&-error {
					font-size: 12px;
					color: var(--danger);
				}
			}
		}
		&__footer {
			grid-column: span 2;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 24px;
		}
		&__policy {
			// display: flex;
			// align-items: center;
			// gap: 8px;
			display: grid;
			gap: 4px;
			line-height: 115%;
			&.error {
				input {
					outline: 1px solid var(--danger);
				}
			}
			&-checkbox {
				display: flex;
				align-items: center;
				gap: 8px;
				cursor: pointer;
				label {
					:deep(span) {
						cursor: pointer;
					}
				}
			}
		}
		&__submit-btn {
			border: 1px solid var(--black);
			font-size: 16px;
			max-width: 300px;
			width: 100%;
			padding: 10px;
			border-radius: 20px;
			transition:
				0.3s border-color,
				0.3s background-color,
				0.3s color;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;

			&:hover {
				background-color: var(--orange);
				border-color: var(--orange);
				color: var(--white);
			}
		}
	}
</style>
