import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated as a } from 'react-spring'

export default function headerProfileControls(Portal, closePortal, isOpen) {
	const springOpacity = useSpring({ opacity: isOpen ? 0.95 : 0 })
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
						<button onClick={closePortal} className="link header-profile-control">
							Выйти
							</button>
					</div>
				</div>
			</a.div>
		</Portal>
	)
}
