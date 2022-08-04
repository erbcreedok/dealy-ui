import { Global } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import { FC } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { AppointmentForm } from 'src/components/AppointmentForm'
import { ServiceForm } from 'src/components/ServiceForm'
import { useLocationState } from 'src/hooks/useLocationState'
import { ModalLayout } from 'src/layouts/ModalLayout'
import { NavLayout } from 'src/layouts/NavLayout'
import { routerService } from 'src/services/routerService'
import { StoreProvider } from 'src/store'
import { globalStyles } from 'src/styles/global'
import { theme } from 'src/styles/theme'
import { ApplicationConfig } from 'src/types'
import { CalendarView } from 'src/views/CalendarView'
import { ScheduleView } from 'src/views/ScheduleView'

type Props = {
	config: ApplicationConfig
}

const App: FC<Props> = ({ config }) => {
	const location = useLocation()
	const locationState = useLocationState()

	return (
		<StoreProvider config={config}>
			<ThemeProvider theme={theme}>
				<Global styles={globalStyles} />
				<NavLayout>
					<Routes location={locationState?.background ?? location}>
						<Route path={routerService.calendar()} element={<CalendarView />} />
						<Route path={routerService.schedule()} element={<ScheduleView />} />
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
							element={<ServiceForm />}
						/>
					</Routes>
				</ModalLayout>
			</ThemeProvider>
		</StoreProvider>
	)
}

export default App
