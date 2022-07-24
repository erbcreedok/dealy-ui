import { ReactComponent as CalendarIcon } from 'src/assets/icons/calendar.svg'
import { ReactComponent as ForkKnifeIcon } from 'src/assets/icons/fork-knife.svg'
import { ReactComponent as ListCheckmarkIcon } from 'src/assets/icons/list-chekmark-circle.svg'
import { ReactComponent as NoteIcon } from 'src/assets/icons/note.svg'
import { ReactComponent as PenEditIcon } from 'src/assets/icons/pen-edit-circle.svg'
import { ReactComponent as SatchelBagIcon } from 'src/assets/icons/satchel-bag.svg'
import { ReactComponent as UserIcon } from 'src/assets/icons/user.svg'
import { ReactComponent as WalletIcon } from 'src/assets/icons/wallet.svg'
import { routerService } from 'src/services/routerService'
import { NavItemType } from 'src/types'

export const defaultNavItems: NavItemType[] = [
	{
		label: 'Календарь',
		icon: <CalendarIcon />,
		path: routerService.calendar(),
		to: routerService.calendar(),
	},
	{
		label: 'Расписание',
		icon: <NoteIcon />,
		path: routerService.schedule(),
		to: routerService.schedule(),
	},
	{
		label: 'Клиенты',
		icon: <WalletIcon />,
		path: routerService.clients(),
		to: routerService.clients(),
	},
	{
		label: 'Профиль',
		icon: <UserIcon />,
		path: routerService.profile(),
		to: routerService.profile(),
	},
]
export const defaultMenuItems: NavItemType[] = [
	{
		label: 'запись',
		icon: <PenEditIcon />,
		to: routerService.addAppointment(),
	},
	{ label: 'перерыв', icon: <ForkKnifeIcon />, to: routerService.addBreak() },
	{ label: 'услуга', icon: <SatchelBagIcon />, to: routerService.addService() },
	{
		label: 'расписание',
		icon: <ListCheckmarkIcon />,
		to: routerService.addSchedule(),
	},
	{ label: 'клиент', icon: <UserIcon />, to: routerService.addClient() },
]
