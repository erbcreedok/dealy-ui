import { ReactElement } from 'react'

export type MenuItemType = {
	label: string
	icon: ReactElement
}

export type NavItemType = MenuItemType & {
	path?: string
	to: string
}
