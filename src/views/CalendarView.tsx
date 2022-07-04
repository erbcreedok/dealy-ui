import { IconButton } from '@mui/material'
import { FC } from 'react'
import { ReactComponent as BellIcon } from 'src/assets/icons/bell.svg'
import { CalendarList } from 'src/components/CalendarList'
import { CalendarRow } from 'src/components/CalendarRow'
import { Container } from 'src/components/Container'
import { Flex } from 'src/components/Flex'
import { Heading } from 'src/components/Typography'
import { ViewBox } from '../components/ViewBox'

export const CalendarView: FC = () => {
    return (
        <ViewBox>
            <Container>
                <Flex alignItems="center" justifyContent="space-between">
                    <Heading>Июль</Heading>
                    <IconButton>
                        <BellIcon />
                    </IconButton>
                </Flex>
            </Container>
            <CalendarRow />
            <CalendarList />
        </ViewBox>
    )
}
