import React, { useState, useEffect, useCallback } from 'react'
import './header.scss'
import navItems from '../navItems/navItems';
import logoBrand from '../logo/logoBrand';
import logoText from '../logo/logoText';

import { useTransition } from 'react-spring'
import useEvent from 'react-use/lib/useEvent';

/**
 * @param {string} pathName /path
 */
export default function header(pathName) {
	const [showLogoBrand, setLogoBrand] = useState(false)

	const logoBrandTransitions = useTransition(showLogoBrand, showLogoBrand, {
		from: { top: -230 },
		enter: { top: 0 },
		leave: { top: -230 },
	})

	const [showLogoText, setLogoText] = useState(false)
	const [scrollPosition, setScrollPosition] = useState(0)

	const logoTextTransitions = useTransition(showLogoText, showLogoText, {
		from: { opacity: 0 },
		enter: [
			{ life: '50%' },
			{ opacity: 1 }
		],
		leave: { opacity: 0 },
	})

	useEffect(() => {
		setScrollPosition(window.scrollY)
	}, [])

	useEffect(() => {
		setLogoBrand(pathName.match(/(events|partners)/) !== null)
		setLogoText(pathName.match(/(events|partners)/) === null)
	}, [pathName])

	const scrollHeaderClassChangeHadler = useCallback(e => setScrollPosition(e.target.scrollingElement.scrollTop))
	useEvent('scroll', scrollHeaderClassChangeHadler, window)

	const getHeaderPrefix = (pathName, scrollPosition) => {
		if (pathName.match(/(events|partners)/)) {
			if (scrollPosition < window.innerHeight / 2 - 75) //50vh - banner height
			{
				if (showLogoText) {
					setLogoBrand(true)
					setLogoText(false)
				}
				return 'header_transparent'
			}
			else {
				if (showLogoBrand) {
					setLogoBrand(false)
					setLogoText(true)
				}
				return 'header_white'
			}
		}
		else return 'header_white'
	}


	return (
		<div className={`header-wrapper ${getHeaderPrefix(pathName, scrollPosition)}`}>
			<div className="container">
				<div className="header row align-items-center no-gutters">
					<div className="header-logo">
						{logoBrandTransitions.map(({ item, key, props }) =>
							item && logoBrand(props, key, pathName))}
						{logoTextTransitions.map(({ item, key, props }) =>
							item && logoText(props, key))}
					</div>
					<nav className="row no-gutters header-nav">
						{navItems()}
					</nav>
				</div>
			</div>
		</div>
	)
}
