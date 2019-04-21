import React, { useCallback, useRef, useState, useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring'
import useEvent from 'react-use/lib/useEvent';
import './topbanner.scss'

const defaultContent =
	<div></div>
const defaultImageUrl = ''

export default function topbanner(content = defaultContent, imageUrl = defaultImageUrl) {

	const [{scrollTop}, set] = useSpring(() => ({ scrollTop: 0 }))
	const interpText = scrollTop.interpolate(scrollTop => `translateY(${scrollTop/4}px)`)

	const onScroll = useCallback(e => set({ scrollTop: e.target.scrollingElement.scrollTop }))
	
	const bannerContainer = useRef(null)
	
	useEvent('scroll', onScroll, window, {capture: true})
	const [bannerHeight, setBannerHeight] = useState(0)
	const changeBannerImageHeightOnResize = useCallback(() => setBannerHeight(bannerContainer.current.offsetHeight))
	
	useEvent('resize', changeBannerImageHeightOnResize, window, {capture: true})
	
	useEffect(() => {
		setBannerHeight(bannerContainer.current.offsetHeight)
	}, [])

	return (
		<section ref={bannerContainer} className="sbox js-banner topbanner topbanner_fixed" style={{ zIndex: 0 }}>
			<div className="sbox_bg" style={{
				backgroundImage: `url(${imageUrl})`,
				width: '100%', height: bannerHeight,
				position: "fixed",
				top: 0, left: 0,
				zIndex: 0
			}} />
			<div style={{ zIndex: 1 }} className="topbanner__inner">
				<a.div className="topbanner__content" style={{
					transform: interpText
				}}>
					{content}
				</a.div>
			</div>
		</section>
	)
}
