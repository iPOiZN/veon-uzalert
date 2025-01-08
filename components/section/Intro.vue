<template>
	<section id="intro" class="intro">
		<NuxtImg src="/images/intro-bg.jpg" format="webp" class="intro__bg" />
		<div class="intro__container container">
			<div class="intro__content">
				<div class="intro__title-wrapper">
					<UIHeading level="1" class="intro__title">{{ INTRO.title }}</UIHeading>
				</div>
				<div class="intro__buttons">
					<NuxtLinkLocale
						v-for="(button, i) in INTRO.buttons"
						:key="i"
						:to="button.href"
						class="intro__link">
						<button>{{ button.title }}</button>
					</NuxtLinkLocale>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { useIntroContent } from '~/constants/content'

	const { INTRO } = await useIntroContent()

	onMounted(() => {
		useGsap.to('.intro__bg', {
			yPercent: 20,
			scale: 1.2,
			scrollTrigger: {
				trigger: '.intro__bg',
				start: 'top-=60px',
				end: 'bottom+=200px top',
				scrub: true,
			},
		})
	})
</script>

<style scoped lang="scss">
	.intro {
		position: relative;
		height: clamp(600px, 100vw, max(800px, calc(100svh - 60px)));
		overflow: clip;
		background-color: var(--black);
		&__bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			// z-index: 1;
			object-position: right;
			// filter: blur(8px) saturate(0);
			// transform: scale(1.5);
			will-change: transform;
			// animation: onStart 2s 1 forwards;
			// @keyframes onStart {
			// 	0% {
			// 		filter: blur(8px) saturate(0);
			// 	}
			// 	100% {
			// 		filter: blur(0) saturate(1);
			// 	}
			// }
			@media (max-width: 991.98px) {
				opacity: 0.5;
				object-position: -800px;
			}
		}
		&__container {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			height: 100%;
			padding-top: 50px;
			position: relative;
			z-index: 1;
			@media (max-width: 767.98px) {
				align-items: flex-start;
				justify-content: center;
			}
		}
		&__content {
			color: var(--white);
			@media (max-width: 991.98px) {
				// color: var(--black);
				text-align: center;
			}
		}
		&__title {
			// margin-bottom: 24px;
			line-height: 115%;
			@media (min-width: 375px) {
				transform: translateY(150%);
				animation: onStart 1s cubic-bezier(0.86, 0, 0.07, 1) 1 forwards;
			}
			@keyframes onStart {
				0% {
					transform: translateY(150%);
				}
				100% {
					transform: translateY(0);
				}
			}

			&-wrapper {
				overflow: hidden;
				height: min-content;
				margin-bottom: 24px;
			}
		}
		&__buttons {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;

			@media (max-width: 767.98px) {
				justify-content: center;
			}
		}
		&__link {
			opacity: 0;
			animation: opacityStart 1s 0.4s 1 forwards;
			@keyframes opacityStart {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
			@for $i from 1 through 2 {
				&:nth-child(#{$i}) {
					animation-delay: 0.7s + $i * 0.2s;
				}
			}
		}
		button {
			padding: 12px;
			border: 1px solid var(--white);
			border-radius: 20px;
			color: var(--white);
			display: flex;
			align-items: center;
			justify-content: center;
			transition:
				0.3s background-color,
				0.3s border-color;

			&:hover {
				background-color: var(--orange);
				border-color: var(--orange);
			}
			@media (max-width: 991.98px) {
				// color: var(--black);
				// background-color: var(--orange);
				// border-color: var(--orange);
			}
		}
	}
</style>
