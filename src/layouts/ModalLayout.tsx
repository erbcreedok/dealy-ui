import styled from '@emotion/styled'
import {
	Box,
	Dialog,
	DialogTitle,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import { FC, ReactElement, useCallback } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrow-left.svg'
import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete.svg'
import { ProgressBar } from 'src/components/ProgressBar'
import { IconButton } from 'src/components/styled/IconButton'
import { MODAL_NAV_HEIGHT } from 'src/constants/layouts'
import { routerService } from 'src/services/routerService'

const ModalHeader = styled(DialogTitle)`
	height: ${MODAL_NAV_HEIGHT}px;
	display: flex;
	align-items: center;
	padding: 12px;
	gap: 12px;
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

	const handleClose = useCallback(() => {
		if (location.key !== 'default') {
			navigate(-1)
		} else {
			navigate(routerService.defaultPage())
		}
	}, [location, navigate])

	return (
		<Dialog
			open={!!open}
			fullScreen={isFullScreen}
			PaperProps={{ sx: { minWidth: { md: '768px' } } }}
			onClose={handleClose}
		>
			<ModalHeader>
				<IconButton width="32px">
					<ArrowLeftIcon />
				</IconButton>
				<Box flexGrow={1}>
					<ProgressBar variant="determinate" value={30} />
				</Box>
				<IconButton width="32px" onClick={handleClose}>
					<DeleteIcon />
				</IconButton>
			</ModalHeader>
			{children ?? <Outlet />}
		</Dialog>
	)
}
