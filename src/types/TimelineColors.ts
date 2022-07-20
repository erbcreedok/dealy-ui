import { Color, COLORS } from '../constants/colors'
import { getAlpha } from '../utils/getAlpha'
import { ActivityStatus } from './ActivityTypes'


export const TimelineColors: Record<ActivityStatus, { color: Color, background: Color }> = {
    [ActivityStatus.passed]: {
        color: COLORS.blue,
        background: getAlpha(COLORS.blue, .1),
    },
    [ActivityStatus.current]: {
        color: COLORS.grey,
        background: COLORS.bg,
    },
    [ActivityStatus.upcoming]: {
        color: COLORS.green,
        background: getAlpha(COLORS.green, .1),
    },
    [ActivityStatus.default]: {
        color: COLORS.grey,
        background: COLORS.bg,
    },
    [ActivityStatus.canceled]: {
        color: COLORS.red,
        background: getAlpha(COLORS.red, .05),
    },
}
