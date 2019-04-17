import React from 'react'
import {Link} from 'react-router-dom'

export default function cardEvent(imgSrc, title, description, date, place, eventLink='/events') {
	return (
		<div className="card-event card">
			<img className="card__photo" src={imgSrc} alt="eventPrew"/>

			<div className="card__inner">
				<div className="card__title">{title}</div>

				<div className="card__description">{description}</div>

				<div className="row align-items-center mb-3">
					<div className="col">
						<div className="row no-gutters align-items-center">
							<i className="fas fa-calendar-alt mr-1"></i>
							<div className="card__dates col">{date}</div>
						</div>
					</div>

					<div className="col">
						<div className="row no-gutters align-items-center">
							<i className="fas fa-map-marker-alt mr-1"></i>
							<div className="card__place col">{place}</div>
						</div>
					</div>
				</div>
				
			</div>

			<div className="card__footer">
				<Link className="button" to={eventLink}>Подробнее</Link>
			</div>
		</div>
	)
}
