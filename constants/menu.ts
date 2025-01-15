export const useMenuContent = () => {
	const { t } = useI18n()
	const localePath = useLocalePath()

	const menuItems = computed(() => [
		{
			name: t('basics.menu.home'),
			path: localePath('/#intro'),
		},
		{
			name: t('basics.menu.about'),
			path: localePath('/#whowe'),
		},
		{
			name: t('basics.menu.questions'),
			path: localePath('/#faq'),
		},
		{
			name: t('basics.menu.contacts'),
			path: localePath('/#contact'),
		},
	])

	return { menuItems }
}
