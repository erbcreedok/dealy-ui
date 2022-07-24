import styled from '@emotion/styled'
import { Box, ButtonBase, Slide } from '@mui/material'
import { observer } from 'mobx-react'
import { ComponentProps, FC, useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'

import { ReactComponent as PlusIcon } from 'src/assets/icons/plus.svg'
import { COLORS } from 'src/constants/colors'
import { NAV_PANEL_HEIGHT } from 'src/constants/layouts'
import { useStore } from 'src/store'
import { NavItemType } from 'src/types'
import { AddMenu } from 'src/components/AddMenu'
import { NavItem } from 'src/components/NavItem'

const CircleButton = styled(ButtonBase)`
	height: 56px;
	width: 56px;
	border-radius: 28px;
	background: white;
	box-shadow: 0 5px 70px ${COLORS.lightViolet};
	color: ${COLORS.violet};
	margin-bottom: 9px;
`
const Wrapper = styled(Box)`
	min-height: ${NAV_PANEL_HEIGHT}px;
	background: white;
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: relative;
`
const AddMenuWrapper = styled(Box)`
	position: absolute;
	bottom: 100%;
	left: 24px;
	right: 24px;
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 32px;
`

export type Props = ComponentProps<typeof Box>

export const NavPanel: FC<Props> = observer((props) => {
	const addMenuRef = useRef<HTMLElement>(null)
	const { navPanel } = useStore()
	const { navPanelRenderList, addMenuOpened, setAddMenuOpened, addMenuItems } =
		navPanel

	const renderNavItems = (navItems: NavItemType[]) =>
		navItems.map((item) => <NavItem key={item.to} navItem={item} />)

	useOnClickOutside(addMenuRef, () => {
		setAddMenuOpened(false)
	})

	return (
		<Wrapper {...props}>
			{renderNavItems(navPanelRenderList[0])}
			<CircleButton onClick={() => setAddMenuOpened(!addMenuOpened)}>
				<PlusIcon />
			</CircleButton>
			{renderNavItems(navPanelRenderList[1])}
			<Slide direction="up" in={addMenuOpened} mountOnEnter>
				<AddMenuWrapper ref={addMenuRef}>
					<AddMenu menuItems={addMenuItems} />
				</AddMenuWrapper>
			</Slide>
		</Wrapper>
	)
})
