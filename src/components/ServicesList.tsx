import { FC } from 'react'
import { Box } from '@mui/material'

import { SERVICES } from '../constants/mocks'

import { ServiceItem } from './ServiceItem'

export const ServicesList: FC = () => {
	return (
		<Box>
			{SERVICES.map((service, index) => (
				<ServiceItem key={index} service={service} />
			))}
		</Box>
	)
}
