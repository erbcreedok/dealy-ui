import { Color, COLORS } from 'src/constants/colors'
import { getAlpha } from 'src/utils/getAlpha'

import { ActivityStatus } from './ActivityTypes'

export const TimelineColors: Record<
	ActivityStatus,
	{ color: Color; background: Color }
> = {
	[ActivityStatus.passed]: {
		color: COLORS.blue,
		background: getAlpha(COLORS.blue, 0.1),
	},
	[ActivityStatus.current]: {
		color: COLORS.grey,
		background: COLORS.bg,
	},
	[ActivityStatus.upcoming]: {
		color: COLORS.green,
		background: getAlpha(COLORS.green, 0.1),
	},
	[ActivityStatus.default]: {
		color: COLORS.grey,
		background: COLORS.bg,
	},
	[ActivityStatus.canceled]: {
		color: COLORS.red,
		background: getAlpha(COLORS.red, 0.05),
	},
}
