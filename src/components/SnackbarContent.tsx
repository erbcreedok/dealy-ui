import { FC, useState } from 'react'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'

import { ReactComponent as CheckIcon } from '../assets/icons/check.svg'

import { IconButton } from './styled/IconButton'

export interface State extends SnackbarOrigin {
	open: boolean
}

export type SnackbarProps = {
	message: string
}

export const SnackbarComponent: FC<SnackbarProps> = ({ message }) => {
	const [state, setState] = useState<State>({
		open: true,
		vertical: 'top',
		horizontal: 'center',
	})
	const { vertical, horizontal, open } = state

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return
		}

		setState({ ...state, open: false })
	}

	const action = (
		<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			sx={{
				backgroundColor: '#4DB575',
				borderRadius: '12px',
				padding: '10px',
			}}
		>
			<CheckIcon />
		</IconButton>
	)

	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			open={open}
			onClose={handleClose}
			autoHideDuration={6000}
			message={message}
			key={vertical + horizontal}
			action={action}
		/>
	)
}
