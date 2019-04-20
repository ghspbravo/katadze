import React from 'react'
import {Link} from 'react-router-dom'

export default function edit() {
	return (
		<div>
			<div className="mb-1">
				<Link className="hide" to="/profile"><i className="fas fa-angle-double-left mr-1"></i>Назад</Link>
			</div>
			<p>Возможность редактирования профиля временно недоступна</p>
		</div>
	)
}
