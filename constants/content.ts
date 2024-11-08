import type {
	IContact,
	IFaq,
	IIntro,
	IJoin,
	IPartners,
	ISearchRequest,
	ISearchSteps,
	IWhoWeAre,
} from '~/types/content.interface'

// Create a composable to handle all the content

export const countryCode = 998
export const homeContent = () => {
	const { t } = useI18n()

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

	return {
		INTRO,
		WHO_WE_ARE,
		SEARCH_STEPS,
		JOIN,
		FAQ,
		CONTACT,
		PARTNERS,
	}
}

export const searchRequestContent = async () => {
	const { t } = useI18n()

	const { mutate: getGenderTypes, result: genderTypes } = useGetGenders()
	await getGenderTypes()
	const { mutate: getRegionTypes, result: regionTypes } = useGetRegions()
	await getRegionTypes()
	const { mutate: getAreaTypes, result: areaTypes } = useGetAreas()
	await getAreaTypes()

	const SEARCH_REQUEST: ISearchRequest = {
		title: t('contactsRequest.title'),
		inputs: [
			{
				id: 'applicant_full_name',
				label: t('contactsRequest.applicantName'),
				// placeholder: t('contactsRequest.applicantNamePlaceholder'),
				required: true,
				type: 'text',
				error: t('contactsRequest.applicantNameError'),
			},
			{
				id: 'applicant_phone',
				label: t('contactsRequest.applicantPhone'),
				placeholder: t('contactsRequest.applicantPhonePlaceholder'),
				required: true,
				type: 'tel',
				error: t('contactsRequest.applicantPhoneError'),
			},
			{
				id: 'missing_full_name',
				label: t('contactsRequest.missingName'),
				// placeholder: t('contactsRequest.missingNamePlaceholder'),
				required: true,
				type: 'text',
				error: t('contactsRequest.missingNameError'),
			},
			{
				id: 'missing_gender',
				label: t('contactsRequest.missingGender'),
				type: 'radio',
				name: 'gender',
				required: true,
				error: t('contactsRequest.missingGenderError'),
				radios:
					(genderTypes.value as ISearchRequest['inputs'][0]['radios'])?.map((gender) => ({
						id: String(gender.id),
						name: gender.name,
						label: t(`contactsRequest.gender${gender.name}`),
					})) || [],
			},
			{
				id: 'missing_region',
				label: t('contactsRequest.missingRegion'),
				type: 'dropdown',
				name: 'region',
				value: '',
				placeholder: t('contactsRequest.missingRegionPlaceholder'),
				options:
					(regionTypes.value as ISearchRequest['inputs'][0]['options'])?.map((region) => ({
						id: String(region.id),
						name: region.name,
						label: t(`basics.regions.${region.id}`),
					})) || [],
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
				// placeholder: t('contactsRequest.additionalSearchAreaPlaceholder'),
				type: 'text',
			},
			{
				id: 'missing_phone',
				label: t('contactsRequest.missingPhone'),
				placeholder: t('contactsRequest.missingPhonePlaceholder'),
				type: 'tel',
			},
			{
				id: 'missing_address',
				label: t('contactsRequest.missingAddress'),
				// placeholder: t('contactsRequest.missingAddressPlaceholder'),
				type: 'text',
			},
			{
				id: 'missing_date',
				label: t('contactsRequest.missingDate'),
				placeholder: t('contactsRequest.datePlaceholder'),
				type: 'date',
				required: true,
				error: t('contactsRequest.missingDateError'),
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
				// placeholder: t('contactsRequest.policeReportPlaceholder'),
				type: 'text',
			},
			{
				id: 'search_area_type',
				label: t('contactsRequest.searchAreaType'),
				type: 'radio',
				name: 'search_area_type',
				required: true,
				error: t('contactsRequest.searchAreaTypeError'),
				radios:
					(areaTypes.value as ISearchRequest['inputs'][0]['radios'])?.map((area) => ({
						id: String(area.id),
						name: area.name,
						label: t(`contactsRequest.area${area.name}`),
					})) || [],
			},
			{
				id: 'circumstances_of_missing',
				label: t('contactsRequest.missingCircumstances'),
				// placeholder: t('contactsRequest.missingCircumstancesPlaceholder'),
				type: 'textarea',
				rows: 5,
			},
			{
				id: 'missing_health',
				label: t('contactsRequest.missingHealth'),
				// placeholder: t('contactsRequest.missingHealthPlaceholder'),
				type: 'text',
				required: true,
				error: t('contactsRequest.missingHealthError'),
			},
			{
				id: 'missing_clothes',
				label: t('contactsRequest.missingClothes'),
				// placeholder: t('contactsRequest.missingClothesPlaceholder'),
				type: 'text',
			},
			{
				id: 'missing_special_features',
				label: t('contactsRequest.missingFeatures'),
				// placeholder: t('contactsRequest.missingFeaturesPlaceholder'),
				type: 'text',
				required: true,
				error: t('contactsRequest.missingFeaturesError'),
			},
			{
				id: 'missing_carry_item',
				label: t('contactsRequest.missingCarryon'),
				// placeholder: t('contactsRequest.missingCarryonPlaceholder'),
				type: 'text',
			},
			{
				id: 'additional_info',
				label: t('contactsRequest.additionalInfo'),
				// placeholder: t('contactsRequest.additionalInfoPlaceholder'),
				type: 'text',
			},
			{
				id: 'family_contacts',
				label: t('contactsRequest.familyContacts'),
				// placeholder: t('contactsRequest.familyContactsPlaceholder'),
				type: 'text',
			},
			{
				id: 'upload_photo',
				label: t('contactsRequest.uploadPhoto'),
				type: 'file',
			},
		],
		submitBtn: {
			text: t('contactsRequest.sendButton'),
		},
	}

	return {
		SEARCH_REQUEST,
	}
}
