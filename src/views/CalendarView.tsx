import { Box, IconButton } from '@mui/material'
import { FC } from 'react'
import { CalendarList } from 'src/components/CalendarList'
import { CalendarRow } from 'src/components/CalendarRow'
import { Container } from 'src/components/Container'
import { Flex } from 'src/components/Flex'
import { Heading } from 'src/components/Typography'
import { ReactComponent as BellIcon } from 'src/assets/icons/bell.svg'

export const CalendarView: FC = () => {
    return (
        <Box>
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
        </Box>
    )
}
