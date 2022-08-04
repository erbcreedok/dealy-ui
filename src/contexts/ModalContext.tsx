import { createContext, useContext } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export type ModalValue = {
	handleClose?: () => void
	titleElement?: HTMLDivElement
	open?: boolean
}

export const ModalContext = createContext<ModalValue>({})

export const useModal = () => useContext(ModalContext)

export const ModalProvider = ModalContext.Provider
export const ModalConsumer = ModalContext.Consumer
