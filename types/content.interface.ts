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
			id: string
			label: string
		}[]
	}
	contacts: {
		title: string
		inputs: {
			id: string
			label: string
			type: string
			required?: boolean
			placeholder?: string
			inputmode?: string
		}[]
	}
	policy: {
		id: string
		label: string
	}
	submit: {
		title: string
	}
}

export interface IFaq {
	title: string
	img: string
	accordion: {
		summary: string
		description: string
		icon?: string
	}[]
	footer?: {
		text?: string
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

export interface IContactsRequest {
	title: string
	inputs: {
		id: string
		label: string
		type: string
		required?: boolean
		placeholder?: string
		inputmode?: string
		rows?: number
		name?: string
		value?: string
		months?: string[]
		min?: string
		max?: string
		minValue?: string
		maxValue?: string
		radios?: {
			id: string
			label: string
			type?: string
			name?: string
			checked?: boolean
		}[]
		options?: string[]
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
		text: string
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
	contactsRequest: IContactsRequest
	partners: IPartners
}
