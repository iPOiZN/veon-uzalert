import searchRequestMutation from '~/graphql/searchRequestMutation.gql'

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
