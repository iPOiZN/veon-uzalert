import type {
	IContact,
	IContactsRequest,
	IFaq,
	IIntro,
	IJoin,
	IPartners,
	ISearchSteps,
	IWhoWeAre,
} from '~/types/content.interface'

// Create a composable to handle all the content
export const useContent = () => {
	const { t } = useI18n()

	const REGIONS = [
		t('basics.regions.tashkentCity'),
		t('basics.regions.tashkentRegion'),
		t('basics.regions.andijan'),
		t('basics.regions.fergana'),
		t('basics.regions.namangan'),
		t('basics.regions.syrdarya'),
		t('basics.regions.jizzakh'),
		t('basics.regions.samarkand'),
		t('basics.regions.navoi'),
		t('basics.regions.bukhara'),
		t('basics.regions.kashkadarya'),
		t('basics.regions.surkhandarya'),
		t('basics.regions.khorezm'),
		t('basics.regions.karakalpakstan'),
	]

	// const MONTHS = [
	// 	t('basics.months.january'),
	// 	t('basics.months.february'),
	// 	t('basics.months.march'),
	// 	t('basics.months.april'),
	// 	t('basics.months.may'),
	// 	t('basics.months.june'),
	// 	t('basics.months.july'),
	// 	t('basics.months.august'),
	// 	t('basics.months.september'),
	// 	t('basics.months.october'),
	// 	t('basics.months.november'),
	// 	t('basics.months.december'),
	// ]

	const INTRO: IIntro = {
		title: t('intro.title'),
		buttons: [
			{
				title: t('intro.btnVol'),
				href: '/#join',
			},
			{
				title: t('intro.btnSearch'),
				href: '/search',
			},
		],
	}

	const WHO_WE_ARE: IWhoWeAre = {
		title: t('about.title'),
		text: t('about.text'),
		img: '/images/whowe.jpg',
	}

	const SEARCH_STEPS: ISearchSteps = {
		title: t('search.title'),
		articles: [
			{
				icon: 'local:route',
				description: t('search.steps.step1'),
			},
			{
				icon: 'local:details',
				description: t('search.steps.step2'),
			},
			{
				icon: 'local:magnifier',
				description: t('search.steps.step3'),
			},
			{
				icon: 'local:people',
				description: t('search.steps.step4'),
			},
			{
				icon: 'local:connection',
				description: t('search.steps.step5'),
			},
			{
				icon: 'local:handshake',
				description: t('search.steps.step6'),
			},
		],
	}

	const JOIN: IJoin = {
		title: t('join.title'),
		help: {
			title: t('join.helpTitle'),
			checkboxes: [
				{
					id: 'walking_search',
					label: t('join.helps.walk'),
				},
				{
					id: 'car_search',
					label: t('join.helps.car'),
				},
				{
					id: 'calling_hospitals',
					label: t('join.helps.calls'),
				},
				{
					id: 'language_translator',
					label: t('join.helps.trans'),
				},
				{
					id: 'posting_flyers',
					label: t('join.helps.flyers'),
				},
			],
		},
		contacts: {
			title: t('join.contact.title'),
			inputs: [
				{
					id: 'name',
					label: t('join.contact.name'),
					placeholder: t('join.contact.name'),
					type: 'text',
					required: true,
				},
				{
					id: 'last_name',
					label: t('join.contact.surname'),
					placeholder: t('join.contact.surname'),
					type: 'text',
					required: true,
				},
				{
					id: 'phone',
					label: t('join.contact.phone'),
					placeholder: '+998',
					type: 'tel',
					inputmode: 'numeric',
					required: true,
				},
				{
					id: 'city',
					label: t('join.contact.city'),
					placeholder: t('join.contact.city'),
					type: 'text',
					required: true,
				},
				{
					id: 'district',
					label: t('join.contact.district'),
					placeholder: t('join.contact.district'),
					type: 'text',
				},
			],
		},
		policy: {
			id: 'privacy_policy',
			label: t('join.policy'),
		},
		submit: {
			title: t('join.submit'),
		},
	}

	const FAQ: IFaq = {
		title: t('faq.title'),
		img: '/images/faq.jpg',
		accordion: [
			{
				summary: t('faq.q1.title'),
				description: t('faq.q1.desc'),
			},
			{
				summary: t('faq.q2.title'),
				description: t('faq.q2.desc'),
			},
			{
				summary: t('faq.q3.title'),
				description: t('faq.q3.desc'),
			},
			{
				summary: t('faq.q4.title'),
				description: t('faq.q4.desc'),
			},
			{
				summary: t('faq.q5.title'),
				description: t('faq.q5.desc'),
			},
			{
				summary: t('faq.q6.title'),
				description: t('faq.q6.desc'),
			},
			{
				summary: t('faq.q7.title'),
				description: t('faq.q7.desc'),
			},
		],
		footer: {
			text: t('faq.footer'),
		},
	}

	const CONTACT: IContact = {
		title: t('contact.title'),
		img: '/images/contact-us.jpg',
		description: t('contact.desc'),
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
				href: 'https://www.facebook.com/share/g/pBu1nJB36tgMv48t/?mibextid=A7sQZp',
				id: 'facebook',
				icon: 'logos:facebook',
			},
			{
				href: 'https://www.instagram.com/invites/contact/?igsh=zkzfxsj2dsj3&utm_content=krdsugd',
				id: 'instagram',
				icon: 'skill-icons:instagram',
			},
			{
				href: 'https://t.me/UzAlert',
				id: 'telegram',
				icon: 'logos:telegram',
			},
			{
				href: 'https://www.threads.net/@uzalert?xmt=AQGzO-aVqZqLhgQG16TQljK8LVhNIoU5qZOb0czNYdLIkPA',
				id: 'threads',
				icon: 'bi:threads',
			},
			{
				href: 'https://ok.ru/group/58359270735896',
				id: 'ok',
				icon: 'local:ok',
			},
		],
	}

	const PARTNERS: IPartners = {
		title: t('partners.title'),
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
			href: 'tel:+998 88 198 06 10',
			text: t('partners.btn'),
		},
	}

	const CONTACT_REQUEST: IContactsRequest = {
		title: t('contactsRequest.title'),
		inputs: [
			{
				id: 'applicant_full_name',
				label: t('contactsRequest.applicantName'),
				required: true,
				type: 'text',
			},
			{
				id: 'applicant_phone',
				label: t('contactsRequest.applicantPhone'),
				required: true,
				type: 'tel',
			},
			{
				id: 'missing_full_name',
				label: t('contactsRequest.missingName'),
				required: true,
				type: 'text',
			},
			{
				id: 'missing_gender',
				label: t('contactsRequest.missingGender'),
				type: 'radio',
				name: 'gender',
				required: true,
				radios: [
					{
						id: 'male',
						label: t('contactsRequest.genderMale'),
						checked: true,
					},
					{
						id: 'female',
						label: t('contactsRequest.genderFemale'),
					},
				],
			},
			{
				id: 'missing_region',
				label: t('contactsRequest.missingRegion'),
				type: 'dropdown',
				name: 'region',
				value: '',
				placeholder: t('contactsRequest.missingRegionPlaceholder'),
				options: REGIONS,
			},
			{
				id: 'missing_dob',
				label: t('contactsRequest.missingDob'),
				placeholder: t('contactsRequest.dobPlaceholder'),
				type: 'date',
				max: new Date().toISOString().slice(0, 10),
			},
			{
				id: 'additional_area_of_search',
				label: t('contactsRequest.additionalSearchArea'),
				type: 'text',
			},
			{
				id: 'missing_phone',
				label: t('contactsRequest.missingPhone'),
				type: 'tel',
			},
			{
				id: 'missing_address',
				label: t('contactsRequest.missingAddress'),
				type: 'text',
			},
			{
				id: 'missing_date',
				label: t('contactsRequest.missingDate'),
				placeholder: t('contactsRequest.datePlaceholder'),
				type: 'date',
				max: new Date().toISOString().slice(0, 10),
			},
			{
				id: 'missing_time',
				label: t('contactsRequest.missingTime'),
				placeholder: t('contactsRequest.timePlaceholder'),
				type: 'time',
			},
			{
				id: 'police_report',
				label: t('contactsRequest.policeReport'),
				type: 'text',
			},
			{
				id: 'search_area_type',
				label: t('contactsRequest.searchAreaType'),
				type: 'radio',
				name: 'search_area_type',
				radios: [
					{
						id: 'city',
						label: t('contactsRequest.areaCity'),
						checked: true,
					},
					{
						id: 'region',
						label: t('contactsRequest.areaRegion'),
					},
				],
			},
			{
				id: 'circumstances_of_missing',
				label: t('contactsRequest.missingCircumstances'),
				type: 'textarea',
				rows: 5,
			},
			{
				id: 'missing_health',
				label: t('contactsRequest.missingHealth'),
				type: 'text',
				required: true,
			},
			{
				id: 'missing_clothes',
				label: t('contactsRequest.missingClothes'),
				type: 'text',
			},
			{
				id: 'missing_special_features',
				label: t('contactsRequest.missingFeatures'),
				type: 'text',
				required: true,
			},
			{
				id: 'missing_carryon_item',
				label: t('contactsRequest.missingCarryon'),
				type: 'text',
			},
			{
				id: 'additional_info',
				label: t('contactsRequest.additionalInfo'),
				type: 'text',
			},
			{
				id: 'family_contacts',
				label: t('contactsRequest.familyContacts'),
				type: 'text',
			},
			{
				id: 'upload_photo',
				label: t('contactsRequest.uploadPhoto'),
				type: 'file',
				required: true,
			},
		],
		submitBtn: {
			text: t('contactsRequest.sendButton'),
		},
	}

	return {
		INTRO,
		WHO_WE_ARE,
		SEARCH_STEPS,
		JOIN,
		FAQ,
		CONTACT,
		PARTNERS,
		CONTACT_REQUEST,
	}
}
