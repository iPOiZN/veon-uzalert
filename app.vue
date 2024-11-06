<script setup lang="ts">
	import { provideApolloClients } from '@vue/apollo-composable'
	import type { RouteLocationNormalized } from 'vue-router'

	provideApolloClients(useApollo().clients ?? {})
</script>

<template>
	<NuxtLayout>
		<NuxtPage :page-key="(route: RouteLocationNormalized) => route.path" />
	</NuxtLayout>
</template>
