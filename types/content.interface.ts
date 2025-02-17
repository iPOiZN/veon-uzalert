import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'vue'

interface ISearchRequestInput {
	id: [
		'applicant_full_name',
		'applicant_phone',
		'missing_full_name',
		'missing_gender',
		'missing_region',
		'missing_dob',
		'additional_area_of_search',
		'missing_phone',
		'missing_address',
		'missing_date',
		'missing_time',
		'police_report',
		'search_area_type',
		'circumstances_of_missing',
		'missing_health',
		'missing_clothes',
		'missing_special_features',
		'missing_carry_item',
		'additional_info',
		'family_contacts',
		'upload_photo',
		'captcha_token',
	][number]
}

export type ISearchRequestInputs = Record<ISearchRequestInput['id'], number | string>

interface IVolunteerInput {
	id: [
		'name',
		'surname',
		'phone',
		'city',
		'district',
		'help_types',
		'agreement',
		'captcha_token',
	][number]
}

export type IVolunteerInputs = Record<IVolunteerInput['id'], number | string | number[] | boolean>

export interface IIntro {
	title: string
	buttons: {
		title: string
		href: string
	}[]
}

export interface IWhoWeAre {
	title: string
	text: string
	img: string
}

export interface ISearchSteps {
	title: string
	articles: {
		icon: string
		description: string
	}[]
}

export interface IJoin {
	title: string
	help: {
		title: string
		checkboxes: {
			id: string | number
			name: string
			label: string
		}[]
		errorMsg?: string
	}
	contacts: {
		title: string
		inputs: {
			id: IVolunteerInput['id']
			label: string
			type: string
			required?: boolean
			placeholder?: string
			inputmode?: string
			errorMsg?: string
		}[]
	}
	policy: {
		id: string
		label: string
		errorMsg?: string
	}
	submit: {
		title: string
		loading?: string
	}
}

export interface IFaq {
	title: string
	img: string
	accordion: {
		question: string
		answer: string
		icon?: string
	}[]
	footer?: {
		text?: string
		videos: {
			src: string
			btnText: string
		}[]
	}
}

export interface IContact {
	title: string
	img: string
	description: string
	contacts: {
		href: string
		icon: string
		text: string
	}[]
	socials: {
		href: string
		id: string
		icon: string
	}[]
}

export interface ISearchRequest {
	title: string
	inputs: InputHTMLAttributes[] &
		TextareaHTMLAttributes[] &
		{
			id: ISearchRequestInput['id']
			label: string
			// type: InputTypeHTMLAttribute,
			// type: string
			// required?: boolean
			// placeholder?: string
			// inputmode?: string
			// rows?: number
			// name?: string
			// value?: string
			months?: string[]
			// min?: string
			// max?: string
			// minValue?: string
			// maxValue?: string
			// title?: string
			errorMsg?: string
			// disabled?: boolean
			radios?: {
				id: number | string
				label: string
				type?: string
				name?: string
				checked?: boolean
			}[]
			options?: {
				id: number | string
				name?: string
				label: string
			}[]
			// date?: {
			// 	placeholder: {
			// 		day: string
			// 		month: string
			// 		year: string
			// 	}
			// 	months: string[]
			// }
		}[]
	submitBtn: {
		title: string
		loading?: string
	}
}

export interface IPartners {
	title: string
	items: {
		id: string
		href: string
		img: string
	}[]
	actionBtn: {
		href: string
		text: string
	}
}

export interface IContent {
	intro: IIntro
	whoWeAre: IWhoWeAre
	searchSteps: ISearchSteps
	join: IJoin
	faq: IFaq
	contact: IContact
	contactsRequest: ISearchRequest
	partners: IPartners
}
