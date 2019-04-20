import React from 'react'
import { Link } from 'react-router-dom'

import corner from './partnersCorner.png'

export default function cardPartner(id, imgSrc, title, description, coupon, isMember, activateCoupon, isLoading) {
	return (
		<div className="card-partner card">
			<div className="card__photo-wrapper">
				<img className="card__photo" src={imgSrc} alt="partnerPrew" />
				{coupon && coupon.discount &&
					<div className="card__price" style={{ backgroundImage: `url(${corner})` }}>
						<div className="card__price-value">
							-{coupon.discount}%
				</div>
					</div>}
			</div>

			<div className="card__inner">
				<div className="card__title">{title}</div>

				<div className="card__description">{description}</div>

				<Link to={`/partner/${id}`} className="card__link">Подробнее</Link>
			</div>

			<div className="card__footer">
				{coupon && coupon.expired 
				? <p>Истекает {coupon.expired}</p>
				: <button onClick={() => activateCoupon(id)} disabled={!isMember || isLoading || coupon === undefined} >Активировать</button>
				}
			</div>
		</div>
	)
}
