<template>
	<header class="header" :class="{ scrolled: isScrolled }">
		<div class="header__container container">
			<div class="header__logo">
				<button class="nav__menu-btn" @click="asideStore.isOpen = !asideStore.isOpen">
					<Icon v-if="asideStore.isOpen" name="mdi:close" />
					<Icon v-else name="mdi:menu" />
				</button>
				<NuxtImg src="/images/logo/adtech_black_left.png" width="100" />
				<NuxtImg src="/images/logo/uzalert.png" width="50" />
			</div>

			<nav class="nav">
				<ul class="nav__menu" :class="asideStore.isOpen ? 'nav__menu--open' : ''">
					<li v-for="(item, i) in menuItems" :key="i" class="nav__menu-item">
						<NuxtLink :to="item.path" class="nav__menu-link">{{ item.name }}</NuxtLink>
					</li>
				</ul>
				<Teleport to="body">
					<Transition name="fade">
						<div v-if="asideStore.isOpen" class="layout-cover" @click="asideStore.isOpen = false"></div>
					</Transition>
				</Teleport>
			</nav>
			<div class="header__action">
				<div>
					<button>Ру</button>
					<button>Uz</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	import { menuItems } from '~/constants/menu'

	const asideStore = useAsideStore()

	const isScrolled = ref(false)

	let lastScrollTop = 0

	const handleScroll = () => {
		const st = window.scrollY || document.documentElement.scrollTop
		if (st > lastScrollTop && st > 100) {
			isScrolled.value = true
		} else {
			isScrolled.value = false
		}
		lastScrollTop = st <= 0 ? 0 : st
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll)
	})

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll)
	})
</script>

<style scoped lang="scss">
	:deep(.router-link-active) {
		color: var(--orange);
		transition: 0.3s color;
	}
	.header {
		// height: 74px;
		position: sticky;
		top: 0;
		z-index: 2;
		background-color: var(--white);
		border-bottom: 1px solid var(--border);
		transition: 0.3s transform;
		&.scrolled {
			transform: translateY(-100%);
		}
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__logo {
			display: flex;
			align-items: center;
		}
		&__action {
			display: flex;
			align-items: center;
			gap: 12px;
		}
	}

	.nav {
		&__menu {
			display: flex;
			align-items: center;
			gap: 16px;
			@media (max-width: 575.98px) {
				position: fixed;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				background-color: var(--white);
				top: 59px;
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

			&--open {
				transform: translateX(0);
			}
			&-btn {
				display: none;
				@media (max-width: 575.98px) {
					display: block;
				}
			}
		}
	}

	.layout-cover {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		// z-index: 99;
		width: 100vw;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		display: none;
		@media (max-width: 575.98px) {
			display: block;
		}
	}
</style>
