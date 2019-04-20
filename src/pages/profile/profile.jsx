import React from 'react'
import { useStore } from 'easy-peasy';
import { Redirect, Switch, Route } from 'react-router-dom'

import profileNavigation from '../../components/profile/profileNavigation';
import useTitle from 'react-use/lib/useTitle';

import usePortal from 'react-useportal'
import profileNavigationMobile from '../../components/profile/profileNavigationMobile';
import membership from './membership';
import hello from './hello';

import './profile.scss'
import edit from './edit';


export default function profile() {
	const { closePortal, togglePortal, isOpen, Portal } = usePortal({
		bindTo: document.querySelector('.profile-navigation-mobile-controls')
	})

	const isLoggedIn = useStore(state => state.auth.isLoggedIn)
	
	useTitle('KATADZE.PROFILE')
	return (
		<main>
			{!isLoggedIn && <Redirect to='/login' />}
			<div className="container">
				<div className="row">

					<div className="col-lg-4 d-none d-lg-block">
						{profileNavigation()}
					</div>
					
					<div className="col-lg-8 col-12">
						<div className="d-lg-none profile-navigation-mobile-controls">
							<button onClick={togglePortal} className="profile-navigation-mobile__open link no-style"><i className="fas fa-align-left"></i> Меню</button>
							{profileNavigationMobile(Portal, closePortal, isOpen)}
						</div>

						<Switch>
							<Route path="/profile/membership" component={membership} />
							<Route path="/profile/edit" component={edit} />
							<Route exact path="/profile/" component={hello} />
						</Switch>

					</div>
				</div>
			</div>
		</main>
	)
}
