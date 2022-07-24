import styled from '@emotion/styled'
import { Box, IconButton } from '@mui/material'

import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow-right.svg'
import { Flex } from 'src/components/Flex'
import { LinkBase } from 'src/components/LinkBase'
import { Typography } from 'src/components/styled/Typography'
import { COLORS } from 'src/constants/colors'
import { withModalLink } from 'src/HOC/withModalLink'
import { MenuItemType, NavItemType } from 'src/types'
import { getAlpha } from 'src/utils/getAlpha'

const Wrapper = styled(Box)`
	background: ${COLORS.violet};
	width: 100%;
	border-radius: 24px;
	padding: 8px 0;
	overflow: hidden;
`
const MenuItem = styled(withModalLink(LinkBase))`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 12px;
	justify-content: space-between;
	padding: 8px 16px 8px 20px;
	cursor: pointer;
	&:hover {
		background: ${getAlpha('#000000', 0.1)};
	}
`
const MenuItemIcon = styled(Flex)`
	width: 32px;
	height: 32px;
	border-radius: 16px;
	background: white;
	color: ${COLORS.violet};
	align-items: center;
	justify-content: center;
`
const MenuItemLabel = styled(Typography)`
	font-weight: 800;
	font-size: 17px;
	color: white;
	flex-grow: 1;
`

type Props<T extends MenuItemType> = {
	menuItems: T[]
}
export const AddMenu = <T extends NavItemType>({ menuItems }: Props<T>) => {
	return (
		<Wrapper>
			{menuItems.map((item) => (
				<MenuItem key={item.label} to={item.to}>
					<MenuItemIcon>{item.icon}</MenuItemIcon>
					<MenuItemLabel>{item.label}</MenuItemLabel>
					<IconButton sx={{ color: 'white' }} size="small">
						<ArrowRightIcon />
					</IconButton>
				</MenuItem>
			))}
		</Wrapper>
	)
}
