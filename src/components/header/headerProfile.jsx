import React from 'react'
import usePortal from 'react-useportal'
import './headerProfile.scss'
import { Link } from 'react-router-dom'

import headerProfileControls from './headerProfileControls';

export default function headerProfile() {
	const { closePortal, togglePortal, isOpen, Portal } = usePortal({
		bindTo: document.querySelector('.header-profile__controls')
	})

	return (
		<div className="header-profile">
			<div onClick={togglePortal} className="d-sm-flex d-none row no-gutters align-items-center action">
				<p className="mr-1 d-none d-xl-block header-profile__name">Иван Иванов</p>
				<img className="header-profile__thumb" src="https://www.haugetun.no/themes/custom/haugetun_theme/images/default-user.png" alt="profile thumb" />
				<i className="ml-1 d-none d-sm-block  header-profile__down fas fa-angle-down"></i>
			</div>
			<div className="header-profile__controls"></div>
			{headerProfileControls(Portal, closePortal, isOpen)}
			<Link className="d-sm-none" to='/profile'>
				<img className="header-profile__thumb" src="https://www.haugetun.no/themes/custom/haugetun_theme/images/default-user.png" alt="profile thumb" />
			</Link>
		</div>
	)
}
