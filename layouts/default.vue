<template>
	<div>
		<NuxtLoadingIndicator color="var(--black)" :throttle="10" />
		<LayoutHeader />
		<slot />
		<LayoutFooter />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
