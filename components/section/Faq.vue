<template>
	<section id="faq" class="faq">
		<div class="faq__container container">
			<UIHeading level="3" class="faq__title">{{ FAQ.title }}</UIHeading>
			<div class="faq__content">
				<div class="faq__block">
					<NuxtImg :src="FAQ.img" format="webp" class="faq__block-img" height="500px" loading="lazy" />
				</div>
				<div class="faq__block">
					<div class="faq__accordion">
						<details v-for="(item, i) in FAQ.accordion" :key="i" class="faq__accordion-details">
							<summary class="faq__accordion-summary">
								{{ item.question }}
								<Icon :name="item.icon ?? 'local:route'" size="18px" />
							</summary>

							<p v-dompurify-html="item.answer" class="faq__accordion-description"></p>
						</details>
					</div>
				</div>
			</div>
			<div class="faq__footer">
				<span v-html="FAQ.footer?.text"> </span>
				<div class="faq__footer-videos">
					<button
						v-for="(item, i) in FAQ.footer?.videos"
						:key="i"
						class="faq__footer-videos-btn"
						@click="openVideo(item.src)">
						{{ item.btnText }}
					</button>
				</div>
			</div>
			<Teleport to="body">
				<dialog id="faqVideoModal" ref="faqVideoModal" class="faq-video-modal" @click.self="handleClose">
					<div class="faq-video-modal__content">
						<video
							v-if="selectedVideo"
							playsinline
							controls
							autoplay
							:src="selectedVideo"
							alt="video"
							preload="none" />
						<button type="button" class="faq-video-modal__close" @click="handleClose">
							<Icon name="mdi:close" size="24" />
						</button>
					</div>
				</dialog>
			</Teleport>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useFaqContent } from '~/constants/content'

	const { FAQ } = await useFaqContent()

	const faqVideoModal = ref<HTMLDialogElement | null>(null)

	const selectedVideo = ref('')

	const openVideo = (src: string) => {
		selectedVideo.value = src
		faqVideoModal.value?.showModal()
	}
	const handleClose = () => {
		selectedVideo.value = ''
		faqVideoModal.value?.close()
	}
</script>

<style scoped lang="scss">
	.faq {
		&__container {
			text-align: center;
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
			text-align: left;
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
			&-videos {
				display: flex;
				align-items: center;
				gap: 12px;
				justify-content: center;
				margin-top: 16px;
				&-btn {
					padding: 8px 16px;
					// border: 1px solid #000;
					background-color: var(--orange);
					border-radius: 20px;
					transition: 0.3s background-color;
					&:hover {
						background-color: var(--orange-hover);
					}
					&:active {
						background-color: var(--orange-active);
					}
				}
			}
		}
	}
	.faq-video-modal {
		border: none;
		background: transparent;
		&::backdrop {
			backdrop-filter: blur(2px);
		}
		&__content {
			position: relative;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
			// object-fit: contain;
			width: 100%;
			height: inherit;
			video {
				width: 100%;
				max-height: calc(100svh - 80px);

				object-fit: contain;
			}
		}
		&__close {
			position: absolute;
			top: 15px;
			right: 15px;
			padding: 10px;
			background-color: var(--white);
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 0 2px 1px var(--border);
			opacity: 0.5;
		}
	}
</style>
