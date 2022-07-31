import styled from '@emotion/styled'
import { Box, IconButton } from '@mui/material'
import { FC } from 'react'

import { ReactComponent as BellIcon } from 'src/assets/icons/bell.svg'
import { CalendarList } from 'src/components/CalendarList'
import { CalendarRow } from 'src/components/CalendarRow'
import { Container } from 'src/components/Container'
import { Flex } from 'src/components/Flex'
import { Heading } from 'src/components/styled/Typography'
import { ViewBox } from 'src/components/styled/ViewBox'

const TopBar = styled(Box)`
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: white;
`
export const CalendarView: FC = () => {
	return (
		<ViewBox>
			<TopBar>
				<Container>
					<Flex alignItems="center" justifyContent="space-between">
						<Heading>Июль</Heading>
						<IconButton>
							<BellIcon />
						</IconButton>
					</Flex>
				</Container>
				<CalendarRow />
			</TopBar>
			<CalendarList />
		</ViewBox>
	)
}
