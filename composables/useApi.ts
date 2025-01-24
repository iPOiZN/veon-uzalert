import getAreaTypesQuery from '~/graphql/getAreaTypes.gql'
import getGenderTypesQuery from '~/graphql/getGenderTypes.gql'
import getRegionTypesQuery from '~/graphql/getRegionTypes.gql'
import getVolunteerHelpTypesQuery from '~/graphql/getVolunteerHelpTypes.gql'
import searchRequestMutation from '~/graphql/searchRequestMutation.gql'
import volunteerMutation from '~/graphql/volunteerMutation.gql'
import type { FormError } from '~/types/form.interface'

export const useGetVolunteerHelpTypes = () => {
	const { mutate, loading, onError, onDone } = useMutation(getVolunteerHelpTypesQuery)

	const result = ref()

	onError((error) => {
		console.error(error)
	})

	onDone((res) => {
		const response = res.data.help_types
		if (response) {
			result.value = response
		} else {
			result.value = []
		}
	})

	return { mutate, loading, result }
}

export const useVolunteerMutation = () => {
	const formStore = useFormStore()
	const { mutate, loading, onDone, onError } = useMutation(volunteerMutation)

	onError((error) => {
		console.log(error)
	})

	onDone(({ data }) => {
		const response = data.volunteer.create
		if (response.name) {
			formStore.isJoined = true
		} else if (response.errors) {
			formStore.isJoined = false
			formStore.isJoinError = true
			response.errors.forEach((error: FormError) => {
				formStore.joinErrorMessage.push({
					field: error.field,
					messages: error.messages,
				})
			})
		}
	})

	return { mutate, loading }
}

export const useSearchRequestMutation = () => {
	const formStore = useFormStore()
	const { mutate, loading, onDone, onError } = useMutation(searchRequestMutation)

	onError((error) => {
		console.error(error)
	})

	onDone(({ data }) => {
		const response = data.missing_people.create
		if (response.applicant_full_name) {
			formStore.isRequested = true
		} else if (response.errors) {
			formStore.isRequested = false
			formStore.isRequestError = true
			response.errors.forEach((error: FormError) => {
				formStore.requestErrorMessage.push({
					field: error.field,
					messages: error.messages,
				})
			})
		}
	})

	return { mutate, loading }
}

export const useGetGenders = () => {
	const { mutate, loading, onError, onDone } = useMutation(getGenderTypesQuery)

	const result = ref()

	onDone((res) => {
		const response = res.data.gender_types
		if (response) {
			result.value = response
		} else {
			result.value = []
		}
	})

	onError((error) => {
		console.error(error)
	})

	return { mutate, result, loading }
}
export const useGetRegions = () => {
	const { mutate, loading, onError, onDone } = useMutation(getRegionTypesQuery)

	const result = ref()

	onDone((res) => {
		const response = res.data.region_types
		if (response) {
			result.value = response
		} else {
			result.value = []
		}
	})

	onError((error) => {
		console.error(error)
	})

	return { mutate, result, loading }
}
export const useGetAreas = () => {
	const { mutate, loading, onError, onDone } = useMutation(getAreaTypesQuery)

	const result = ref()

	onDone((res) => {
		const response = res.data.area_types
		if (response) {
			result.value = response
		} else {
			result.value = []
		}
	})

	onError((error) => {
		console.error(error)
	})

	return { mutate, result, loading }
}

// export const useGetTypes = () => {
// 	// function getGenderTypes() {
// 	const {
// 		load: getGenderTypes,
// 		result: genderTypes,
// 		loading: gendersLoading,
// 		onError: onGenderTypesError,
// 	} = useLazyQuery(getGenderTypesQuery)

// 	onGenderTypesError((error) => {
// 		console.error(error)
// 	})

// 	// return { load, result, loading }
// 	// }

// 	// function getRegionTypes() {
// 	const {
// 		load: getRegionTypes,
// 		result: regionTypes,
// 		loading: regionsLoading,
// 		onError: onRegionTypesError,
// 	} = useLazyQuery(getRegionTypesQuery)

// 	onRegionTypesError((error) => {
// 		console.error(error)
// 	})

// 	// return { load, result, loading }
// 	// }

// 	return { getGenderTypes, genderTypes, gendersLoading, regionTypes, regionsLoading, getRegionTypes }

// 	// function getAreaTypes() {
// 	// 	const { result, loading, onError } = useQuery(getAreaTypesQuery)

// 	// 	onError((error) => {
// 	// 		console.error(error)
// 	// 	})

// 	// 	return { result, loading }
// 	// }

// 	// return { getGenderTypes, getRegionTypes, getAreaTypes }
// }
