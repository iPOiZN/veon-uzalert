<template>
	<section id="join" class="join">
		<div class="join__container container">
			<UIHeading level="3" class="join__title">{{ JOIN.title }}</UIHeading>
			<form class="join__form" @submit.prevent="handleSubmit">
				<div class="join__block">
					<div class="join__block-title">{{ JOIN.help.title }}</div>
					<ul class="join__block-checkboxes">
						<li v-for="(checkbox, i) in JOIN.help.checkboxes" :key="i" class="join__block-checkbox-item">
							<input :id="checkbox.id" type="checkbox" />
							<label :for="checkbox.id">{{ checkbox.label }}</label>
						</li>
					</ul>
				</div>
				<div class="join__block">
					<div class="join__block-title">{{ JOIN.contacts.title }}</div>
					<div class="join__block-inputs">
						<div v-for="(input, i) in JOIN.contacts.inputs" :key="i" class="join__block-input-item">
							<label :for="input.id">{{ input.label }}</label>
							<input
								:id="input.id"
								:type="input.type"
								:placeholder="input.placeholder"
								:required="input.required" />
						</div>
					</div>
				</div>
				<div class="join__footer">
					<div class="join__policy">
						<input :id="JOIN.policy.id" required type="checkbox" />
						<label v-dompurify-html="JOIN.policy.label" :for="JOIN.policy.id"></label>
					</div>
					<button type="submit" class="join__submit-btn">{{ JOIN.submit.title }}</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useContent } from '~/constants/content'

	const { JOIN } = useContent()

	const handleSubmit = () => {
		console.log('hello')
	}
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
			&-title {
				font-size: 25px;
				color: var(--primary-text);
				margin-bottom: 16px;
			}
			&-checkboxes {
				display: grid;
				gap: 16px;
			}
			&-checkbox-item {
				display: flex;
				align-items: center;
				gap: 12px;
			}
			&-inputs {
				display: grid;
				gap: 12px;
			}
			&-input-item {
				display: flex;
				justify-content: space-between;
				gap: 12px;
				@media (max-width: 767.98px) {
					flex-direction: column;
					gap: unset;
				}
				label {
					white-space: nowrap;
				}
				input {
					background-color: var(--white);
					border: 1px solid var(--border);
					max-width: 300px;
					width: 100%;
					padding: 10px;
					@media (max-width: 767.98px) {
						max-width: 100%;
					}
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
			display: flex;
			align-items: center;
			gap: 8px;
			line-height: 115%;
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
			&:hover {
				background-color: var(--orange);
				border-color: var(--orange);
				color: var(--white);
			}
		}
	}
</style>
