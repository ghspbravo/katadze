import React from 'react'
import parse from 'html-react-parser'

import './card.scss'

export default function cardPrice(
	id,
	imgSrc,
	title,
	description,
	price,
	eventLink,
	paymentHandler,
	isAllowed,
	parts
) {
	return (
		<div className="card-price card">
			<img className="card__photo" src={imgSrc} alt="eventPrew" />

			<div className="card__inner">
				<div className="card__title">{title}</div>

				<div className="card__description">{parse(description)}</div>

				<div className="card__price">
					<button disabled={!isAllowed} onClick={() => paymentHandler(id, null)}>{price} руб.</button>

					{parts.length && 
						parts.map((part, index) => <div key={index} className="row no-gutters mt-2">
							<span>{part.name}</span>
							<button className="ml-2" disabled={!isAllowed} onClick={() => paymentHandler(id, part.id)}>{part.price} руб.</button>
						</div> )

					}
				</div>
			</div>

			<div className="card__footer">
				<a className="card__link" href={eventLink} rel="noopener noreferrer" target="_blank">Оставить заявку</a>
			</div>
		</div>
	)
}
