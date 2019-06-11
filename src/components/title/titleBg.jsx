import React from 'react'

export default function titleBg(title, useAlter = false) {
	return (
		<div className={`title-bg ${useAlter ? 'title-bg_alter' : ''}`}>
			<h1 className="title-bg__title">
				{title}
			</h1>
		</div>
	)
}
