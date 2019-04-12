import React, { useState, useEffect, useCallback } from 'react'
import './header.scss'
import navItems from '../navItems/navItems';
import logoBrand from '../logo/logoBrand';
import logoText from '../logo/logoText';

import usePortal from 'react-useportal'
import { useTransition } from 'react-spring'
import useEvent from 'react-use/lib/useEvent';
import headerProfile from './headerProfile';
import mobileNavMenu from '../mobileNavMenu/mobileNavMenu';

export default function header(router) {
	let pathName = router.location.pathname
	const [showLogoBrand, setLogoBrand] = useState(false)

	const logoBrandTransitions = useTransition(showLogoBrand, showLogoBrand, {
		from: { top: -230 },
		enter: { top: 0 },
		leave: { top: -230 },
	})

	const [showLogoText, setLogoText] = useState(false)

	const logoTextTransitions = useTransition(showLogoText, showLogoText, {
		from: { opacity: 0 },
		enter: [
			{ life: '50%' },
			{ opacity: 1 }
		],
		leave: { opacity: 0 },
	})

	const [scrollPosition, setScrollPosition] = useState(window.scrollY)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	useEffect(() => {
		setLogoBrand(pathName.match(/(events|partners)/) !== null)
		setLogoText(pathName.match(/(events|partners)/) === null)
	}, [pathName])

	const scrollHeaderClassChangeHadler = useCallback(e => setScrollPosition(e.target.scrollingElement.scrollTop))
	const screenWidthChangeHadler = useCallback(e => setScreenWidth(e.target.innerWidth))
	useEvent('scroll', scrollHeaderClassChangeHadler, window)
	useEvent('resize', screenWidthChangeHadler, window)

	const getHeaderPrefix = (pathName, scrollPosition, screenWidth) => {
		let classModify = []
		if (pathName.match(/(events|partners)/)) {

			if (screenWidth < 576) { //on xs screen
				if (showLogoBrand) {
					setLogoBrand(false)
					setLogoText(true)
				}
				classModify.push('header_mobile')
			}
			if (scrollPosition < window.innerHeight / 2 - 75) //50vh - banner height
			{
				if (showLogoText && screenWidth >= 576) {
					setLogoBrand(true)
					setLogoText(false)
				}
				classModify.push('header_transparent')
			}
			else {
				if (showLogoBrand) {
					setLogoBrand(false)
					setLogoText(true)
				}
				classModify.push('header_white')
			}
		}
		else classModify.push('header_white')
		return classModify.toString().replace(',', ' ')
	}

	const { openPortal, closePortal, isOpen, Portal } = usePortal({})

	return (
		<div className={`header-wrapper ${getHeaderPrefix(pathName, scrollPosition, screenWidth)}`}>
			<div className="container">
				<div className="header row align-items-center no-gutters">
					<div className="header-logo">
						{logoBrandTransitions.map(({ item, key, props }) =>
							item && logoBrand(props, key, pathName))}
						{logoTextTransitions.map(({ item, key, props }) =>
							item && logoText(props, key))}
					</div>
					<nav className="row no-gutters header-nav d-lg-flex d-none">
						{navItems()}
					</nav>
					<div className="ml-auto">
						{headerProfile()}
					</div>
					<div className="ml-2 d-lg-none">
						<button onClick={openPortal} className="link header-mobile-open">
							<i className="fas fa-bars"></i>
						</button>
						{mobileNavMenu(Portal, closePortal, isOpen)}
					</div>
				</div>
			</div>
		</div>
	)
}
