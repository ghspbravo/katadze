import React from 'react'
import './title.scss'
export default function titleSubtitleUnderline(title, subTitle = null) {
	return (
		<div className="title-underline">
				<div className="title-underline__title-wrapper">
					<div className="title-underline__title">
						{title}
					</div>
				</div>

				<div className="title-underline__subtitle">
					{subTitle}
				</div>
		</div>
	)
}
