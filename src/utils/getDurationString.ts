export const getDurationString = (duration: number) => {
    const minutes = duration%1 > 0 ? (duration%1) * 60 + ' м.' : ''
    if (duration >= 1) {
        return `${Math.floor(duration)} ч. ${minutes}`.trim()
    }
    return minutes
}
