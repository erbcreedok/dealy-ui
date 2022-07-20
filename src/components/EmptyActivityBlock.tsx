import { Box, IconButton } from '@mui/material'
import { ReactComponent as PlusInCircleIcon } from '../assets/icons/plus-in-curcle.svg'

export const EmptyActivityBlock = () => {
    return (
        <Box ml="auto" mr={1} mt={1} flexShrink={1}>
            <IconButton>
                <PlusInCircleIcon />
            </IconButton>
        </Box>
    )
}
