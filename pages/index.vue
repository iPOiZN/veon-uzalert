<template>
	<main class="main">
		<SectionIntro />
		<LazySectionWhoWe />
		<LazySectionSearchSteps />
		<LazySectionJoin />
		<LazySectionFaq />
		<LazySectionContactUs />
		<LazySectionPartners />
	</main>
</template>

<script setup lang="ts">
	const { t } = useI18n()
	useSeoMeta({
		title: t('basics.pages.home'),
	})
</script>

<style scoped lang="scss">
	// div {
	// 	height: 100svh;
	// 	background-color: red;
	// }
	.main {
		display: grid;
		// gap: 64px;
		section:not(.intro) {
			padding-top: 64px;
		}
	}
</style>
