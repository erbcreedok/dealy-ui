import { Box, IconButton } from '@mui/material'
import { FC, MouseEventHandler, useMemo } from 'react'
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg'
import { ReactComponent as DotsIcon } from '../assets/icons/dots.svg'
import { ReactComponent as PhoneIcon } from '../assets/icons/phone.svg'
import { COLORS } from '../constants/colors'
import { ServiceActivity, ServiceMultiActivity } from '../types/ActivityTypes'
import { getDurationString } from '../utils/getDurationString'
import { Flex } from './Flex'
import { Tag } from './styled/CalendarComponents'
import { Hint, Typography } from './Typography'

// TODO: REDRAW CANCELED ACTIVITY

export type ActivityBlockTagsProps = {
    serviceType?: string
    price?: string
    duration?: number
}
export const ActivityBlockTags: FC<ActivityBlockTagsProps> = ({ serviceType, price, duration }) => (
    <Flex gap="4px">
        {serviceType && <Tag>{serviceType}</Tag>}
        {price && <Tag>{price}</Tag>}
        {duration && <Tag>{getDurationString(duration)}</Tag>}
    </Flex>
)

export type ActivityBlockActionBarProps = {
    isCanceled?: boolean;
    phone?: string
    onPhoneClick?: MouseEventHandler
    onActionClick?: MouseEventHandler
}
export const ActivityBlockActionBar: FC<ActivityBlockActionBarProps> = ({ isCanceled, onActionClick, onPhoneClick }) => (
    <Flex ml="auto" alignItems="flex-start" flexShrink={0}>
        <IconButton size="small" sx={{ color: COLORS.violet }} onClick={onPhoneClick}>
            <PhoneIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: isCanceled ? COLORS.red : COLORS.grey }} onClick={onActionClick}>
            {isCanceled ? <DeleteIcon /> : <DotsIcon />}
        </IconButton>
    </Flex>
)

export type ServiceActivityBlockProps = {
    activity: ServiceActivity
}
export const ServiceActivityBlock: FC<ServiceActivityBlockProps> = ({ activity }) => {
    const isCanceled = useMemo(() => activity.canceled, [activity.canceled])
    return (
        <Flex px="8px" py="4px" flexGrow={1} maxWidth="100%">
            <Box flexShrink={1} maxWidth="calc(100% - 76px)">
                <Typography ellipsis mb="6px" textDecoration={isCanceled ? 'line-through' : undefined}>
                    <Hint mr={1} inline color={isCanceled ? COLORS.red : undefined}>{activity.clientTag}</Hint>
                    <Typography inline nowrap>{activity.clientName}</Typography>
                </Typography>
                <ActivityBlockTags serviceType={activity.serviceType} price={activity.price} duration={activity.duration} />
            </Box>
            <ActivityBlockActionBar isCanceled={isCanceled} phone={activity.phone} />
        </Flex>
    )
}

export type ServiceMultiActivityBlockProps = {
    activity: ServiceMultiActivity
}
export const ServiceMultiActivityBlock: FC<ServiceMultiActivityBlockProps> = ({ activity }) => {
    const isCanceled = useMemo(() => activity.canceled, [activity.canceled])
    return (
        <Flex px="8px" py="4px" flexGrow={1} maxWidth="100%">
            <Box flexShrink={1} maxWidth="calc(100% - 76px)">
                <Typography ellipsis mb="6px" textDecoration={isCanceled ? 'line-through' : undefined}>
                    <Typography inline nowrap>{activity.peopleCount} человека </Typography>
                    <Hint mr={1} inline color={isCanceled ? COLORS.red : undefined}>из {activity.totalCount}</Hint>
                </Typography>
                <ActivityBlockTags serviceType={activity.serviceType} price={activity.price} duration={activity.duration} />
            </Box>
            <ActivityBlockActionBar isCanceled={isCanceled} phone={activity.phone} />
        </Flex>
    )
}
