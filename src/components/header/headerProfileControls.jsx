import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated as a } from 'react-spring'

import { useActions } from 'easy-peasy';

export default function headerProfileControls(Portal, closePortal, isOpen) {
	const springOpacity = useSpring({ opacity: isOpen ? 0.95 : 0, visibility: isOpen ? 'visible' : 'hidden' })

	const logoutAuth = useActions(actions => actions.auth.logout)
	const logoutProfile = useActions(actions => actions.profile.logout)
	const logoutPartners = useActions(actions => actions.partners.logout)
	const logoutMembership = useActions(actions => actions.membership.logout)

	const exitHandler = () => {
		logoutAuth()
		logoutProfile()
		logoutMembership()
		logoutPartners()
		closePortal()
	}
	return (
		<Portal>
			<a.div style={springOpacity} className="header-profile-controls-wrapper">
				<div className="header-profile-controls">
					<div className="header-profile-controls__item">
						<Link className="header-profile-control" to='/profile'>
							Мой профиль
							</Link>
					</div>
					<div className="header-profile-controls__item">
						<Link className="header-profile-control" to='/profile'>
							Подписка
							</Link>
					</div>
					<div className="header-profile-controls__item">
						<button onClick={exitHandler} className="link header-profile-control">
							Выйти
							</button>
					</div>
				</div>
			</a.div>
		</Portal>
	)
}
