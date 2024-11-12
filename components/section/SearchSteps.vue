<template>
	<section id="search-steps" class="steps">
		<div class="steps__container container">
			<UIHeading level="3" class="steps__title">{{ SEARCH_STEPS.title }}</UIHeading>
			<div class="steps__content">
				<article v-for="(step, i) in SEARCH_STEPS.articles" :key="i" class="steps__article">
					<Icon :name="step.icon" size="45px" />
					<p class="steps__article-description">{{ step.description }}</p>
				</article>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { homeContent } from '~/constants/content'

	const { SEARCH_STEPS } = await homeContent()
</script>

<style scoped lang="scss">
	.steps {
		&__container {
			display: grid;
			place-items: center;
		}
		&__title {
			color: var(--orange);
			margin-bottom: 32px;
		}
		&__content {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 48px;
		}
		&__article {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			text-align: center;
			// min-height: 300px;
			gap: 24px;
			color: var(--orange);
			@media (max-width: 767.98px) {
				min-height: auto;
				// border: 1px solid #000;
				background-color: #ffffff50;
				// backdrop-filter: blur(10px);
				// padding: 12px 0;
				// @for $i from 1 through 7 {
				// 	&:nth-child(#{$i}) {
				// 		transform: translateY($i * -60px);
				// 		z-index: #{$i};
				// 	}
				// }
			}
			&-description {
				color: var(--black);
			}
		}
	}
</style>
