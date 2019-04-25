import React from 'react'
import './profileUserCard.scss'

export default function profileUserCard(name, surname, photo, email, phone) {
	return (
		<div className="profile-card">
			<div className="profile-card__inner">
				<div className="profile-card__photo">
					<img src={photo} alt=""/>
				</div>

				<div className="profile-card__name">
					<h5>{name} {surname}</h5>
				</div>

				<div className="profile-card__contacts">
					<div className="profile-card__contacts-item">
						<i className="fas fa-phone-square" /> {phone}
					</div>
					<div className="profile-card__contacts-item">
						<i className="fas fa-envelope-square" /> {email}
					</div>
				</div>

			</div>
		</div>
	)
}
