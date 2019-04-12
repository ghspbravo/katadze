import { useEffect, useState, useCallback } from 'react'
import useTitle from 'react-use/lib/useTitle';
import useEvent from 'react-use/lib/useEvent';

import { useSpring } from 'react-spring'
import homeItemsDesktop from '../components/homeItems/homeItemsDesktop';
import homeItemsMobile from '../components/homeItems/homeItemsMobile';

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

	const [activePartners, setPartners] = useState(false)
	const [activeEvents, setEvents] = useState(false)
	const [activeGids, setGids] = useState(false)

	const activateActivePartners = useCallback(() => setPartners(true))
	const activateActiveEvents = useCallback(() => setEvents(!activeEvents))
	const activateActiveGids = useCallback(() => setGids(!activeGids))

	const deactivateActivePartners = useCallback(() => setPartners(false))
	const deactivateActiveEvents = useCallback(() => setEvents(!activeEvents))
	const deactivateActiveGids = useCallback(() => setGids(!activeGids))

	const partnersSpring = useSpring({ opacity: activePartners ? 1 : 0 })
	const eventsSpring = useSpring({ opacity: activeEvents ? 1 : 0 })
	const gidsSpring = useSpring({ opacity: activeGids ? 1 : 0 })

	useTitle('KATADZE')
	return width > 991
	? homeItemsDesktop([activateActivePartners, activateActiveEvents, activateActiveGids],
		[deactivateActivePartners, deactivateActiveEvents, deactivateActiveGids],
		[partnersSpring, eventsSpring, gidsSpring])
	: homeItemsMobile()
}