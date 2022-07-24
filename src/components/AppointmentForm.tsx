import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'

import { ReactComponent as ArrowDownIcon } from 'src/assets/icons/arrow-down.svg'

import { COLORS } from '../constants/colors'

import { Container } from './Container'
import { Flex } from './Flex'
import { IconButton } from './styled/IconButton'
import { Typography } from './styled/Typography'

const GrayBox = styled(Box)`
	padding: 8px 12px;
	border-radius: 12px;
	background-color: ${COLORS.lightestGrey};
`
const CenteredRow = styled(Flex)`
	align-items: center;
	justify-content: space-between;
`
const ScheduleBox = styled(Box)`
	background-color: ${COLORS.bg};
	border-radius: 16px;
	padding-left: 16px;
	padding-top: 12px;
	padding-bottom: 20px;
`

export const AppointmentForm = () => {
	return (
		<Container height="100%" display="flex" flexDirection="column">
			<Typography fontSize="22px" fontWeight="800" mb="32px">
				Создать запись
			</Typography>
			<CenteredRow>
				<Typography>Укажите дату записи</Typography>
				<Flex>
					<Typography fontWeight="bold">10 июня</Typography>
					<IconButton width="24px" sx={{ color: COLORS.violet }}>
						<ArrowDownIcon />
					</IconButton>
				</Flex>
			</CenteredRow>
			<Box my="32px">
				<Typography mb="12px">Укажите время начала записи</Typography>
				<CenteredRow>
					<Typography fontWeight="bold">Начало записи</Typography>
					<GrayBox>14:00</GrayBox>
				</CenteredRow>
			</Box>
			<ScheduleBox>
				<Typography color={COLORS.grey} fontSize="14px">
					Расписание
				</Typography>
				<Typography fontWeight="800">Записи после обеда</Typography>
				<Box sx={{ background: COLORS.green, height: '2px', width: '100%' }} />
			</ScheduleBox>
			<Box flexGrow={1} />
			<Box my={5}>
				<Button variant="contained" size="large" fullWidth>
					Продолжить
				</Button>
			</Box>
		</Container>
	)
}
