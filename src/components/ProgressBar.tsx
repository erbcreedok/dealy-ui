import styled from '@emotion/styled'
import { LinearProgress, linearProgressClasses } from '@mui/material'

import { COLORS } from 'src/constants/colors'

export const ProgressBar = styled(LinearProgress)`
	height: 16px;
	border-radius: 8px;

	&.${linearProgressClasses.colorPrimary} {
		background-color: ${COLORS.lightestGrey};
	}
	& .${linearProgressClasses.bar} {
		border-radius: 8px;
		background-color: ${COLORS.violet};
	}
`
