<template>
	<header class="header" :class="{ scrolled: isScrolled }">
		<div class="header__container container">
			<div class="header__logo">
				<button class="nav__menu-btn" @click="asideStore.isOpen = !asideStore.isOpen">
					<Icon v-if="asideStore.isOpen" name="mdi:close" />
					<Icon v-else name="mdi:menu" />
				</button>
				<NuxtLinkLocale class="header__logo-link" to="/" @click="asideStore.isOpen = false">
					<NuxtImg src="/images/logo/uzalert-anim.gif" width="50" alt="UzAlert" />
				</NuxtLinkLocale>
			</div>

			<nav class="nav">
				<ul class="nav__menu" :class="asideStore.isOpen ? 'nav__menu--open' : ''">
					<li v-for="(item, i) in menuItems" :key="i" class="nav__menu-item">
						<NuxtLink
							:to="item.path"
							class="nav__menu-link"
							:class="{ active: item.path.includes(activeSection) }"
							@click="asideStore.isOpen = false">
							{{ item.name }}
						</NuxtLink>
					</li>
				</ul>
				<Teleport to="body">
					<Transition name="fade">
						<div v-if="asideStore.isOpen" class="layout-cover" @click="asideStore.isOpen = false"></div>
					</Transition>
				</Teleport>
			</nav>
			<div class="header__action">
				<div class="header__lang">
					<button
						v-for="(lang, i) in availableLocales"
						:key="i"
						class="header__lang-btn"
						@click="changeLang(lang)">
						<Icon :name="`circle-flags:${lang}`" />
					</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	import { useMenuContent } from '~/constants/menu'

	const { menuItems } = useMenuContent()

	const asideStore = useAsideStore()
	const { availableLocales, setLocale } = useI18n()

	const isScrolled = ref(false)

	let lastScrollTop = 0

	const changeLang = async (lang: string) => {
		await setLocale(lang)
		// window.location.reload()
	}

	const handleScroll = () => {
		const st = window.scrollY || document.documentElement.scrollTop
		if (st > lastScrollTop && st > 100) {
			isScrolled.value = true
		} else {
			isScrolled.value = false
		}
		lastScrollTop = st <= 0 ? 0 : st
	}

	const activeSection = ref('intro')

	onMounted(() => {
		window.addEventListener('scroll', handleScroll)

		const sections = document.querySelectorAll('section')

		sections.forEach((section) => {
			useScrollTrigger.create({
				trigger: section,
				start: 'center center',
				end: 'bottom+=64 center',
				scrub: true,

				onEnter: (self) => {
					if (self.trigger) {
						activeSection.value = self.trigger.id
					}
				},
				onEnterBack: (self) => {
					if (self.trigger) {
						activeSection.value = self.trigger.id
					}
				},
			})
		})
	})

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll)
	})
</script>

<style scoped lang="scss">
	// :deep(.router-link-active) {
	// 	color: var(--orange);
	// 	transition: 0.3s color;
	// }
	.header {
		// height: 74px;
		position: sticky;
		top: 0;
		z-index: 12;
		background-color: var(--white);
		border-bottom: 1px solid var(--border);
		transition: 0.3s transform;
		height: 60px;
		display: flex;
		align-items: center;
		&.scrolled {
			transform: translateY(-100%);
			// border-color: var(--border);
		}
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__logo {
			display: flex;
			align-items: center;
			gap: 10px;
			&-link {
				display: flex;
				align-items: center;
			}
		}
		&__action {
			display: flex;
			align-items: center;
			gap: 12px;
		}
		&__lang {
			display: flex;
			align-items: center;
			gap: 12px;
			&-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid var(--border);
				padding: 5px 10px;
				border-radius: 10px;
				&:hover {
					background-color: var(--orange);
				}
			}
		}
	}

	.nav {
		&__menu {
			display: flex;
			align-items: center;
			gap: 16px;
			@media (max-width: 767.98px) {
				position: fixed;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				background-color: var(--white);
				top: 60px;
				left: 0;
				height: 100%;
				min-width: 250px;
				padding: 16px;
				transform: translateX(-100%);
				transition: 0.3s transform;
				// display: flex;
				// flex-direction: column;
				// gap: 12px;
				// padding: 16px;
				// position: fixed;
				// top: 0;
				// left: 0;
				// width: 100%;
				// height: 100vh;
				// background-color: var(--white);
				&-item {
					width: 100%;
					padding: 8px;
					border-radius: 10px;
					font-weight: 600;
				}
			}
			&-link {
				transition: 0.3s color;
				&.active {
					color: var(--orange);
				}
			}

			&--open {
				transform: translateX(0);
			}
			&-btn {
				display: none;
				@media (max-width: 767.98px) {
					display: block;
				}
			}
		}
	}

	.layout-cover {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		// z-index: 99;
		width: 100vw;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		display: none;
		backdrop-filter: blur(10px);
		@media (max-width: 767.98px) {
			display: block;
		}
	}
</style>
