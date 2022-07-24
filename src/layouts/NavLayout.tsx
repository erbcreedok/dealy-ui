import { Box } from '@mui/material'
import React, { FC, ReactNode } from 'react'

import { NavPanel } from 'src/components/NavPanel'
import { ViewWrapper } from 'src/components/styled/ViewWrapper'
import { NAV_PANEL_BOTTOM_OFFSET } from 'src/constants/layouts'

export const NavLayout: FC<{ children: ReactNode }> = ({ children }) => (
	<ViewWrapper>
		{children}
		<NavPanel sx={{ mt: 'auto', zIndex: 1000, position: 'relative' }} />
		<Box
			minHeight={`${NAV_PANEL_BOTTOM_OFFSET}px`}
			sx={{ background: 'white' }}
		/>
	</ViewWrapper>
)
