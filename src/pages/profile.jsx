import React from 'react'
import profileNavigation from '../components/profile/profileNavigation';

import usePortal from 'react-useportal'
import profileNavigationMobile from '../components/profile/profileNavigationMobile';
import cardMembership from '../components/card/cardMembership';


export default function profile() {
	const { closePortal, togglePortal, isOpen, Portal } = usePortal({
		bindTo: document.querySelector('.profile-navigation-mobile-controls')
	})

	return (
		<main>
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

						<div className="row">
							{Array(10).fill().map((val, index) => <div key={index} className="col-sm-6 col-12 mb-3">
								{cardMembership()}
							</div>)}
						</div>

					</div>
				</div>
			</div>
		</main>
	)
}
