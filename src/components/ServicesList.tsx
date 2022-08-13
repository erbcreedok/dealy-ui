import { FC } from 'react'
import { Box, Button } from '@mui/material'

import { ReactComponent as CirclePlusIcon } from 'src/assets/icons/plus-circle.svg'
import { COLORS } from 'src/constants/colors'
// import { routerService } from 'src/services/routerService'

import { SERVICES } from '../constants/mocks'

import { ServiceItem } from './ServiceItem'
import { Typography } from './styled/Typography'
import { LinkBase } from './LinkBase'

export const ServicesList: FC = () => {
	return (
		<Box>
			{SERVICES.length < 0 ? (
				<Box>
					<Box
						sx={{
							backgroundColor: '#fff',
						}}
					>
						{SERVICES.map((service, index) => (
							<ServiceItem key={index} service={service} />
						))}
					</Box>
					<Box
						sx={{
							my: '28px',
							px: '16px',
						}}
					>
						<Button
							color="secondary"
							variant="contained"
							fullWidth
							sx={{
								gap: '10px',
								py: '8px',
							}}
						>
							<CirclePlusIcon />
							<Typography
								sx={{
									fontSize: '16px',
									fontWeight: '800',
									lineHeight: '20px',
									letterSpacing: '-0.01em',
								}}
							>
								Добавить услугу
							</Typography>
						</Button>
					</Box>
				</Box>
			) : (
				<Box>
					<Typography
						sx={{
							color: COLORS.darkGrey,
							textAlign: 'center',
							fontWeight: '800',
							fontSize: '22px',
							lineHeight: '24px',
							mx: '57px',
							mt: '120px',
							mb: '32px',
						}}
					>
						У вас нет созданных услуг
					</Typography>
					<Box
						sx={{
							px: '70px',
						}}
					>
						<Button
							variant="contained"
							fullWidth
							sx={{
								py: '8px',
								borderRadius: '12px',
								fontSize: '16px',
								lineHeight: '20px',
							}}
						>
							<LinkBase to="/modal/add-service">Создать услугу</LinkBase>
						</Button>
					</Box>
				</Box>
			)}
		</Box>
	)
}
