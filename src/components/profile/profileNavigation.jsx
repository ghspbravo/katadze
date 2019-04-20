import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStore } from 'easy-peasy';

import './profileNavigation.scss'

import { useActions } from 'easy-peasy';

export default function profileNavigation() {


	const logoutAuth = useActions(actions => actions.auth.logout)
	const logoutProfile = useActions(actions => actions.profile.logout)
	const logoutPartners = useActions(actions => actions.partners.logout)
	const logoutMembership = useActions(actions => actions.membership.logout)

	const exitHandler = () => {
		logoutAuth()
		logoutProfile()
		logoutMembership()
		logoutPartners()
	}
	const membershipExpired = useStore(store => store.membership.expiredAt)

	return (
		<div className="profile-navigation">
			{/* <div className="profile-navigation__item">
				<NavLink to='/user/1'>Моя страница</NavLink>
			</div> */}
			<div className="profile-navigation__item">
				<NavLink to='/profile/edit'>Редактировать профиль</NavLink>
			</div>
			{!membershipExpired &&
				<div className="profile-navigation__item">
					<NavLink to='/profile/membership'>Приобрести подписку</NavLink>
				</div>}
			<div className="profile-navigation__item">
				<NavLink to='/contacts'>Дать обратную связь</NavLink>
			</div>
			<div className="profile-navigation__item">
				<button onClick={exitHandler} className="link">Выйти</button>
			</div>
		</div>
	)
}
