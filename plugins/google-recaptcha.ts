import { VueReCaptcha } from 'vue-recaptcha-v3';


export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueReCaptcha, {
		siteKey: '6LdQNrcqAAAAAL5JGkkEH5k1teGUvkCnYMnxVSrX',
		loaderOptions: {
			autoHideBadge: false,
			explicitRenderParameters: {
				badge: 'bottomright',
			},
		},
	})
})