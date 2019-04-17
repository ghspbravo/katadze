import React from 'react'
import {NavLink} from 'react-router-dom'

import './profileNavigation.scss'

export default function profileNavigation() {
	return (
		<div className="profile-navigation">
			<div className="profile-navigation__item">
							<NavLink to='/user/1'>Моя страница</NavLink>
						</div>
						<div className="profile-navigation__item">
							<NavLink to='/profile/edit'>Редактировать профиль</NavLink>
						</div>
						<div className="profile-navigation__item">
							<NavLink to='/profile/membership'>Приобрести подписку</NavLink>
						</div>
						<div className="profile-navigation__item">
							<NavLink to='/contacts'>Дать обратную связь</NavLink>
						</div>
						<div className="profile-navigation__item">
							<button className="link">Выйти</button>
						</div>
		</div>
	)
}
