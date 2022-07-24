import { Color, COLORS } from 'src/constants/colors'
import { getAlpha } from 'src/utils/getAlpha'

export enum ActivityStatus {
	passed = 'passed',
	current = 'current',
	upcoming = 'upcoming',
	default = 'default',
	canceled = 'canceled',
}

export enum ActivityType {
	empty = 'empty',
	lunch = 'lunch',
	service = 'service',
	serviceMulti = 'serviceMulti',
}

export type EmptyActivity = {
	type: ActivityType.empty | ActivityType.lunch
	duration: number
	start: Date
	status?: ActivityStatus
}

export type ServiceActivity = {
	duration: number
	start: Date
	type: ActivityType.service
	phone?: string
	serviceType?: string
	price?: string
	clientName?: string
	clientTag: string
	status?: ActivityStatus
	canceled?: boolean
}
export type ServiceMultiActivity = {
	duration: number
	start: Date
	type: ActivityType.serviceMulti
	phone?: string
	serviceType?: string
	price?: string
	peopleCount?: number
	totalCount: number
	status?: ActivityStatus
	canceled?: boolean
}

export type EveryActivity =
	| EmptyActivity
	| ServiceActivity
	| ServiceMultiActivity

export const ActivityColors: Record<
	ActivityStatus,
	{ color: Color; background: Color; border: Color }
> = {
	[ActivityStatus.passed]: {
		color: COLORS.black,
		background: getAlpha(COLORS.blue, 0.1),
		border: getAlpha(COLORS.blue, 0.5),
	},
	[ActivityStatus.current]: {
		color: COLORS.black,
		background: COLORS.bg,
		border: getAlpha(COLORS.lightGrey, 0.5),
	},
	[ActivityStatus.upcoming]: {
		color: COLORS.black,
		background: getAlpha(COLORS.green, 0.1),
		border: getAlpha(COLORS.green, 0.5),
	},
	[ActivityStatus.default]: {
		color: COLORS.grey,
		background: COLORS.bg,
		border: getAlpha(COLORS.lightGrey, 0.5),
	},
	[ActivityStatus.canceled]: {
		color: COLORS.red,
		background: getAlpha(COLORS.red, 0.05),
		border: getAlpha(COLORS.lightGrey, 0.5),
	},
}
