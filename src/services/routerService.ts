export const routerService = {
	defaultPage: () => routerService.calendar(),
	index: () => `/`,
	calendar: () => `/calendar`,
	schedule: () => `/schedule`,
	clients: () => `/clients`,
	profile: () => `/profile`,
	modalRoute: (path = '*') => `modal/${path}`,
	addAppointment: () => routerService.modalRoute(`add-appointment`),
	addBreak: () => routerService.modalRoute(`add-break`),
	addService: () => routerService.modalRoute(`add-service`),
	addSchedule: () => routerService.modalRoute(`add-schedule`),
	addClient: () => routerService.modalRoute(`add-client`),
}
