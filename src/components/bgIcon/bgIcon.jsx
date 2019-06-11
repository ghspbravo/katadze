import React from 'react'
import './bgIcon.scss'

export default function bgIcon(imgPath, alter = false) {
	return (
		<div className={`bgicon ${alter ? 'bgicon_alter' : ''}`}>
			<img src={imgPath} alt="icon" />
		</div>
	)
}
