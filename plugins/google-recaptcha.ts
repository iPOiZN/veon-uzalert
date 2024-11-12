import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueReCaptcha, {
		siteKey: '6LfO6bEoAAAAAIPh-Cd_u6mCjoiaKZPr0u00_gG8',
		loaderOptions: {
			autoHideBadge: false,
			explicitRenderParameters: {
				badge: 'bottomright',
			},
		},
	})
})
