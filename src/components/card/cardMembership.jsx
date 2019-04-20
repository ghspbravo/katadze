import React from 'react'
import parse from 'html-react-parser'

export default function cardMembership(
	id, title, price, description, photo, purchaseHandle, isLoading
) {
	return (
		<div className="card-membership card">
			<div className="card__photo-wrapper">
				<img className="card__photo" src={photo} alt="" />
			</div>

			<div className="card__inner">
				<div className="card__title"><h6>
					{title}
				</h6></div>

				<div className="card__description">{parse(description)}</div>

				<div className="card__price">
					<h5>{price} <i className="fas fa-ruble-sign"></i></h5>
				</div>
			</div>

			<div className="card__footer">
				<button disabled={isLoading} onClick={() => purchaseHandle(id)}>{isLoading ? '...' : 'Приобрести подписку'}</button>
			</div>
		</div>
	)
}
