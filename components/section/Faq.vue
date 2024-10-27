<template>
	<section class="faq">
		<div class="faq__container container">
			<UIHeading level="3" class="faq__title">{{ faq.title }}</UIHeading>
			<div class="faq__content">
				<div class="faq__block">
					<NuxtImg :src="faq.img" format="webp" class="faq__block-img" height="500px" loading="lazy" />
				</div>
				<div class="faq__block">
					<div class="faq__accordion">
						<details v-for="(item, i) in faq.accordion" :key="i" class="faq__accordion-details">
							<summary class="faq__accordion-summary">
								{{ item.summary }}
								<Icon :name="item.icon ?? 'local:route'" size="18px" />
							</summary>
							<p class="faq__accordion-description">
								{{ item.description }}
							</p>
						</details>
					</div>
				</div>
			</div>
			<div class="faq__footer">
				<span v-dompurify-html="faq.footer?.text"> </span>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { faq } from '~/constants/content'
</script>

<style scoped lang="scss">
	.faq {
		&__container {
			place-items: center;
		}
		&__title {
			color: var(--orange);
			margin-bottom: 32px;
		}
		&__content {
			display: grid;
			grid-template-columns: 0.8fr 1.2fr;
			align-items: flex-start;
			gap: 32px;
			margin-bottom: 24px;
			@media (max-width: 767.98px) {
				display: flex;
				flex-direction: column;
				align-items: stretch;
			}
		}
		&__block {
			@media (min-width: 767.98px) {
				&:has(img) {
					position: sticky;
					top: 24px;
				}
			}

			&-img {
				width: 100%;
				max-height: 500px;
				height: 100%;
				object-fit: cover;
			}
		}
		&__accordion {
			display: grid;
			gap: 8px;
			&-details {
				box-shadow: 0 0 2px 1px var(--border);
				border-radius: 6px;
				overflow: hidden;
				background-color: var(--white);
				&[open] {
					.faq__accordion-summary {
						color: var(--blue);
						.iconify {
							transform: scale(-1, -1) rotateX(180deg);
						}
					}
				}
			}
			&-summary {
				background-color: var(--bg-main);
				padding: 16px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-weight: bold;
				cursor: pointer;
				gap: 16px;
				transition: 0.3s color;
				.iconify {
					flex-shrink: 0;
					transition: 0.3s transform;
				}
			}
			&-description {
				padding: 16px;
				color: var(--primary-text);
				font-size: 14px;
			}
		}
		&__footer {
			:deep(a) {
				color: var(--blue);
			}
		}
	}
</style>
