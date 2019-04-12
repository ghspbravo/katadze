import React, { useRef, useEffect } from 'react'
import './mobileNavMenu.scss'
import logoText from '../logo/logoText';
import navItems from '../navItems/navItems';
import { useSpring, animated as a } from 'react-spring'

export default function mobileNavMenu(Portal, closePortal, isOpen) {

	const wrapper = useRef()
	const wrapperClickHandler = e => {
		if (e.target === wrapper.current) closePortal()
	}

	const springOpacity = useSpring({ opacity: isOpen ? 0.95 : 0 })
	const springPosition = useSpring({ transform: `translateX(${isOpen ? 0 : 100}%)` })

	useEffect(() => {
		document.body.style.overflowY = isOpen ? 'hidden' : 'scroll'
		return(() => document.body.style.overflowY = 'scroll')
	}, [isOpen])
	return (
		<Portal>
			<a.div style={springOpacity} ref={wrapper} onClick={wrapperClickHandler} className="mobile-nav-menu-wrapper">
				<a.div style={springPosition} className="mobile-nav-menu">
					<div className="mobile-nav-menu__header row no-gutters align-items-center">
						{logoText()}
						<button onClick={closePortal} className="ml-auto mobile-nav-menu-close link">
							<i className="fas fa-times"></i>
						</button>
					</div>

					<div className="mobile-nav-menu__items">
						{navItems()}
					</div>
				</a.div>
			</a.div>
		</Portal>
	)
}
