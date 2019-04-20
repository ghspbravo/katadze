import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import './globalError.scss'

export default function globalError(isOpen, errorText, closeHandler) {
	const springOpacity = useSpring({ opacity: isOpen ? 0.95 : 0, bottom: isOpen ? 0 : -120 })

	return (
		<a.div style={springOpacity} className="global-error-wrapper">
			<div className="global-error">
				<p>{errorText}</p>
				<button type="button" className="link no-style global-error-close" onClick={closeHandler}><i className="fas fa-times"></i></button>
			</div>
		</a.div>
	)
}
