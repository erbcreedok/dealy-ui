import { useLocation } from 'react-router-dom'

import { LocationState } from 'src/types'

export const useLocationState = () => {
	const location = useLocation()

	return location.state as LocationState | null
}
