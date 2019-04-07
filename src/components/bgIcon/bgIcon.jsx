import React from 'react'
import './bgIcon.scss'

export default function bgIcon(imgPath) {
	return (
		<div className="bgicon">
			<img src={imgPath} alt="icon"/>
		</div>
	)
}
