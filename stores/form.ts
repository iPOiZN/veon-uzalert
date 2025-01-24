import type { FormError } from "~/types/form.interface";


export const useFormStore = defineStore('form', {
	state: () => ({
		isJoined: false,
		isRequested: false,
		isJoinError: false,
		joinErrorMessage: [] as FormError[],
        isRequestError: false,
        requestErrorMessage: [] as FormError[],
	}),
})
