import { COLORS } from '../constants/colors'

export enum TimelineStatus {
    passed = 'passed',
    current = 'current',
    upcoming = 'upcoming',
    default = 'default',
}

export const TimelineColors: Record<TimelineStatus, { color: COLORS, background: COLORS }> = {
    [TimelineStatus.passed]: {
        color: COLORS.blue,
        background: COLORS.lightBlue,
    },
    [TimelineStatus.current]: {
        color: COLORS.grey,
        background: COLORS.bg,
    },
    [TimelineStatus.upcoming]: {
        color: COLORS.green,
        background: COLORS.lightGreen,
    },
    [TimelineStatus.default]: {
        color: COLORS.grey,
        background: COLORS.bg,
    },
}
