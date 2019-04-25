import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import profileNavigation from "./profileNavigation";

import './profileNavigationMobile.scss';

export default function profileNavigationMobile(Portal, closePortal, isOpen) {
	const springOpacity = useSpring({ opacity: isOpen ? 0.95 : 0, visibility: isOpen ? 'visible' : 'hidden' })
	return (
		<Portal>
			<a.div style={springOpacity} className="profile-navigation-mobile-wrapper">
				<div className="profile-navigation-mobile-controls">
					{profileNavigation(closePortal)}
				</div>
			</a.div>
		</Portal>
	)
}
