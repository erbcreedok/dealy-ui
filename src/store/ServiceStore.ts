import { AxiosResponse } from 'axios'
import { makeAutoObservable } from 'mobx'

import { ServiceRequests } from '../requests'
import { ServiceFormModel } from '../types'

import { RootStore } from './index'

export class ServiceStore {
	store: RootStore

	busy = false

	constructor(store: RootStore) {
		this.store = store

		makeAutoObservable(this)
	}

	*createService(
		data: ServiceFormModel
	): Generator<Promise<AxiosResponse<ServiceFormModel>>> {
		this.busy = true
		try {
			yield ServiceRequests.create(data)
		} catch (error) {
			console.error(error)
		} finally {
			this.busy = false
		}
	}
}
