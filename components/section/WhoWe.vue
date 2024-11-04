<template>
	<section id="whowe" class="whowe">
		<div class="whowe__container container">
			<article class="whowe__article">
				<div class="whowe__article-content">
					<UIHeading level="3" class="whowe__article-title">{{ WHO_WE_ARE.title }}</UIHeading>
					<p class="whowe__article-text">
						{{ WHO_WE_ARE.text }}
					</p>
				</div>
				<div class="whowe__article-img-wrapper">
					<NuxtImg :src="WHO_WE_ARE.img" format="webp" class="whowe__article-img" height="350px" />
				</div>
			</article>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useContent } from '~/constants/content'

	const { WHO_WE_ARE } = useContent()

	onMounted(() => {
		useGsap.from('.whowe__article-img', {
			scale: 2,
			scrollTrigger: {
				trigger: '.whowe__article-img',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			},
		})
	})
</script>

<style scoped lang="scss">
	.whowe {
		&__article {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
			gap: 24px;
			@media (max-width: 991.98px) {
				display: flex;
				flex-direction: column;
				text-align: center;
			}
			&-title {
				color: var(--orange);
				margin-bottom: 16px;
			}
			&-text {
				color: var(--primary-text);
			}
			&-img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				&-wrapper {
					overflow: hidden;
				}
			}
		}
	}
</style>
