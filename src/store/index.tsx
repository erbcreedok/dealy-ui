import { makeAutoObservable } from 'mobx'
import { createContext, FC, useContext, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ApplicationConfig, WithChildren } from 'src/types'

import { AxiosSettings, axiosSettings } from './AxiosSettings'
import { NavPanelStore } from './NavPanelStore'
import { RouterStore } from './RouterStore'
import { ServiceStore } from './ServiceStore'

export type RootStoreConfig = Partial<ApplicationConfig> & {
	router?: RouterStore
}
export class RootStore {
	router: RouterStore | undefined

	tokens: ApplicationConfig['tokens'] | undefined

	navPanel: NavPanelStore

	serviceStore: ServiceStore

	axiosSettings: AxiosSettings

	constructor({ router, tokens }: RootStoreConfig = {}) {
		this.router = router
		this.tokens = tokens
		this.navPanel = new NavPanelStore(this)
		this.serviceStore = new ServiceStore(this)
		this.axiosSettings = axiosSettings

		if (tokens) {
			this.axiosSettings.setTokens(tokens)
		}

		makeAutoObservable(this)
	}
}

export const store = new RootStore()

export const StoreContext = createContext(store)

type Props = WithChildren & {
	config: ApplicationConfig
}
export const StoreProvider: FC<Props> = ({ config, children }) => {
	const navigate = useNavigate()
	const location = useLocation()
	const router = useMemo(
		() => new RouterStore({ navigate, location }),
		[navigate, location]
	)
	const store = useMemo(
		() => new RootStore({ ...config, router }),
		[config, router]
	)

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
