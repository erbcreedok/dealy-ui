import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { ComponentProps, FC } from 'react'
import { COLORS } from 'src/constants/colors'
import {ReactComponent as PlusIcon} from 'src/assets/icons/plus.svg';
import {ReactComponent as CalendarIcon} from 'src/assets/icons/calendar.svg';
import {ReactComponent as WalletIcon} from 'src/assets/icons/wallet.svg';
import {ReactComponent as NoteIcon} from 'src/assets/icons/note.svg';
import {ReactComponent as UserIcon} from 'src/assets/icons/user.svg';
import { NAV_PANEL_HEIGHT } from '../constants/layouts'


const CircleButton = styled(Box)`
  height: 56px;
  width: 56px;
  border-radius: 28px;
  background: white;
  box-shadow: 0 5px 70px ${COLORS.lightViolet};
  color: ${COLORS.violet}
`
const NavItem = styled(Box)<{ active?: boolean }>`
  color: ${({ active }) => active ? COLORS.violet : COLORS.grey};
  text-align: center;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  svg {
    width: 28px;
    height: 28px;
    margin-bottom: 2px;
  }
`
const Wrapper = styled(Box)`
  min-height: ${NAV_PANEL_HEIGHT}px;
  background: white;
  display: flex;
  justify-content: space-around;
`

export type Props = ComponentProps<typeof Box>
export const NavPanel: FC<Props> = (props) => {
    return (
        <Wrapper {...props}>
            <NavItem active>
                <CalendarIcon />
                Календарь
            </NavItem>
            <NavItem>
                <NoteIcon />
                Расписание
            </NavItem>
            <CircleButton>
                <PlusIcon />
            </CircleButton>
            <NavItem>
                <WalletIcon />
                Клиенты
            </NavItem>
            <NavItem>
                <UserIcon />
                Профиль
            </NavItem>
        </Wrapper>
    )
}
