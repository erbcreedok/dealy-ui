import { Global } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { globalStyles } from 'src/styles/global'
import { theme } from 'src/styles/theme'
import { CalendarView } from 'src/views/CalendarView'
import { NavLayout } from 'src/layouts/NavLayout'
import { routerService } from 'src/services/routerService'
import { StoreProvider } from 'src/store'

const App = () => {
	return (
		<StoreProvider>
			<ThemeProvider theme={theme}>
				<Global styles={globalStyles} />
				<Routes>
					<Route
						path={routerService.calendar()}
						element={
							<NavLayout>
								<CalendarView />
							</NavLayout>
						}
					/>
					<Route
						path={routerService.addAppointment()}
						element={<CalendarView />}
					/>
					<Route
						path={routerService.index()}
						element={<Navigate to={routerService.calendar()} />}
					/>
				</Routes>
			</ThemeProvider>
		</StoreProvider>
	)
}

export default App
