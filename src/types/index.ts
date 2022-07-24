import { ReactElement } from 'react'

export type WithChildren = {
	children: ReactElement
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
