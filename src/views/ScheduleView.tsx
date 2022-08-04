import styled from '@emotion/styled'
import { Box, Tab, Tabs } from '@mui/material'
import { FC, useState } from 'react'

import { ReactComponent as BellIcon } from 'src/assets/icons/bell.svg'
import { ReactComponent as SearchIcon } from 'src/assets/icons/search.svg'
import { Container } from 'src/components/Container'
import { Flex } from 'src/components/Flex'
import { ServicesList } from 'src/components/ServicesList'
import { IconButton } from 'src/components/styled/IconButton'
import { Heading } from 'src/components/styled/Typography'
import { ViewBox } from 'src/components/styled/ViewBox'
import { COLORS } from 'src/constants/colors'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box>{children}</Box>}
		</Box>
	)
}

const StyledTab = styled(Tab)`
	padding: 0;
	font-weight: 800;
	font-size: 17px;
	letter-spacing: -0.01em;
	text-transform: capitalize;
`

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

export const ScheduleView: FC = () => {
	const [value, setValue] = useState(1)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<ViewBox>
			<Container>
				<Flex alignItems="center" justifyContent="space-between">
					<Heading
						sx={{
							flexGrow: 1,
						}}
					>
						<Tabs value={value} onChange={handleChange} aria-label="">
							<StyledTab label="Рабочий график" {...a11yProps(0)} />
							<StyledTab label="Мои услуги" {...a11yProps(1)} />
						</Tabs>
					</Heading>
					<IconButton sx={{ padding: '0 8px 0 6px' }}>
						<SearchIcon />
					</IconButton>
					<IconButton sx={{ padding: 0 }}>
						<BellIcon />
					</IconButton>
				</Flex>
			</Container>
			<Box
				sx={{
					overflow: 'auto',
					backgroundColor: COLORS.lightestGrey,
					height: '100vh',
				}}
			>
				<TabPanel value={value} index={0}>
					Item One
				</TabPanel>
				<TabPanel value={value} index={1}>
					<ServicesList />
				</TabPanel>
			</Box>
		</ViewBox>
	)
}
