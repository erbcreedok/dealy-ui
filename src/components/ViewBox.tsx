import styled from '@emotion/styled'
import { NAV_PANEL_BOTTOM_OFFSET, NAV_PANEL_HEIGHT } from 'src/constants/constants'
import { Flex } from './Flex'

export const ViewBox = styled(Flex)`
  max-height: calc(100vh - ${NAV_PANEL_HEIGHT + NAV_PANEL_BOTTOM_OFFSET}px);
  flex-direction: column;
  overflow: auto;
`
