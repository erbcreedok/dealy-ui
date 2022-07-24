import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Box } from '@mui/material'
import { FC, useEffect, useRef } from 'react'

import { COLORS } from 'src/constants/colors'
import { WEEKDAY_HEIGHT } from 'src/constants/layouts'
import { Hint, Typography } from 'src/components/styled/Typography'

const Wrapper = styled(Box)`
	display: flex;
	overflow: auto;
	min-height: ${WEEKDAY_HEIGHT + 8}px;
	padding-bottom: 8px;
	border-bottom: 1px solid ${COLORS.lightGrey};
`
const DayWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	height: ${WEEKDAY_HEIGHT}px;
	font-size: 14px;
	overflow: hidden;
	flex-shrink: 0;
	width: ${100 / 7}%;
	cursor: pointer;
	@media (min-width: 768px) {
		max-width: 52px;
	}
`
const DayBlock = styled(Typography)<{ active?: boolean }>`
	font-size: 14px;
	width: 24px;
	min-height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	${({ active }) =>
		active &&
		css`
			background: ${COLORS.violet};
			color: white;
		`};
`
const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
const days = Array.from({ length: 31 }).map((i, index) => ({
	day: index + 1,
	weekIndex: index % 7,
	weekday: weekdays[index % 7],
}))
const isStartOfWeek = (
	day: { weekIndex: number; day: number },
	active: number
) => {
	return (
		day.weekIndex === 0 &&
		((day.day < active && day.day + 7 > active) || day.day === active)
	)
}

type Props = {
	active?: number
	setActive?: (day: number) => void
}
export const CalendarRow: FC<Props> = ({ active = 4, setActive }) => {
	const startOfWeekRef = useRef<HTMLDivElement>()

	useEffect(() => {
		const startOfWeek = startOfWeekRef.current
		if (active && startOfWeek) {
			startOfWeek.scrollIntoView({
				behavior: 'smooth',
				inline: 'start',
			})
		}
	}, [active])

	return (
		<Wrapper>
			{days.map((day) => (
				<DayWrapper
					key={day.day}
					ref={isStartOfWeek(day, active) ? startOfWeekRef : null}
					onClick={() => setActive?.(day.day)}
				>
					<Hint>{day.weekday}</Hint>
					<DayBlock active={day.day === active}>{day.day}</DayBlock>
				</DayWrapper>
			))}
		</Wrapper>
	)
}
