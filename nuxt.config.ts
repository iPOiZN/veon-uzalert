// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	future: {
		compatibilityVersion: 4,
	},
	ssr: true,
	app: {
		// layoutTransition: { name: 'layout', mode: 'default' },
		// pageTransition: { name: 'page', mode: 'out-in' },
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			// title: 'Beeline Fintech',
			meta: [
				{
					name: 'description',
					content: 'VEON UzAlert - People need people',
				},
				{
					property: 'og:site:name',
					content: 'VEON UzAlert - People need people',
				},
				{ name: 'theme-color', content: '#fff' },
				{
					name: 'viewport',
					content:
						'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
				},
				{ charset: 'utf-8' },
				{ name: 'Accept-Language', content: 'ru' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'apple-mobile-web-app-title', content: 'Beeline Fintech' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: 'Beeline Fintech' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
				{ name: 'mobile-web-app-capable', content: 'yes' },
				{ name: 'application-name', content: 'Beeline Fintech' },
				{ name: 'msapplication-TileColor', content: '#ffc40d' },
				{
					name: 'msapplication-TileImage',
					content: '/favicon/mstile-150x150.png',
				},
				{
					name: 'msapplication-config',
					content: '/favicon/browserconfig.xml',
				},
				{ name: 'msapplication-navbutton-color', content: '#ffffff' },
				{ name: 'msapplication-starturl', content: '/' },
			],
			link: [
				// {
				// 	rel: 'stylesheet',
				// 	href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				// },
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					type: 'image/png',
					href: '/favicon/apple-touch-icon.png',
				},
				{
					rel: 'icon',
					sizes: '32x32',
					type: 'image/png',
					href: '/favicon/favicon-32x32.png',
				},
				{
					rel: 'icon',
					sizes: '16x16',
					type: 'image/png',
					href: '/favicon/favicon-16x16.png',
				},
				{
					rel: 'manifest',
					href: '/favicon/site.webmanifest',
				},
				{
					rel: 'mask-icon',
					href: '/favicon/safari-pinned-tab.svg',
					color: '#5bbad5',
				},
			],
		},
		// 		noscript: [
		// 			{
		// 				children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2KZHLM5"
		// height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
		// 				body: true,
		// 			},
		// 			{
		// 				children: `<div><img src="https://mc.yandex.ru/watch/97634394" style="position:absolute; left:-9999px;" alt="" /></div>`,
		// 				body: true,
		// 			},
		// 		],
	},
	site: {
		url: 'https://fintech.vdev.website',
		name: 'VEON UzAlert',
		description: 'Людям нужны люди',
		// defaultLocale: 'en',
		// trailingSlash: true,
	},
	devServer: {
		port: 3000,
		// host: '192.168.110.42'
		// https: true,
		// https: {
		// 	key: 'localhost-privkey.pem',
		// 	cert: 'localhost-cert.pem',
		// },
	},
	routeRules: {
		'/**': {
			isr: 60,
		},
	},
	nitro: {
		compressPublicAssets: true,
		prerender: {
			routes: ['/'],
		},
	},
	sourcemap: {
		server: true,
		client: true,
	},
	vite: {
		css: {
			devSourcemap: true,
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
					sourceMap: true,
					// additionalData: '@use "@/assets/scss/settings"; @use "@/assets/scss/variables";',
					// additionalData: '@import "@/assets/scss/mixins";',
					// additionalData: '@use "@/assets/scss/_mixins.scss" as *;',
				},
			},
		},
		build: {
			chunkSizeWarningLimit: 500,
			outDir: 'build',
			minify: 'esbuild',
			manifest: true,

			// sourcemap: 'inline',
			reportCompressedSize: true,
			rollupOptions: {
				output: {
					// manualChunks: {
					// 	vendor: ['primevue', 'nuxt-swiper', 'chart.js'],
					// },
					manualChunks(id: string) {
						const HugeLibraries = ['primevue', 'swiper', 'chart.js', '@primevue', 'lodash']
						if (HugeLibraries.some((libName) => id.includes(`node_modules/${libName}`))) {
							return id.split('node_modules/')[1]!.split('/')[0]!.toString()
						}
					},
				},
			},
		},
	},
	css: ['@/assets/scss/main.scss', '@/assets/scss/_mixins.scss'],
	modules: [
		// 'nuxt-swiper',
		'@nuxt/icon',
		'@nuxt/eslint',
		'@pinia/nuxt',
		'@nuxt/image',
		'@nuxtjs/i18n',
		// '@nuxtjs/apollo',
		'@nuxtjs/seo',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		'nuxt-schema-org',
		'nuxt-og-image',
		'@nuxtjs/apollo',
		'@hypernym/nuxt-gsap',
	],
	gsap: {
		composables: true,
		extraPlugins: {
			scrollTrigger: true,
		},
	},
	icon: {
		// provider: 'server',
		clientBundle: {
			scan: {
				globInclude: ['components/**/*.vue', 'pages/**/*.vue', 'layouts/**/*.vue'],
				globExclude: ['node_modules', 'dist'],
			},
			includeCustomCollections: true,
			sizeLimitKb: 256,
		},
		customCollections: [
			{
				prefix: 'local',
				dir: './assets/icons',
			},
		],
	},
	i18n: {
		locales: [
			{
				code: 'ru',
				file: 'ru.json',
				language: 'ru-RU',
				name: 'Русский',
			},
			{
				code: 'uz',
				file: 'uz.json',
				language: 'uz-UZ',
				name: "O'zbek",
			},
		],
		langDir: 'locales',
		defaultLocale: 'ru',
		strategy: 'prefix',
		compilation: {
			strictMessage: false,
		},
	},
	apollo: {
		authType: 'Bearer',
		authHeader: 'Authorization',
		tokenStorage: 'cookie',
		defaultOptions: {
			query: {
				fetchPolicy: 'no-cache',
			},
			watchQuery: {
				fetchPolicy: 'no-cache',
			},
		},
		clients: {
			default: {
				httpLinkOptions: {
					credentials: 'include',
				},
				tokenName: 'token',
				httpEndpoint: import.meta.env.API_BASE_URL,
				// connectToDevTools: true,
			},
		},
	},
	// swiper: {
	// 	// Swiper options
	// 	//----------------------
	// 	prefix: 'Swiper',
	// 	// styleLang: 'scss',
	// 	modules: ['autoplay', 'free-mode'],
	// 	// modules: ['navigation', 'pagination', 'mousewheel', 'autoplay', 'free-mode'], // all modules are imported by default
	// },
	// plugins: ['~/plugins/gsap.client.ts'],
})
