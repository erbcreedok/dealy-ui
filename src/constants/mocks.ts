import {
	ActivityStatus,
	ActivityType,
	EveryActivity,
} from 'src/types/ActivityTypes'
import { getTwoDigitNumber } from 'src/utils/getTwoDigitNumber'

const breakpoints = [
	{ v: 0, t: 25, status: ActivityStatus.passed },
	{ v: 26, t: 27, status: ActivityStatus.current },
	{ v: 28, t: 34, status: ActivityStatus.upcoming },
	{ v: 35, t: 48, status: ActivityStatus.default },
]
export const DAY_HOURS = Array.from({ length: 24 * 2 }).map((_, index) => ({
	hour: Math.floor(index / 2),
	minute: (index % 2) * 30,
	isFirst() {
		return breakpoints.some(({ v }) => v === index)
	},
	getStatus() {
		return (
			breakpoints.find(({ v, t }) => v <= index && index <= t)?.status ??
			ActivityStatus.default
		)
	},
	getFormatted() {
		return `${getTwoDigitNumber(this.hour)}:${getTwoDigitNumber(this.minute)}`
	},
}))

export const DAY_ACTIVITIES: EveryActivity[] = [
	{ type: ActivityType.empty, duration: 0.5, start: new Date('00:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('00:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('01:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('01:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('02:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('02:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('03:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('03:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('04:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('04:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('05:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('05:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('06:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('06:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('07:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('07:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('08:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('08:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('09:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('09:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('10:00') },
	{
		type: ActivityType.service,
		duration: 0.5,
		start: new Date('10:30'),
		serviceType: 'Коррекция',
		clientName: 'Амина Диасовна',
		price: 'от 2000 ₸',
		clientTag: '@amina93',
		phone: '+77778765432',
		status: ActivityStatus.passed,
	},
	{
		type: ActivityType.service,
		duration: 1.5,
		start: new Date('11:00'),
		serviceType: 'Педикюр, маникюр',
		clientName: 'Алина Ескараева',
		price: 'от 2000 ₸',
		clientTag: '@alina_eskaraeva',
		phone: '+77778765432',
		status: ActivityStatus.passed,
	},
	{
		type: ActivityType.service,
		duration: 1,
		start: new Date('12:30'),
		serviceType: 'Педикюр, маникюр',
		clientName: 'Марина Нильдибаева ',
		price: 'от 2000 ₸',
		clientTag: '@marina2004',
		phone: '+77778765432',
		status: ActivityStatus.canceled,
		canceled: true,
	},
	{ type: ActivityType.empty, duration: 0.5, start: new Date('13:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('14:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('14:30') },
	{
		type: ActivityType.service,
		duration: 1,
		start: new Date('15:00'),
		serviceType: 'Наращивание',
		clientName: 'Амина Диасовна',
		price: 'от 2000 ₸',
		clientTag: 'Марина',
		phone: '+77778765432',
		status: ActivityStatus.upcoming,
	},
	{
		type: ActivityType.serviceMulti,
		duration: 0.5,
		start: new Date('16:00'),
		serviceType: 'Наращивание',
		peopleCount: 4,
		totalCount: 12,
		price: 'от 2000 ₸',
		phone: '+77778765432',
		status: ActivityStatus.upcoming,
	},
	{ type: ActivityType.empty, duration: 0.5, start: new Date('16:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('17:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('17:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('18:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('18:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('19:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('19:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('20:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('20:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('21:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('21:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('22:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('22:30') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('23:00') },
	{ type: ActivityType.empty, duration: 0.5, start: new Date('23:30') },
]

export type Service = {
    name: string
    description: string
    minPrice?: string
    maxPrice?: string
    duration: number
    isFree: boolean
}
export const SERVICES: Service[] = [
    {
        name: 'Маникюр',
        description: 'который делается в салоне',
        minPrice: '4 000',
        maxPrice: '7 000',
        duration: 1.5,
        isFree: false
    },
    {
        name: 'Педикюр',
        description: 'который делается в салоне',
        minPrice: '5 000',
        maxPrice: '9 000',
        duration: 0.5,
        isFree: false
    },
    {
        name: 'Укрепление ногтей на руках',
        description: 'который делается в салоне',
        minPrice: '1 000',
        maxPrice: '4 000',
        duration: 1.5,
        isFree: false
    },
    {
        name: 'Укрепление ногтей на ногах',
        description: 'который делается в салоне',
        minPrice: '1 000',
        maxPrice: '5 000',
        duration: 2.5,
        isFree: false
    },
    {
        name: 'Обучение ногтевому сервису',
        description: 'который делается в салоне',
        minPrice: '14 000',
        maxPrice: '16 000',
        duration: 2.5,
        isFree: false
    },
    {
        name: 'Маникюр',
        description: 'который делается в салоне',
        minPrice: '4 000',
        maxPrice: '7 000',
        duration: 1.5,
        isFree: false
    },
    {
        name: 'Педикюр',
        description: 'который делается в салоне',
        minPrice: '5 000',
        maxPrice: '9 000',
        duration: 0.5,
        isFree: false
    },
    {
        name: 'Укрепление ногтей на руках',
        description: 'который делается в салоне',
        minPrice: '1 000',
        maxPrice: '4 000',
        duration: 1.5,
        isFree: false
    },
    {
        name: 'Укрепление ногтей на ногах',
        description: 'который делается в салоне',
        minPrice: '1 000',
        maxPrice: '5 000',
        duration: 2.5,
        isFree: false
    },
    {
        name: 'Обучение ногтевому сервису',
        description: 'который делается в салоне',
        minPrice: '14 000',
        maxPrice: '16 000',
        duration: 2.5,
        isFree: false
    },
]