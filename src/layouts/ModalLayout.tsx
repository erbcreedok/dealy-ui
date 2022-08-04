import styled from '@emotion/styled'
import {
	Box,
	Dialog,
	DialogTitle,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import { FC, ReactElement, useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete.svg'
import { IconButton } from 'src/components/styled/IconButton'
import { MODAL_NAV_HEIGHT } from 'src/constants/layouts'
import { ModalProvider } from 'src/contexts/ModalContext'
import { routerService } from 'src/services/routerService'
import { LocationState } from 'src/types'

const ModalTitle = styled(DialogTitle)`
	height: ${MODAL_NAV_HEIGHT}px;
	display: flex;
	align-items: center;
	padding: 12px;
	gap: 16px;
`

type Props = {
	children?: ReactElement
	open?: boolean
}

export const ModalLayout: FC<Props> = ({ children, open }) => {
	const theme = useTheme()
	const isFullScreen = useMediaQuery(theme.breakpoints.down('md'))
	const navigate = useNavigate()
	const location = useLocation()
	const locationState = location.state as LocationState
	const [titleElement, setTitleElement] = useState()

	const handleClose = useCallback(() => {
		// eslint-disable-next-line no-console
		if (locationState.background) {
			navigate(locationState.background)
		} else {
			navigate(routerService.defaultPage())
		}
	}, [locationState, navigate])

	return (
		<ModalProvider value={{ open, handleClose, titleElement }}>
			<Dialog
				open={!!open}
				fullScreen={isFullScreen}
				PaperProps={{ sx: { minWidth: { md: '768px' } } }}
				onClose={handleClose}
			>
				<ModalTitle>
					<Box ref={setTitleElement} flexGrow={1} />
					<IconButton width="32px" onClick={handleClose}>
						<DeleteIcon />
					</IconButton>
				</ModalTitle>
				{children}
			</Dialog>
		</ModalProvider>
	)
}
