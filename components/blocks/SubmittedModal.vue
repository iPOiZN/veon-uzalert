<template>
	<Teleport to="body">
		<Transition name="fade">
			<div v-if="formStore.isJoined || formStore.isRequested" class="submitted-modal">
				<div class="submitted-modal__container">
					<Icon name="line-md:confirm-circle" class="submitted-modal__icon" />
					<div class="submitted-modal__text">
						<div>{{ t('modal.thanks') }}</div>
						<div>{{ t('modal.inTouch') }}</div>
					</div>
					<button type="button" class="submitted-modal__btn" @click="handleClose">
						OK
					</button>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
	defineEmits<{
		(e: 'close'): void
	}>()

	const formStore = useFormStore()

    const {t} = useI18n()

    const handleClose = () => {
        formStore.isJoined = false
        formStore.isRequested = false
    }

	// const modal = ref<HTMLDialogElement | null>(null)
</script>

<style scoped lang="scss">
	.submitted-modal {
		width: 100%;
		height: 100svh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 15px;
		backdrop-filter: blur(2px);

		&__container {
			max-width: 600px;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			gap: 20px;
			background-color: var(--white);
			padding: 20px 60px;
			text-align: center;
			border-radius: 10px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		}
		&__icon {
			max-width: 100px;
			width: 100%;
			height: 70px;
			background-color: var(--success);
		}
		&__text {
			display: grid;
			place-items: center;
			font-size: 24px;
		}
		&__btn {
			border: 1px solid var(--orange);
			background-color: var(--orange);
			color: var(--white);
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
				background-color: var(--white);
				color: var(--orange);
			}
		}
	}
</style>
