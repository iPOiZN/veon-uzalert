export const intro = {
	title: 'Людям нужны люди',
	buttonOne: 'Стать волонтером',
	buttonTwo: 'Заявка на поиск',
}

export const whoWeAre = {
	title: 'Кто мы',
	text: 'UzAlert это группа волонтёров, которая оказывает помощь в поиске без вести пропавших людей, а также является единственной в Узбекистане связующей и направляющей добровольной группой, куда можно обратиться по вопросам связанным с поиском пропавших людей.',
}

export const searchSteps = {
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

export const join = {
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
