export const useMenuContent = () => {
	const { t } = useI18n()

	const menuItems = [
		{
			name: t('basics.menu.home'),
			path: '/',
		},
		{
			name: t('basics.menu.about'),
			path: '/about',
		},
		{
			name: t('basics.menu.questions'),
			path: '/questions',
		},
		{
			name: t('basics.menu.contacts'),
			path: '/contacts',
		},
	]

	return { menuItems }
}
