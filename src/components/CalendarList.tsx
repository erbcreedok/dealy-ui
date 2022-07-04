import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { FC, useCallback, useRef } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import { COLORS } from '../constants/colors'
import { HOUR_HEIGHT, TIMELINE_LEFT_WIDTH } from '../constants/constants'
import { TimelineColors, TimelineStatus } from '../types/TimelineColors'
import { Flex } from './Flex'
import { Typography } from './Typography'

const LeftTimeline = styled(Flex)`
  min-width: ${TIMELINE_LEFT_WIDTH}px;
  flex-direction: column;
`
const HourHalf = styled(Typography)<{status?: TimelineStatus, isFirst?: boolean}>`
  height: ${HOUR_HEIGHT / 2}px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${({ status = TimelineStatus.current}) => TimelineColors[status].color};
  background: ${({ status = TimelineStatus.current}) => TimelineColors[status].background};
  border-right: 1px solid ${({ status = TimelineStatus.current}) => TimelineColors[status].color};
  ${({ isFirst, status = TimelineStatus.current }) => isFirst && `border-top: 1px solid ${TimelineColors[status].color}`};
`
const CurrentTime = styled(Box)`
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
    top: 0;bottom: 0;
    margin: auto;
  }
  &:after {
    content: '';
    position: absolute;
    left: ${TIMELINE_LEFT_WIDTH}px;
    right: 0;
    height: 1px;
    background: ${COLORS.red};
    top: 0;bottom: 0;
    margin: auto;
  }
`

const getTwoNumbers = (num: number) => ('0' + num).slice(-2)
const breakpoints = [
    { v: 0, t: 25, status: TimelineStatus.passed},
    { v: 26, t: 27, status: TimelineStatus.current},
    { v: 28, t: 34, status: TimelineStatus.upcoming},
    { v: 35, t: 48, status: TimelineStatus.default}
]
const hours = Array.from({ length: 24 * 2 }).map((_, index) => ({
    hour: Math.floor(index / 2),
    minute: (index % 2) * 30,
    isFirst() {
      return breakpoints.some(({ v }) => v === index)
    },
    getStatus() {
        return breakpoints.find(({ v, t }) => v <= index && index <= t)?.status ?? TimelineStatus.default
    },
    getFormatted() {
        return getTwoNumbers(this.hour) + ':' + getTwoNumbers(this.minute)
    },
}))

export const CalendarList: FC = () => {
    const currentTimeRef = useRef<HTMLDivElement>()
    const onResize = useCallback(() => {
        const currentTime = currentTimeRef.current
        if (currentTime) {
            currentTime.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }
    }, [])
    const { ref } = useResizeDetector({ onResize })
    return (
        <Flex ref={ref} overflow="auto" maxHeight="100%" sx={{ position: 'relative' }}>
            <LeftTimeline>
                {hours.map((hour) => (
                    <HourHalf key={hour.getFormatted()} isFirst={hour.isFirst()} status={hour.getStatus()}>
                        {hour.getFormatted()}
                    </HourHalf>
                ))}
            </LeftTimeline>
            <CurrentTime ref={currentTimeRef}><span>13:45</span></CurrentTime>
        </Flex>
    )
}
