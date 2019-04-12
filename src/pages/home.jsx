import React, { useEffect, useState, useCallback } from 'react'
import useTitle from 'react-use/lib/useTitle';
import useEvent from 'react-use/lib/useEvent';

import useImage from 'use-image';

import mainBg from '../components/homeItems/main.jpg'
import eventsBg from '../components/homeItems/events.jpg'
import partnersBg from '../components/homeItems/partners.jpg'
import gidsBg from '../components/homeItems/gids.jpg'

import { useSpring, useTransition, animated as a } from 'react-spring'
import homeItemsDesktop from '../components/homeItems/homeItemsDesktop';
import homeItemsMobile from '../components/homeItems/homeItemsMobile';
import loaderLogo from '../components/loader/loaderLogo';

export default function home() {

	const [width, setWidth] = useState(window.innerWidth)

	const resizeHandler = useCallback(() => setWidth(window.innerWidth))
	useEvent('resize', resizeHandler)

	useEffect(() => {
		if (width < 992) {
			if (document.body.classList.contains('no-scroll')) document.body.classList.remove('no-scroll')
			return
		}
		document.body.classList.add('no-scroll')
		return () => {
			document.body.classList.remove('no-scroll')
		}
	}, [width])

	const [isReady, setReady] = useState(false)
	const [showLoader, setLoader] = useState(true)

	const loaderTransition = useTransition(showLoader, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },

		onDestroyed: () => setReady(true)
	})

	const contentTransition = useTransition(isReady, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
	})

	const [activePartners, setPartners] = useState(false)
	const [activeEvents, setEvents] = useState(false)
	const [activeGids, setGids] = useState(false)

	const activateActivePartners = useCallback(() => setPartners(true))
	const activateActiveEvents = useCallback(() => setEvents(true))
	const activateActiveGids = useCallback(() => setGids(true))

	const deactivateActivePartners = useCallback(() => setPartners(false))
	const deactivateActiveEvents = useCallback(() => setEvents(false))
	const deactivateActiveGids = useCallback(() => setGids(false))

	const partnersSpring = useSpring({ opacity: activePartners ? 1 : 0 })
	const eventsSpring = useSpring({ opacity: activeEvents ? 1 : 0 })
	const gidsSpring = useSpring({ opacity: activeGids ? 1 : 0 })

	const [main, mainStatus] = useImage(mainBg);
	const [partners, partnersStatus] = useImage(partnersBg);
	const [events, eventsStatus] = useImage(eventsBg);
	const [gids, gidsStatus] = useImage(gidsBg);

	useEffect(() => {
		if ([mainStatus, partnersStatus, eventsStatus, gidsStatus]
			.every(status => status === 'loaded'))
			setLoader(false)
	}, [mainStatus, partnersStatus, eventsStatus, gidsStatus])

	useTitle('KATADZE')
	return isReady
		? contentTransition.map(({ item, key, props }) =>
			item && <a.div key={key} style={props}>{
				width > 991
					? homeItemsDesktop([activateActivePartners, activateActiveEvents, activateActiveGids],
						[deactivateActivePartners, deactivateActiveEvents, deactivateActiveGids],
						[partnersSpring, eventsSpring, gidsSpring])
					: homeItemsMobile()
			}</a.div>)
		: loaderTransition.map(({ item, key, props }) =>
			item && <a.div key={key} style={props}>{loaderLogo()}</a.div>
		)
}