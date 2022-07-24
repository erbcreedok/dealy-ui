import { createTheme } from '@mui/material'

import { COLORS } from 'src/constants/colors'

export const theme = createTheme({
	typography: {
		fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
	},
	palette: {
		primary: { main: COLORS.violet },
		text: {
			primary: COLORS.black,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					borderRadius: '16px',
					textTransform: 'none',
					fontWeight: '800',
					fontSize: '17px',
					lineHeight: '20px',
					paddingTop: '13px',
					paddingBottom: '15px',
					boxShadow: 'none',
				},
			},
		},
	},
})
