import React from 'react'
import './modal.scss'

import { useSpring, animated as a } from 'react-spring'

export default function modal(content, Portal, closePortal, isOpen) {

	const springOpacity = useSpring({ opacity: isOpen ? 1 : 0, visibility: isOpen ? 'visible' : 'hidden' })

	const closeModal = (e) => {
		if (e.target.classList.contains('modal'))	closePortal(e)
	}
	return (
		<Portal>
			<a.div style={springOpacity} className="modal" onClick={closeModal}>
				<div className="modal-inner">
					{content}

					<button onClick={closePortal} className="modal-close no-style">
						<i className="fas fa-times"></i>
					</button>
				</div>
			</a.div>
		</Portal>
	)
}
