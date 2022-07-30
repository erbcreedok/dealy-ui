import { FC } from 'react'
import { ServiceItem } from './ServiceItem'
import { SERVICES } from '../constants/mocks'
import { Box } from '@mui/material'


export const ServicesList: FC = () => {
    return (
        <Box>
            {
                SERVICES.map((service)=>(
                    <ServiceItem service={service} />
                ))
            }
        </Box>
    )
}