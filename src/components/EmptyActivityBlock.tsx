import { Box, IconButton } from '@mui/material'

import { ReactComponent as PlusInCircleIcon } from 'src/assets/icons/plus-circle.svg'

export const EmptyActivityBlock = () => {
	return (
		<Box ml="auto" mr={1} mt={1} flexShrink={1}>
			<IconButton>
				<PlusInCircleIcon />
			</IconButton>
		</Box>
	)
}
