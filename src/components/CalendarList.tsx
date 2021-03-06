import { FC, useEffect, useRef } from 'react'

import { DAY_ACTIVITIES, DAY_HOURS } from 'src/constants/mocks'
import { ActivityType } from 'src/types/ActivityTypes'
import { EmptyActivityBlock } from 'src/components/EmptyActivityBlock'
import { Flex } from 'src/components/Flex'
import {
	ServiceActivityBlock,
	ServiceMultiActivityBlock,
} from 'src/components/ServiceActivityBlock'
import {
	CurrentTime,
	HourHalf,
	LeftTimeline,
	ActivityBlock,
	ActivityRows,
} from 'src/components/styled/CalendarComponents'

export const CalendarList: FC = () => {
	const currentTimeRef = useRef<HTMLDivElement>()

	useEffect(() => {
		const currentTime = currentTimeRef.current
		if (currentTime) {
			currentTime.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			})
		}
	}, [])

	return (
		<Flex overflow="auto" maxHeight="100%" sx={{ position: 'relative' }}>
			<LeftTimeline>
				{DAY_HOURS.map((hour) => (
					<HourHalf
						key={hour.getFormatted()}
						isFirst={hour.isFirst()}
						status={hour.getStatus()}
					>
						{hour.getFormatted()}
					</HourHalf>
				))}
			</LeftTimeline>
			<CurrentTime ref={currentTimeRef}>
				<span>13:45</span>
			</CurrentTime>
			<ActivityRows>
				{DAY_ACTIVITIES.map((activity) => (
					<ActivityBlock
						key={activity.start.toString()}
						status={activity.status}
						duration={activity.duration}
					>
						{activity.type === ActivityType.empty && <EmptyActivityBlock />}
						{activity.type === ActivityType.service && (
							<ServiceActivityBlock activity={activity} />
						)}
						{activity.type === ActivityType.serviceMulti && (
							<ServiceMultiActivityBlock activity={activity} />
						)}
					</ActivityBlock>
				))}
			</ActivityRows>
		</Flex>
	)
}
