// plugins/smooth-scroll.client.ts
let SmoothScroll: unknown

// Async import to ensure it only loads on client
async function initSmoothScroll() {
	try {
		// @ts-expect-error: no types
		SmoothScroll = (await import('smoothscroll-for-websites')).default
		;(SmoothScroll as (options: unknown) => void)({
			// Scrolling Core
			animationTime: 600, // [ms]
			stepSize: 80, // [px]

			// Acceleration
			accelerationDelta: 50, // 50
			accelerationMax: 3, // 3

			// Keyboard Settings
			keyboardSupport: true, // option
			arrowScroll: 100, // [px]

			// Pulse (less tweakable)
			pulseAlgorithm: true,
			pulseScale: 4,
			pulseNormalize: 1,

			// Other
			touchpadSupport: false, // ignore touchpad by default
			fixedBackground: true,
			excluded: '',
		})
	} catch (error) {
		console.error('Failed to initialize smooth scroll:', error)
	}
}

export default defineNuxtPlugin(() => {
	// Only run on client side
	if (import.meta.client) {
		// Initialize after component is mounted
		nextTick(() => {
			initSmoothScroll()
		})
	}
})
