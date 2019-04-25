import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStore } from 'easy-peasy';

import './profileNavigation.scss'

import { useActions } from 'easy-peasy';

export default function profileNavigation(closeModal) {


	const logoutAuth = useActions(actions => actions.auth.logout)
	const logoutProfile = useActions(actions => actions.profile.logout)
	const logoutPartners = useActions(actions => actions.partners.logout)
	const logoutMembership = useActions(actions => actions.membership.logout)

	const exitHandler = () => {
		logoutAuth()
		logoutProfile()
		logoutMembership()
		logoutPartners()

		closeModal()
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
				<NavLink to='/partners'>Воспользоваться партнерской программой</NavLink>
			</div>
			<div className="profile-navigation__item">
				<NavLink to='/events'>Участвовать в мероприятиях</NavLink>
			</div>
			<div className="profile-navigation__item">
				<NavLink to='/contacts'>Дать обратную связь</NavLink>
			</div>
			<div className="profile-navigation__item">
				<button onClick={exitHandler} className="link">Выйти</button>
			</div>
		</div>
	)
}
