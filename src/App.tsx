import React from 'react'
import { Global } from '@emotion/react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { AppointmentForm } from 'src/components/AppointmentForm'
import { useLocationState } from 'src/hooks/useLocationState'
import { ModalLayout } from 'src/layouts/ModalLayout'
import { NavLayout } from 'src/layouts/NavLayout'
import { routerService } from 'src/services/routerService'
import { StoreProvider } from 'src/store'
import { globalStyles } from 'src/styles/global'
import { theme } from 'src/styles/theme'
import { CalendarView } from 'src/views/CalendarView'
import { ServicesView } from './views/ServicesView'

const App = () => {
	const location = useLocation()
	const locationState = useLocationState()

	return (
		<StoreProvider>
			<MuiThemeProvider theme={theme}>
				<Global styles={globalStyles} />
				<NavLayout>
					<Routes location={locationState?.background ?? location}>
						<Route path={routerService.calendar()} element={<CalendarView />} />
						<Route path="/services" element={<ServicesView />} />
						<Route
							path={routerService.modalRoute()}
							element={
								<Navigate
									to={location}
									state={{ background: routerService.defaultPage() }}
								/>
							}
						/>
						<Route
							path={routerService.index()}
							element={<Navigate to={routerService.defaultPage()} />}
						/>
					</Routes>
				</NavLayout>
				<ModalLayout open={!!locationState?.background}>
					<Routes>
						<Route
							path={routerService.addAppointment()}
							element={<AppointmentForm />}
						/>
						<Route
							path={routerService.addService()}
							element="Create add service form"
						/>
					</Routes>
				</ModalLayout>
			</MuiThemeProvider>
		</StoreProvider>
	)
}

export default App
