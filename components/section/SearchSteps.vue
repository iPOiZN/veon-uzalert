<template>
	<section class="steps">
		<div class="steps__container container">
			<UIHeading level="3" class="steps__title">{{ searchSteps.title }}</UIHeading>
			<div class="steps__content">
				<article v-for="(step, i) in searchSteps.articles" :key="i" class="steps__article">
					<Icon :name="step.icon" size="45px" />
					<p class="steps__article-description">{{ step.description }}</p>
				</article>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { searchSteps } from '~/constants/content'
</script>

<style scoped lang="scss">
	.steps {
		&__container {
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
			}
			&-description {
				color: var(--black);
			}
		}
	}
</style>
