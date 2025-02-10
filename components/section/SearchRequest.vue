<template>
	<section id="contacts-request" class="request">
		<div class="request__container container">
			<UIHeading level="3" class="request__title">{{ SEARCH_REQUEST.title }}</UIHeading>
			<form class="request__form" @submit.prevent="handleSubmit">
				<div class="request__form-inputs">
					<div
						v-for="(input, i) in SEARCH_REQUEST.inputs"
						:key="i"
						class="request__input-wrapper"
						:class="{ error: v$Form[input.id]?.$error, disabled: input.disabled }">
						<label :for="input.id" class="request__input-label" :class="{ required: input.required }">
							{{ input.label }}
						</label>
						<template v-if="input.type === 'textarea'">
							<textarea
								:id="input.id"
								v-model="formData[input.id]"
								class="request__input"
								:required="input.required"
								:rows="input.rows"
								:placeholder="input.placeholder" />
						</template>
						<template v-else-if="input.type === 'file'">
							<BlocksUploadFile :input="input" @update="handleFileUpload" />
						</template>
						<template v-else-if="input.type && ['date', 'time'].includes(input.type)">
							<input
								:id="input.id"
								ref="inputDate"
								v-model="formData[input.id]"
								class="request__input"
								:placeholder="input.placeholder"
								:required="input.required"
								:type="input.type"
								:min="input.min"
								:max="input.max"
								onchange="this.placeholder = ''"
								ondblclick="this.showPicker()"
								onfocus="this.showPicker()" />
						</template>
						<template v-else-if="input.type === 'radio'">
							<div class="request__input-radios">
								<div v-for="(radio, idx) in input.radios" :key="idx" class="request__input-radio">
									<input
										:id="radio.name"
										v-model="formData[input.id]"
										type="radio"
										:name="input.name"
										:value="radio.id"
										:required="input.required"
										:checked="radio.checked" />
									<label :for="radio.name">{{ radio.label }}</label>
								</div>
							</div>
						</template>
						<template v-else-if="input.type === 'dropdown'">
							<select
								:id="input.id"
								v-model="formData[input.id]"
								class="request__input request__input-dropdown"
								:required="input.required"
								:name="input.name">
								<option value="" disabled>{{ input.placeholder }}</option>
								<option v-for="(option, idx) in input.options" :key="idx" :value="option.id">
									{{ option.label }}
								</option>
							</select>
						</template>
						<template v-else-if="input.type === 'tel'">
							<span class="request__input-tel">
								<label :for="input.id" class="request__input-prefix">+{{ countryCode }}</label>
								<input
									:id="input.id"
									v-model="formData[input.id]"
									class="request__input"
									:placeholder="input.placeholder"
									:required="input.required"
									:type="input.type"
									minlength="9"
									maxlength="9"
									oninput="this.value = this.value.replace(/[^0-9]/g, '')" />
							</span>
						</template>
						<template v-else>
							<input
								:id="input.id"
								v-model="formData[input.id]"
								class="request__input"
								:placeholder="input.placeholder"
								:required="input.required"
								:type="input.type" />
						</template>
						<div v-if="v$Form[input.id]?.$error" class="request__input-error">
							{{ input.errorMsg }}
						</div>
					</div>
				</div>
				<div class="request__form-footer">
					<button
						type="submit"
						class="request__button"
						:class="{ disabled: searchRequestLoading }"
						@click="v$Form.$touch">
						<span>{{
							searchRequestLoading ? SEARCH_REQUEST.submitBtn.loading : SEARCH_REQUEST.submitBtn.title
						}}</span>
						<Icon v-if="searchRequestLoading" name="svg-spinners:3-dots-scale" size="16" />
					</button>
					<template v-if="formStore.isRequestError">
						<span v-for="(error, i) in formStore.requestErrorMessage" :key="i" style="color: red">
							<b>Error</b> {{ error.field }}: {{ error.messages[0] }}
						</span>
					</template>
				</div>
			</form>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useVuelidate } from '@vuelidate/core'
	import { maxLength, minLength, required } from '@vuelidate/validators'
	import { useReCaptcha } from 'vue-recaptcha-v3'
	import { countryCode, useSearchRequestContent } from '~/constants/content'
	import type { ISearchRequestInputs } from '~/types/content.interface'

	const recaptchaInstance = useReCaptcha()

	const formStore = useFormStore()

	const recaptcha = async () => {
		await recaptchaInstance?.recaptchaLoaded()
		const token = await recaptchaInstance?.executeRecaptcha('')
		return token
	}
	// const [] = defineField('tel', { validateOnModelUpdate: true })

	const { SEARCH_REQUEST } = await useSearchRequestContent()
	const { mutate: searchRequestMutation, loading: searchRequestLoading } = useSearchRequestMutation()
	const formData = reactive({} as ISearchRequestInputs)

	const formValidationRules: Partial<Record<keyof ISearchRequestInputs, object>> = {
		applicant_full_name: { required },
		applicant_phone: { required, minLength: minLength(9), maxLength: maxLength(9) },
		missing_full_name: { required },
		missing_gender: { required },
		missing_date: { required },
		search_area_type: { required },
		missing_health: { required },
		missing_special_features: { required },
		upload_photo: { required },
	}

	const v$Form = useVuelidate(formValidationRules, formData)

	const handleSubmit = async () => {
		formStore.requestErrorMessage = []

		// if (!validateForm()) return
		if (v$Form.value.$invalid) return
		searchRequestMutation({
			...formData,
			applicant_phone: `${countryCode} ${formData.applicant_phone}`,
			missing_gender: +formData.missing_gender,
			missing_region: +formData.missing_region,
			missing_phone: `${countryCode} ${formData.missing_phone}`,
			search_area_type: +formData.search_area_type,
			captcha_token: await recaptcha(),
		} as ISearchRequestInputs)
		// console.log(formData)
		if (formStore.isRequested) {
			v$Form.value.$reset()
			for (const key in formData) {
				if (key in formData) {
					formData[key as keyof ISearchRequestInputs] = ''
				}
			}
		}
	}

	const handleFileUpload = (fileSrc: string) => {
		formData.upload_photo = fileSrc
	}
