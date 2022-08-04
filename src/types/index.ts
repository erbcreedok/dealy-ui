import { ReactElement } from 'react'

import { components } from './models'

export type WithChildren = {
	children: ReactElement | ReactElement[]
}

export type MenuItemType = {
	label: string
	icon: ReactElement
}

export type NavItemType = MenuItemType & {
	path?: string
	to: string
}

export type LocationState = {
	background?: Location
	from?: Location
}

export type ComponentSchema = components['schemas'][keyof components['schemas']]
export type OperationContent = {
	content: { 'application/json': ComponentSchema }
}
export type OperationResponse200 = { responses: { 200: OperationContent } }
export type OperationResponse201 = { responses: { 201: OperationContent } }
export type OperationRequestBody = { requestBody: OperationContent }
export type OperationRequestQuery = { parameters: { query: unknown } }

export type SchemaResponse200<T extends OperationResponse200> =
	T['responses'][200]['content']['application/json']
export type SchemaResponse201<T extends OperationResponse201> =
	T['responses'][201]['content']['application/json']
export type SchemaRequestBody<T extends OperationRequestBody> =
	T['requestBody']['content']['application/json']
export type SchemaRequestQuery<T extends OperationRequestQuery> =
	T['parameters']['query']

export type Tokens = {
	access: string
}
export type ApplicationConfig = {
	tokens: Tokens
}

export type ServiceFormModel = components['schemas']['Service']
