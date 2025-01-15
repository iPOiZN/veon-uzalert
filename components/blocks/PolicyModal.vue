<template>
	<Teleport to="body">
		<dialog id="policyModal" class="policy-modal">
			<div class="policy-modal__container">
				<div class="policy-modal__content">
					<embed
						:src="`/files/uzalert-privacy-policy-${$i18n.locale}.pdf#toolbar=0&navpanes=0`"
						type="application/pdf" />
				</div>
				<div class="policy-modal__actions">
					<button
						type="button"
						class="policy-modal__actions-btn"
						aria-label="accept"
						@click="$emit('accept')">
						{{ $t('basics.buttons.accept') }}
					</button>
					<button
						type="button"
						class="policy-modal__actions-btn"
						aria-label="close"
						@click="$emit('close')">
						{{ $t('basics.buttons.close') }}
					</button>
				</div>
			</div>
		</dialog>
	</Teleport>
</template>

<script setup lang="ts">
	defineEmits<{
		(e: 'accept' | 'close'): void
	}>()
</script>

<style scoped lang="scss">
	.policy-modal {
		max-height: 550px;
		height: 100%;
		max-width: 1000px;
		width: 100%;
		background: transparent;
		border: none;
		&::backdrop {
			backdrop-filter: blur(2px);
		}
		// display: flex;
		// flex-direction: column;
		// padding-bottom: 60px;

		// position: relative;
		&__container {
			width: 100%;
			height: 100%;
			overflow: hidden;
			// background-color: var(--white);
			// padding: 20px;
		}
		&__content {
			position: relative;
			width: 100%;
			height: 100%;
			embed {
				width: 100%;
				height: 100%;
			}
		}
		&__actions {
			position: sticky;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			gap: 10px;
			padding: 14px;
			background-color: var(--white);
			box-shadow: 0 0 15px var(--black);
			&-btn {
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
	}
</style>
