import { createTheme } from '@mui/material'

import { COLORS } from 'src/constants/colors'

export const theme = createTheme({
	typography: {
		fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
	},
	palette: {
		primary: { main: COLORS.violet },
		secondary: {
			main: COLORS.white,
			contrastText: COLORS.violet,
		},
		text: {
			primary: COLORS.black,
			secondary: COLORS.violet,
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
		MuiTabs: {
			styleOverrides: {
				flexContainer: {
					gap: '24px',
				},
				indicator: {
					backgroundColor: COLORS.violet,
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					color: COLORS.grey,
					'&.Mui-selected': {
						color: COLORS.black,
					},
				},
			},
		},
	},
})
