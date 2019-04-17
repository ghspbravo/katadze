import React from 'react'

export default function cardMembership() {
	return (
		<div className="card-membership card">
			<div className="card__photo-wrapper">
				<img className="card__photo" src="https://katadze.ru/media/upload/subscription_type/d36bc267-81ca-4465-a7cd-cfce56fb8bfa.jpg" alt="" />
			</div>

			<div className="card__inner">
				<div className="card__title"><h6>
					Подписка KatadZe.Friends на месяц
				</h6></div>

				<div className="card__description">АКЦИЯ! Оформи подписку и сэкономь на покупках и развлечениях от 500 рублей за всё время. </div>

				<div className="card__price">
					<h5>30 руб</h5>
				</div>
			</div>

			<div className="card__footer">
				<button>Приобрести подписку</button>
			</div>
		</div>
	)
}
