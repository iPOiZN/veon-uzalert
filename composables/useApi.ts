import getAreaTypesQuery from '~/graphql/getAreaTypes.gql';
import getGenderTypesQuery from '~/graphql/getGenderTypes.gql';
import getRegionTypesQuery from '~/graphql/getRegionTypes.gql';
import searchRequestMutation from '~/graphql/searchRequestMutation.gql';


export const useSearchRequestMutation = () => {
	const { mutate, loading, onDone, onError } = useMutation(searchRequestMutation)

	onError((error) => {
		console.error(error)
	})

	onDone((result) => {
		console.log(result)
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