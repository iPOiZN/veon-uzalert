<template>
	<component :is="'h' + level">
		<slot />
	</component>
</template>

<script setup lang="ts">
	defineProps<{
		level: '1' | '2' | '3' | '4' | '5' | '6'
	}>()
</script>

<style lang="scss" scoped>
	// @import '@/assets/scss/_mixins.scss';
	// @import '@/assets/scss/_mixins.scss';

	h1 {
		font-family: 'Druk Wide Cyr', sans-serif;
		font-size: 40px;
		font-style: normal;
		font-weight: 700;
		// line-height: 48px;
		line-height: 100%;
		@media (max-width: 575.98px) {
			font-size: clamp(32px, 5vw, 40px);
		}
	}

	h2 {
		font-family: 'Druk Wide Cyr', sans-serif;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 40px;
		@media (max-width: 575.98px) {
			font-size: clamp(24px, 5vw, 32px);
		}
	}

	h3 {
		font-family: 'Druk Wide Cyr', sans-serif;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: 32px;
		@media (max-width: 575.98px) {
			font-size: clamp(20px, 5vw, 24px);
		}
	}

	h4 {
		font-family: 'Druk Wide Cyr', sans-serif;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
		@media (max-width: 575.98px) {
			font-size: clamp(16px, 5vw, 20px);
		}
	}

	h5 {
		font-family: 'Druk Wide Cyr', sans-serif;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
		@media (max-width: 575.98px) {
			font-size: clamp(14px, 5vw, 16px);
		}
	}

	h6 {
		font-family: 'Druk Wide Cyr', sans-serif;
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px;
		@media (max-width: 575.98px) {
			font-size: clamp(12px, 5vw, 14px);
		}
	}
</style>
