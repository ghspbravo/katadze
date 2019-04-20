import React from 'react'
import { Link } from 'react-router-dom'
import usePortal from 'react-useportal'
import './headerProfile.scss'
import { useStore } from 'easy-peasy';

import headerProfileControls from './headerProfileControls';

export default function headerProfile() {
	const { closePortal, togglePortal, isOpen, Portal } = usePortal({
		bindTo: document.querySelector('.header-profile__controls')
	})

	const name = useStore(state => state.profile.name)
	const surname = useStore(state => state.profile.surname)
	const photo = useStore(state => state.profile.photo)
	const isLoggedIn = useStore(state => state.auth.isLoggedIn)

	return (
		<div className="header-profile">
			{isLoggedIn
				? <div onClick={togglePortal} className="row no-gutters align-items-center action">
					<div className="ml-auto">
						<p className="mr-1 d-none d-xl-block header-profile__name">{name} {surname}</p>
					</div>
					<img className="header-profile__thumb" src={photo} alt="profile thumb" />
					<i className="ml-1 header-profile__down fas fa-angle-down"></i>
				</div>
				: <div className="row no-gutters">
					<Link className="ml-auto header-profile__login" to='/login'>Войти</Link>
				</div>
			}
			<div className="header-profile__controls"></div>
			{headerProfileControls(Portal, closePortal, isOpen)}
		</div>
	)
}
