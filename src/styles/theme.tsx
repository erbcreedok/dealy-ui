import { createTheme } from '@mui/material'
import { COLORS } from '../constants/colors'


export const theme = createTheme({
    typography: {
        fontFamily: [
            '"Nunito Sans"',
            'sans-serif',
        ].join(','),
    },
    components: {
        MuiIconButton: {},
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    justifyContent: 'space-between',
                },
                indicator: {
                    backgroundColor: COLORS.violet,
                },
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: COLORS.grey,
                    "&.Mui-selected": {
                        color: COLORS.black,
                    }
                },
            }
        }
    }
})
