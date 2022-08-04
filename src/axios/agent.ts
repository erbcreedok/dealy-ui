import axios from 'axios'

import { axiosSettings } from '../store/AxiosSettings'

export const agent = axios.create({
	baseURL: window.location.origin,
})

agent.interceptors.request.use((config) => {
	const token = axiosSettings.getAccessToken()
	if (config.headers && token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})
