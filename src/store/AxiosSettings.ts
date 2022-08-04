import { makeAutoObservable } from 'mobx'

import { Tokens } from 'src/types'

export class AxiosSettings {
	tokens?: Partial<Tokens>

	constructor() {
		makeAutoObservable(this)
	}

	setTokens(tokens: Partial<Tokens>) {
		this.tokens = {
			...this.tokens,
			...tokens,
		}
	}

	getAccessToken() {
		return this.tokens?.access
	}
}

export const axiosSettings = new AxiosSettings()
