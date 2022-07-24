import styled from '@emotion/styled'
import { Box } from '@mui/material'

import { COLORS } from 'src/constants/colors'
import { HOUR_HEIGHT, TIMELINE_LEFT_WIDTH } from 'src/constants/layouts'
import { ActivityColors, ActivityStatus } from 'src/types/ActivityTypes'
import { TimelineColors } from 'src/types/TimelineColors'
import { Flex } from 'src/components/Flex'
import { Typography } from 'src/components/styled/Typography'

export const LeftTimeline = styled(Flex)`
	min-width: ${TIMELINE_LEFT_WIDTH}px;
	flex-direction: column;
`
export const HourHalf = styled(Typography)<{
	status?: ActivityStatus
	isFirst?: boolean
}>`
	height: ${HOUR_HEIGHT / 2}px;
	flex-shrink: 0;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	font-size: 12px;
	font-weight: 600;
	color: ${({ status = ActivityStatus.current }) =>
		TimelineColors[status].color};
	background: ${({ status = ActivityStatus.current }) =>
		TimelineColors[status].background};
	border-right: 1px solid
		${({ status = ActivityStatus.current }) => TimelineColors[status].color};
	${({ isFirst, status = ActivityStatus.current }) =>
		isFirst && `box-shadow: inset 0 1px 0 0 ${TimelineColors[status].color}`};
`
export const CurrentTime = styled(Box)`
	color: ${COLORS.red};
	left: 0;
	right: 0;
	top: 1600px;
	position: absolute;
	height: 16px;
	span {
		position: absolute;
		font-size: 12px;
		font-weight: 600;
		text-align: center;
		left: 0;
		width: ${TIMELINE_LEFT_WIDTH}px;
	}
	&:before {
		content: '';
		display: block;
		position: absolute;
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: ${COLORS.red};
		left: ${TIMELINE_LEFT_WIDTH - 6}px;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	&:after {
		content: '';
		position: absolute;
		left: ${TIMELINE_LEFT_WIDTH}px;
		right: 0;
		height: 1px;
		background: ${COLORS.red};
		top: 0;
		bottom: 0;
		margin: auto;
	}
`

export const ActivityRows = styled(Flex)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	max-width: calc(100% - ${TIMELINE_LEFT_WIDTH}px);
`

export const ActivityBlock = styled(Flex)<{
	status?: ActivityStatus
	duration?: number
}>`
	max-width: 100%;
	flex-shrink: 0;
	height: ${({ duration = 0.5 }) => HOUR_HEIGHT * duration}px;
	color: ${({ status = ActivityStatus.current }) =>
		ActivityColors[status].color};
	background: ${({ status = ActivityStatus.current }) =>
		ActivityColors[status].background};
	box-shadow: inset 0 1px 0 0
		${({ status = ActivityStatus.current }) => ActivityColors[status].border};
`

export const Tag = styled(Box)`
	box-sizing: border-box;
	border-radius: 6px;
	border: 1px solid ${COLORS.lightGrey};
	font-size: 12px;
	line-height: 14px;
	color: ${COLORS.darkGrey};
	padding: 1px 4px;
	background: white;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`
