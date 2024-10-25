<template>
	<section class="partners">
		<div class="partners__container container">
			<UIHeading level="3" class="partners__title">{{ partners.title }}</UIHeading>
			<div class="partners__carousel">
				<NuxtImg
					v-for="(partner, i) in partners.items"
					:key="i"
					:src="partner.img"
					class="partners__carousel-img" />
			</div>
			<a :href="partners.actionBtn.href">
				<button class="partners__action-btn">{{ partners.actionBtn.text }}</button>
			</a>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { partners } from '~/constants/content'
</script>

<style scoped lang="scss">
	.partners {
		&__container {
			place-items: center;
			display: grid;
			gap: 24px;
		}
		&__title {
			color: var(--orange);
		}
		&__carousel {
			display: flex;
			justify-content: space-between;
			gap: 32px;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 20%;
				height: 100%;
				background: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, var(--bg-main) 100%);
			}
			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				width: 20%;
				height: 100%;
				background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--bg-main) 100%);
			}
			&-img {
				max-width: 200px;
				width: 100%;
				height: 100px;
			}
		}
		&__action-btn {
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
</style>
