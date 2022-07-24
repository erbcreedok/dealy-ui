import { makeAutoObservable } from 'mobx'
import { createContext, FC, ReactNode, useContext, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { NavPanelStore } from './NavPanelStore'
import { RouterStore } from './RouterStore'

export class RootStore {
	router: RouterStore | undefined

	navPanel: NavPanelStore

	constructor(router?: RouterStore) {
		this.router = router
		this.navPanel = new NavPanelStore(this)
		makeAutoObservable(this)
	}
}

export const store = new RootStore()

export const StoreContext = createContext(store)

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const navigate = useNavigate()
	const location = useLocation()
	const router = useMemo(
		() => new RouterStore({ navigate, location }),
		[navigate, location]
	)
	const store = useMemo(() => new RootStore(router), [router])

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
