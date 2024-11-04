<template>
	<section id="contacts-request" class="request">
		<div class="request__container container">
			<UIHeading level="3" class="request__title">{{ CONTACT_REQUEST.title }}</UIHeading>
			<form class="request__form" @submit.prevent="handleSubmit">
				<div class="request__form-inputs">
					<div v-for="(input, i) in CONTACT_REQUEST.inputs" :key="i" class="request__input-wrapper">
						<label :for="input.id">
							{{ input.label }}
							<span v-if="input.required" class="request__input-required">*</span>
						</label>
						<template v-if="input.type === 'textarea'">
							<textarea
								:id="input.id"
								v-model="formData[input.id]"
								class="request__input"
								:required="input.required"
								:rows="input.rows"
								:placeholder="input.placeholder"></textarea>
						</template>
						<template v-else-if="input.type === 'file'">
							<input
								:id="input.id"
								v-model="formData[input.id]"
								class="request__input"
								:type="input.type"
								:placeholder="input.placeholder"
								:required="input.required" />
						</template>
						<template v-else-if="['date', 'time'].includes(input.type)">
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
							<!-- <div class="request__input-dates">
								<input
									type="number"
									inputmode="numeric"
									min="1"
									max="31"
									:placeholder="input.date?.placeholder.day"
									class="request__input" />
								<select id="month" class="request__input request__input-dropdown">
									<option v-for="(month, idx) in input.date?.months" :key="idx">{{ month }}</option>
								</select>
								<input
									type="number"
									inputmode="numeric"
									min="1900"
									max="2100"
									:placeholder="input.date?.placeholder.year"
									class="request__input" />
							</div> -->
						</template>
						<template v-else-if="input.type === 'radio'">
							<div class="request__input-radios">
								<div v-for="(radio, idx) in input.radios" :key="idx" class="request__input-radio">
									<input
										:id="radio.id"
										v-model="formData[input.id]"
										type="radio"
										:name="input.name"
										:value="radio.id"
										:required="input.required"
										:checked="radio.checked" />
									<label :for="radio.id">{{ radio.label }}</label>
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
								<option v-for="(option, idx) in input.options" :key="idx">
									{{ option }}
								</option>
							</select>
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
					</div>
				</div>
				<div class="request__form-footer">
					<button type="submit" class="request__button">{{ CONTACT_REQUEST.submitBtn.text }}</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useContent } from '~/constants/content'

	const { CONTACT_REQUEST } = useContent()
	const formData = reactive({} as Record<string, string>)

	const handleSubmit = () => {
		console.log(formData)
	}

	onMounted(() => {
		CONTACT_REQUEST.inputs.forEach((input) => {
			formData[input.id] = ''
		})
	})
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
		}
		&__input {
			background-color: var(--white);
			border: 1px solid var(--border);
			padding: 10px;
			padding-top: 12px;
			resize: none;
			width: 100%;
			line-height: 120%;
			min-height: 45px;

			// &[type='date'] {
			// 	height: 40px;
			// }
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
				// &::-webkit-calendar-picker-indicator {
				// 	background: transparent;
				// 	bottom: 0;
				// 	color: transparent;
				// 	cursor: pointer;
				// 	height: 40px;
				// 	left: 0;
				// 	position: absolute;
				// 	right: 0;
				// 	bottom: 0;
				// 	width: auto;
				// }
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
					color: #aaa;
					// margin-right: 0.5em;
					position: absolute;
					left: 10px;
					top: 50%;
					transform: translateY((calc(25%)));
				}
			}
			// &-focus {
			// 	&::placeholder {
			// 		display: none;
			// 	}
			// }
			&-required {
				color: var(--danger);
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
				border-radius: 5px;
			}
		}
		&__button {
			width: 100%;
			padding: 16px;
			background-color: var(--orange);
			transition: 0.3s background-color;
			&:hover {
				background-color: var(--orange-hover);
			}
			&:active {
				background-color: var(--orange-active);
			}
		}
	}
</style>
