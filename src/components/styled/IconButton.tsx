import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconButton as MuiIconButton } from '@mui/material'

export const IconButton = styled(MuiIconButton)<{
	noPadding?: boolean
	width?: string
}>`
	${({ width }) =>
		width &&
		css`
			padding: 0;
			width: ${width};
			height: ${width};
		`}
`
