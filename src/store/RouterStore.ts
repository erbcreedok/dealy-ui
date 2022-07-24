import { makeAutoObservable } from 'mobx'
import { Location, NavigateFunction } from 'react-router-dom'

export type RouterConfigs = {
	navigate: NavigateFunction
	location: Location
}
export class RouterStore {
	navigate: NavigateFunction

	location: Location

	constructor(configs: RouterConfigs) {
		this.navigate = configs.navigate
		this.location = configs.location

		makeAutoObservable(this)
	}
}
