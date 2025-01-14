<template>
	<main class="main">
		<SectionSearchRequest />
	</main>
</template>

<script setup lang="ts">
	const { t } = useI18n()
	useSeoMeta({
		title: t('basics.pages.search'),
	})
</script>
