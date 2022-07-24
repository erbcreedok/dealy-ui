import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Typography as MuiTypography } from '@mui/material'

import { COLORS } from 'src/constants/colors'

export const Typography = styled(MuiTypography)<{
	inline?: boolean
	nowrap?: boolean
	ellipsis?: boolean
	textDecoration?: string
}>`
	${({ inline }) =>
		inline &&
		css`
			display: inline;
		`}
	${({ nowrap }) =>
		nowrap &&
		css`
			white-space: nowrap;
		`}
  ${({ ellipsis }) =>
		ellipsis &&
		css`
			text-overflow: ellipsis;
			overflow: hidden;
			max-width: 100%;
		`}
  ${({ textDecoration }) => textDecoration && { textDecoration }}
`

export const Heading = styled(Typography)`
	font-size: 22px;
	font-weight: 800;
	color: ${COLORS.black};
`

export const Hint = styled(Typography)<{ color?: string | boolean }>`
	font-size: 14px;
	color: ${({ color = COLORS.grey }) => color};
`
