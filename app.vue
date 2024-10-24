<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router';
</script>

<template>
  <NuxtLayout>
		<NuxtPage :page-key="(route: RouteLocationNormalized) => route.path" />
	</NuxtLayout>
</template>
