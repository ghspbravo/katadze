import React from 'react'

import './card.scss'

export default function cardPrice(imgSrc, title, description, price, eventLink ) {
	return (
		<div className="card-price card">
			<img className="card__photo" src={imgSrc} alt="eventPrew"/>

			<div className="card__inner">
				<div className="card__title">{title}</div>

				<div className="card__description">{description}</div>

				<div className="card__price">
					<button>{price} руб.</button>
				</div>
			</div>

			<div className="card__footer">
				<a className="card__link" href={eventLink} rel="noopener noreferrer" target="_blank">Оставить заявку</a>
			</div>
		</div>
	)
}
