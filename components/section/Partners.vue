<template>
	<section id="partners" class="partners">
		<div class="partners__container container">
			<UIHeading level="3" class="partners__title">{{ PARTNERS.title }}</UIHeading>
			<Swiper
				:autoplay="{
					delay: 0.5,
					disableOnInteraction: false,
				}"
				:css-mode="false"
				:modules="[Autoplay, FreeMode]"
				:speed="5000"
				:loop="true"
				:initial-slide="0"
				:slides-per-view="PARTNERS.items.length > 3 ? 4 : 3"
				:space-between="32"
				:free-mode="false"
				class="partners__carousel">
				<!-- <div class="partners__carousel-content"> -->
				<SwiperSlide
					v-for="(partner, i) in [...PARTNERS.items, ...PARTNERS.items]"
					:key="i"
					class="partners__carousel-item">
					<NuxtImg :src="partner.img" class="partners__carousel-img" loading="lazy" />
				</SwiperSlide>

				<!-- </div> -->
			</Swiper>
			<a :href="PARTNERS.actionBtn.href">
				<button class="partners__action-btn">{{ PARTNERS.actionBtn.text }}</button>
			</a>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { Autoplay, FreeMode } from 'swiper/modules'
	import { Swiper, SwiperSlide } from 'swiper/vue'
	import { useContent } from '~/constants/content'

	const { PARTNERS } = useContent()
</script>

<style scoped lang="scss">
	.partners {
		overflow: hidden;
		position: relative;
		&__container {
			place-items: center;
			display: grid;
			gap: 24px;
		}
		&__title {
			color: var(--orange);
		}
		&__carousel {
			// max-width: max-content;
			max-width: 800px;
			width: 100%;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 50%;
				height: 100%;
				background: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, var(--bg-main) 100%);
				z-index: 2;
			}
			&::after {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				width: 50%;
				height: 100%;
				background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--bg-main) 100%);
				z-index: 2;
			}
			:deep(.swiper-wrapper) {
				transition-timing-function: linear;
			}
			&-item {
				display: flex;
				justify-content: center;
				align-items: center;
				z-index: 0;
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
