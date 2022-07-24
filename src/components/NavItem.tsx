import styled from '@emotion/styled'
import { FC } from 'react'
import { useMatch } from 'react-router-dom'

import { COLORS } from 'src/constants/colors'
import { NavItemType } from 'src/types'
import { LinkBase } from 'src/components/LinkBase'

const Wrapper = styled(LinkBase)<{ active?: boolean }>`
	color: ${({ active }) => (active ? COLORS.violet : COLORS.grey)};
	text-align: center;
	font-size: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	cursor: pointer;
	height: 42px;
	svg {
		width: 28px;
		height: 28px;
		margin-bottom: 2px;
	}
`

type Props = {
	navItem: NavItemType
}
export const NavItem: FC<Props> = ({ navItem }) => {
	const active = useMatch(navItem.path ?? navItem.to)

	return (
		<Wrapper key={navItem.label} active={!!active} to={navItem.to}>
			{navItem.icon}
			{navItem.label}
		</Wrapper>
	)
}
