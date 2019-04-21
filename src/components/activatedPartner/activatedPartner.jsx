import React from 'react'
import './activatedPartner.scss'

export default function activatedPartner(date) {
	return (
		<div className="activated">
			<div className="activated__label">Активировано</div>
			<div className="activated__date">
				Истекает {date}
			</div>
		</div>
	)
}
