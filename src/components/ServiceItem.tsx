import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { FC } from 'react'

import { COLORS } from 'src/constants/colors'
import { Service } from 'src/types/ServiceTypes'
import { IconButton } from 'src/components/styled/IconButton'

import { getDurationString } from '../utils/getDurationString'
import { ReactComponent as DotsIcon } from '../assets/icons/dots.svg'

import { Flex } from './Flex'
import { Typography } from './styled/Typography'

const Tag = styled(Box)`
	font-size: 14px;
	line-height: 18px;
	letter-spacing: -0.01em;
`

export type ServiceProps = {
	service: Service
}

export const ServiceItem: FC<ServiceProps> = ({ service }) => {
	return (
		<Flex
			sx={{
				gap: '8px',
				padding: '16px 0',
				borderBottom: `0.4px solid ${COLORS.lightGrey}`,
				flexDirection: 'column',
				position: 'relative',
			}}
		>
			<Typography
				sx={{
					fontWeight: '800',
					lineHeight: '20px',
					fontSize: '16px',
					letterSpacing: '-0.01em',
				}}
			>
				{service.name}
			</Typography>
			{/* tags */}
			<Flex
				sx={{
					color: COLORS.black,
				}}
			>
				<Tag
					sx={{
						width: '72px',
						mr: '12px',
					}}
				>
					{getDurationString(service.duration)}
				</Tag>
				{!service.isFree && (
					<Tag>
						{service.minPrice} ₸ – {service.maxPrice} ₸
					</Tag>
				)}
			</Flex>
			<Typography
				sx={{
					fontSize: '14px',
					color: COLORS.grey,
				}}
			>
				{service.description}
			</Typography>
			<IconButton
				size="small"
				sx={{
					position: 'absolute',
					top: '8px',
					right: '-8px',
				}}
			>
				<DotsIcon />
			</IconButton>
		</Flex>
	)
}
