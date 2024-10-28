<template>
	<footer class="footer">
		<div class="footer__container container">
			<p class="footer__text">{{ new Date().getFullYear() }} UzAlert</p>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.footer {
		background-color: #202942;
		color: var(--white);
		padding: 32px 0;
		margin-top: 48px;
		&__container {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
