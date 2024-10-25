import type { IContact, IFaq, IIntro, IJoin, ISearchSteps, IWhoWeAre } from '~/types/content.interface'

export const intro: IIntro = {
	title: 'Людям нужны люди',
	buttonOne: 'Стать волонтером',
	buttonTwo: 'Заявка на поиск',
}

export const whoWeAre: IWhoWeAre = {
	title: 'Кто мы',
	text: 'UzAlert это группа волонтёров, которая оказывает помощь в поиске без вести пропавших людей, а также является единственной в Узбекистане связующей и направляющей добровольной группой, куда можно обратиться по вопросам связанным с поиском пропавших людей.',
	img: '/images/whowe.jpg',
}

export const searchSteps: ISearchSteps = {
	title: 'Этапы поиска',
	articles: [
		{
			icon: 'local:route',
			description:
				'Проведение детального опроса родственников пропавшего лица с целью создания точного ориентировочного портрета',
		},
		{
			icon: 'local:details',
			description:
				'Изучение деталей, привычек, маршрутов, составление списков знакомых. Оформление и печатать ориентировки',
		},
		{
			icon: 'local:magnifier',
			description: 'Привлечение активистов для выезда и обхода территорий, расклеивание ориентировки',
		},
		{
			icon: 'local:people',
			description:
				'Систематический обзвон медицинских учреждений (больниц, моргов), приютов для бездомных и религиозных организаций (монастырей). Поддержание постоянной связи с органами внутренних дел.',
		},
		{
			icon: 'local:connection',
			description:
				'Распространение информации в интернете (Telegram, Facebook, Одноклассники, Instagram)',
		},
		{
			icon: 'local:handshake',
			description:
				'Предоставление подробных инструкций для лиц, столкнувшихся с пропажей близкого человека, а также рекомендации для оказания помощи нуждающимся',
		},
	],
}

export const join: IJoin = {
	title: 'Присоединяйтесь',
	help: {
		title: 'Чем вы готовы помогать',
		checkboxes: [
			{
				id: 'walking_search',
				label: 'Пеший поиск',
			},
			{
				id: 'car_search',
				label: 'Поиск на авто',
			},
			{
				id: 'calling_hospitals',
				label: 'Обзвон больниц',
			},
			{ id: 'language_translator', label: 'Переводчик русский-узбекский' },
			{ id: 'posting_flyers', label: 'Printing or posting flyers' },
		],
	},
	contacts: {
		title: 'Ваши контактные данные',
		inputs: [
			{
				id: 'name',
				label: 'Имя',
				placeholder: 'Ваше имя',
				type: 'text',
				required: true,
			},
			{
				id: 'last_name',
				label: 'Фамилия',
				placeholder: 'Ваша фамилия',
				type: 'text',
				required: true,
			},
			{
				id: 'phone',
				label: 'Номер телефона',
				placeholder: '+998',
				type: 'tel',
				inputmode: 'numeric',
				required: true,
			},
			{
				id: 'city',
				label: 'Город',
				placeholder: 'Выберите город',
				type: 'text',
				required: true,
			},
			{
				id: 'district',
				label: 'Район',
				placeholder: 'Выберите район',
				type: 'text',
			},
		],
	},
	policy: {
		id: 'privacy_policy',
		label: 'Согласен с условиями и политикой обработки персональных данных',
	},
	submit: {
		title: 'Присоединиться',
	},
}

export const faq: IFaq = {
	title: 'Часто задаваемые вопросы',
	img: '/images/faq.jpg',
	accordion: [
		{
			summary: 'Отряд собирает деньги?',
			description:
				'Отряд UzAlert не собирает деньги, не имеет расчётных счетов, виртуальных кошельков и осуществляет свою деятельность безвозмездно. Наша задача- поиск людей и профилактика их пропаж.',
		},
		{
			summary:
				'Почему отряд не делиться информацией о том как, где и при каких условиях нашёлся пропавший человек?',
			description:
				'Отряд UzAlert не собирает деньги, не имеет расчётных счетов, виртуальных кошельков и осуществляет свою деятельность безвозмездно. Наша задача- поиск людей и профилактика их пропаж.',
		},
		{
			summary: 'Работает ли отряд по всему Узбекистану?',
			description:
				'Отряд UzAlert не собирает деньги, не имеет расчётных счетов, виртуальных кошельков и осуществляет свою деятельность безвозмездно. Наша задача- поиск людей и профилактика их пропаж.',
		},
		{
			summary: 'В каких случаях, отряд отказывает в поиске?',
			description:
				'Отряд UzAlert не собирает деньги, не имеет расчётных счетов, виртуальных кошельков и осуществляет свою деятельность безвозмездно. Наша задача- поиск людей и профилактика их пропаж.',
		},
		{
			summary: 'Какая помощь необходима от волонтёров чаще всего?',
			description:
				'Отряд UzAlert не собирает деньги, не имеет расчётных счетов, виртуальных кошельков и осуществляет свою деятельность безвозмездно. Наша задача- поиск людей и профилактика их пропаж.',
		},
		{
			summary: 'Могу ли я посодействовать поискам сидя дома?',
			description:
				'Отряд UzAlert не собирает деньги, не имеет расчётных счетов, виртуальных кошельков и осуществляет свою деятельность безвозмездно. Наша задача- поиск людей и профилактика их пропаж.',
		},
		{
			summary: 'Как действовать, если я увидел(а) человека, похожего по описанию на пропавшего?',
			description:
				'Отряд UzAlert не собирает деньги, не имеет расчётных счетов, виртуальных кошельков и осуществляет свою деятельность безвозмездно. Наша задача- поиск людей и профилактика их пропаж.',
		},
	],
	footer: {
		text: 'Если вы не нашли нужный вам ответ, <a href="#">напишите нам</a> и мы обязательно вам ответим',
	},
}

export const contact: IContact = {
	title: 'Контакты',
	img: '/images/contact-us.jpg',
	description:
		'Если у вас пропал близкий, или вы владеете информацией о пропавшем человеке, есть вопросы, или хотите принять участие в нашей деятельности <a href="#"><b>прямо сейчас</b></a> позвоните на телефоны горячей линии',

	contacts: [
		{
			href: 'mailto:uzalert@mail.ru',
			icon: 'local:mail',
			text: 'uzalert@mail.ru',
		},
		{
			href: 'tel:+998 88 198 06 10',
			icon: 'local:phone',
			text: '+998 88 198 06 10',
		},
	],

	socials: [
		{
			href: '#',
			id: 'facebook',
			icon: 'logos:facebook',
		},
		{
			href: '#',
			id: 'instagram',
			icon: 'skill-icons:instagram',
		},
		{
			href: '#',
			id: 'telegram',
			icon: 'logos:telegram',
		},
		{
			href: '#',
			id: 'threads',
			icon: 'bi:threads',
		},
		{
			href: '#',
			id: 'ok',
			icon: 'local:ok',
		},
	],
}

export const partners = {
	title: 'Наши партнеры',
	items: [
		{
			id: 'ova',
			href: '#',
			img: '/images/partners/ova.svg',
		},
		{
			id: 'yandex_go',
			href: '#',
			img: '/images/partners/yandex-go.svg',
		},
		{
			id: 'veon_adtech',
			href: '#',
			img: '/images/partners/veon-adtech.svg',
		},
	],
	actionBtn: {
		href: '#',
		text: 'Стать партнером',
	}
}
