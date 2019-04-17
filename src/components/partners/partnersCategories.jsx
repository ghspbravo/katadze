import React from 'react'
import { Link } from 'react-router-dom'

import activities from './activities.svg'
import beauty from './beauty.svg'
import cafe from './cafe.svg'
import dev from './dev.svg'
import learning from './learning.svg'
import shops from './shops.svg'
import ski from './ski.svg'

export default function partnersCategories() {
	return (
		<div className="row">
			<div className="col-lg-3 col-md-6 col-12 mb-2">
				<Link to='/partners/1' className="partners-category no-style">
					<div className="partners-category__icon">
						<img src={activities} alt="category icon" />
					</div>

					<div className="partners-category__bg" style={{ backgroundColor: 'DEEPPINK' }} />

					<div className="partners-category__title lead">
						Активности
									</div>
				</Link>
			</div>
			<div className="col-lg-3 col-md-6 col-12 mb-2">
				<Link to='/partners/1' className="partners-category no-style">
					<div className="partners-category__icon">
						<img src={shops} alt="category icon" />
					</div>

					<div className="partners-category__bg" style={{ backgroundColor: 'DARKORANGE' }} />

					<div className="partners-category__title lead">
						Магазины
									</div>
				</Link>
			</div>
			<div className="col-lg-3 col-md-6 col-12 mb-2">
				<Link to='/partners/1' className="partners-category no-style">
					<div className="partners-category__icon">
						<img src={learning} alt="category icon" />
					</div>

					<div className="partners-category__bg" style={{ backgroundColor: 'MEDIUMVIOLETRED' }} />

					<div className="partners-category__title lead">
						Обучение
									</div>
				</Link>
			</div>
			<div className="col-lg-3 col-md-6 col-12 mb-2">
				<Link to='/partners/1' className="partners-category no-style">
					<div className="partners-category__icon">
						<img src={cafe} alt="category icon" />
					</div>

					<div className="partners-category__bg" style={{ backgroundColor: 'CRIMSON' }} />

					<div className="partners-category__title lead">
						Кафе и рестораны
									</div>
				</Link>
			</div>


			<div className="col-lg-4 col-md-6 col-12 mb-2">
				<Link to='/partners/1' className="partners-category partners-category_long no-style">
					<div className="partners-category__icon">
						<img src={ski} alt="category icon" />
					</div>

					<div className="partners-category__bg" style={{ backgroundColor: 'CORNFLOWERBLUE' }} />

					<div className="partners-category__title lead">
						Горнолыжные курорты
									</div>
				</Link>
			</div>
			<div className="col-lg-4 col-md-6 col-12 mb-2">
				<Link to='/partners/1' className="partners-category partners-category_long no-style">
					<div className="partners-category__icon">
						<img src={beauty} alt="category icon" />
					</div>

					<div className="partners-category__bg" style={{ backgroundColor: 'CHOCOLATE' }} />

					<div className="partners-category__title lead">
						Красота и здоровье
									</div>
				</Link>
			</div>
			<div className="col-lg-4 col-md-6 col-12 mb-2">
				<Link to='/partners/1' className="partners-category partners-category_long no-style">
					<div className="partners-category__icon">
						<img src={dev} alt="category icon" />
					</div>

					<div className="partners-category__bg" style={{ backgroundColor: 'LIGHTSLATEGRAY' }} />

					<div className="partners-category__title lead">
						В разработке
									</div>
				</Link>
			</div>
		</div>
	)
}
