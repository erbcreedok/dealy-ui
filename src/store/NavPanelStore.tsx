import { makeAutoObservable } from 'mobx'

import { defaultMenuItems, defaultNavItems } from 'src/constants/data'

import { RootStore } from './index'

export class NavPanelStore {
	store: RootStore

	navItems = defaultNavItems

	addMenuItems = defaultMenuItems

	addMenuOpened = false

	constructor(store: RootStore) {
		this.store = store
		makeAutoObservable(this, { store: false })
	}

	get navPanelRenderList() {
		return [
			this.navItems.slice(0, this.navItems.length / 2),
			this.navItems.slice(this.navItems.length / 2),
		]
	}

	setAddMenuOpened = (value?: boolean) => {
		this.addMenuOpened = !!value
	}
}