</script>

<style scoped lang="scss">
	.request {
		margin-top: 48px;
		&__container {
			display: grid;
			place-items: center;
		}
		&__title {
			color: var(--orange);
			text-align: center;
			line-height: 110%;
		}
		&__form {
			width: 100%;
			// display: grid;
			margin-top: 32px;
			&-footer {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 24px;
			}
		}
		&__form-inputs {
			column-count: 2;
			column-gap: 40px;
			gap: 40px;
			@media (max-width: 767.98px) {
				column-count: 1;
			}
		}
		&__input-wrapper {
			display: inline-grid;
			width: 100%;
			gap: 4px;
			margin-bottom: 32px;
			position: relative;
			&.error {
				.request__input {
					border-color: var(--danger);
				}
			}
		}
		&__input {
			background-color: var(--white);
			border: 1px solid var(--border);
			padding: 10px;
			// padding-top: 12px;
			resize: none;
			width: 100%;
			line-height: 120%;
			min-height: 45px;

			// &[type='date'] {
			// 	height: 40px;
			// }
			&::placeholder {
				color: var(--gray);
				// font-style: italic;
			}
			&-label {
				pointer-events: none;
			}
			&-error {
				font-size: 12px;
				color: var(--danger);
				// position: absolute;
				// bottom: -20px;
			}
			&-tel {
				position: relative;
				.request__input-prefix {
					position: absolute;
					left: 10px;
					top: 50%;
					transform: translateY(-50%);
				}
			}
			&[type='tel'] {
				padding-left: 50px;
			}
			&[type='date'],
			&[type='time'] {
				color: transparent;
				height: 40px;
				appearance: none;
				-webkit-appearance: none;
				-moz-appearance: none;
				&::-webkit-date-and-time-value {
					text-align-last: left;
				}
				&:focus {
					color: inherit;
					&::before {
						display: none;
					}
				}
				&[placeholder=''] {
					color: inherit;
					&::before {
						display: none;
					}
				}
				&:before {
					content: attr(placeholder) !important;
					color: var(--gray);
					// font-style: italic;
					// margin-right: 0.5em;
					position: absolute;
					left: 10px;
					top: 42px;
				}
			}
			&-dates {
				display: flex;
				gap: 16px;
			}
			&-radios {
				min-height: 40px;
				display: flex;
				align-items: center;
				gap: 24px;
			}
			&-radio {
				display: flex;
				align-items: center;
				gap: 8px;
			}
			&-dropdown {
				background-position: right 0.7rem top 50%;
				appearance: none;
				background-image: url('@/assets/icons/dropdown-arrow.svg');
				background-repeat: no-repeat;
				background-position: right 0.7rem top 50%;
				background-size: 0.65rem auto;
				border-radius: 0;
			}
		}
		&__button {
			width: 100%;
			padding: 16px;
			background-color: var(--orange);
			transition: 0.3s background-color;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			&:hover {
				background-color: var(--orange-hover);
			}
			&:active {
				background-color: var(--orange-active);
			}
		}
	}
</style>
