import { FC } from 'react'
import { LinkProps, useLocation } from 'react-router-dom'

export const withModalLink = (LinkEl: FC<LinkProps>) => {
	return (props: LinkProps) => {
		const location = useLocation()

		return <LinkEl {...props} state={{ background: location }} />
	}
}
