import { agent } from '../axios/agent'
import {
	SchemaRequestBody,
	SchemaResponse200,
	SchemaResponse201,
} from '../types'
import { paths } from '../types/models'

type TokensObtainPost = paths['/api/auth/tokens/obtain/']['post']
export const AuthRequests = {
	obtainToken: (data: Partial<SchemaRequestBody<TokensObtainPost>>) => {
		return agent.post<SchemaResponse200<TokensObtainPost>>(
			'/api/auth/tokens/obtain/',
			data
		)
	},
}

type ServiceCreate = paths['/api/services/']['post']
export const ServiceRequests = {
	create: (data: SchemaRequestBody<ServiceCreate>) => {
		return agent.post<SchemaResponse201<ServiceCreate>>('/api/services/', data)
	},
}
