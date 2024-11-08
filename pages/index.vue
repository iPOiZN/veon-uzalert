<template>
	<main class="main">
		<SectionIntro />
		<SectionWhoWe />
		<SectionSearchSteps />
		<SectionJoin />
		<SectionFaq />
		<SectionContactUs />
		<SectionPartners />
	</main>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: 'Home',
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
