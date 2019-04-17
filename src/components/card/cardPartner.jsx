import React from 'react'
import {Link} from 'react-router-dom'

import corner from './partnersCorner.png'

export default function cardPartner(imgSrc, title, description, id, percent) {
	return (
		<div className="card-partner card">
			<div className="card__photo-wrapper">
				<img className="card__photo" src={imgSrc} alt="partnerPrew" />
				<div className="card__price" style={{backgroundImage: `url(${corner})`}}>
					<div className="card__price-value">
						-{percent}%
				</div>
				</div>
			</div>

			<div className="card__inner">
				<div className="card__title">{title}</div>

				<div className="card__description">{description}</div>

				<Link to={`/partner/${id}`} className="card__link">Подробнее</Link>
			</div>

			<div className="card__footer">
				<button>Активировать</button>
			</div>
		</div>
	)
}
