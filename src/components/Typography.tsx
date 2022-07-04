import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Typography as MuiTypography } from '@mui/material'
import { COLORS } from 'src/constants/Colors'

export const Typography = styled(MuiTypography)<{ inline?: boolean }>`
    ${({ inline }) => inline && css`display: inline`}
`

export const Heading = styled(Typography)`
  font-size: 22px;
  font-weight: 800;
  color: ${COLORS.systemBlack};
`

export const Hint = styled(Typography)`
  font-size: 14px;
  color: ${COLORS.systemGrey};
`
