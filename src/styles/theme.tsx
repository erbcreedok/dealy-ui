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
				root: {
					'&.Mui-disabled': {
						backgroundColor: COLORS.violet,
						opacity: '0.5',
						color: COLORS.white,
					},
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
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					background: COLORS.lightestGrey,
					padding: '12px 20px',
					borderRadius: '16px',
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderWidth: '1px',
					},
				},
				input: {
					padding: 0,
					height: 'fit-content',
				},
				notchedOutline: {
					borderWidth: '1px',
					borderColor: 'transparent',
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					transform: 'translate(20px, 12px) scale(1)',
					[`&.Mui-focused, &.MuiFormLabel-filled`]: {
						transform: 'translate(14px, -9px) scale(0.75)',
					},
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: COLORS.black,
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					color: COLORS.grey,
				},
			},
		},
		MuiSnackbarContent: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(0, 0, 0, 0.8)',
					borderRadius: '20px',
					padding: '16px',
					margin: '0 8px',
				},
				message: {
					fontSize: '16px',
					lineHeight: '20px',
				},
				action: {
					marginRight: 0,
				},
			},
		},
	},
})
