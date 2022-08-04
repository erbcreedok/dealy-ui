import { AuthRequests } from '../requests'

export const loadApplicationConfig = async () => {
	const tokens = await AuthRequests.obtainToken({
		username: process.env.REACT_APP_DEV_LOGIN,
		password: process.env.REACT_APP_DEV_PASSWORD,
	}).then((res) => res.data)

	return {
		tokens,
	}
}
