import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import activities from './activities.svg'
import beauty from './beauty.svg'
import cafe from './cafe.svg'
import dev from './dev.svg'
import learning from './learning.svg'
import shops from './shops.svg'
import ski from './ski.svg'

import { useStore, useActions } from 'easy-peasy';

export default function partnersCategories() {
	const isLoading = useStore(store => store.partners.isLoading)

	const isMember = useStore(store => store.membership.expiredAt)

	const getCouponsAuth = useActions(actions => actions.partners.getCouponsAuth)
	const coupons = useStore(store => store.partners.coupons)

	const getPartners = useActions(actions => actions.partners.getPartners)
	const partnersCategories = useStore(store => store.partners.partnersCategories)

	useEffect(() => {
		!Object.keys(partnersCategories).length && getPartners()
		!Object.keys(coupons).length && getCouponsAuth()
	}, [])

	const writePartnersCount = (count) => {
		let n = count % 100;
		if (n >= 5 && n <= 20) {
			return `${count} партнеров`;
		}
		n %= 10;
		if (n === 1) {
			return `${count} партнер`;
		}
		if (n >= 2 && n <= 4) {
			return `${count} партнера`;
		}
		return `${count} партнеров`;
	}

	return isLoading
		? (
			<p>loading...</p>
		)
		: (
			<div>
				{!isMember &&
					<div className='mb-3 col-lg-10 px-0 col-12'>
						<p>Воспользоваться подпиской могут только члены клуба. 	Оплатить подписку можно в личном кабинете</p>
						<Link className="button" to="/profile">Перейти</Link>
					</div>
				}
				<div className="row">
					<div className="col-lg-3 col-md-6 col-12 mb-2">
						<Link to='/partners/7' className="partners-category no-style">
							<div className="partners-category__icon">
								<img src={activities} alt="category icon" />
							</div>

							<div className="partners-category__bg" style={{ backgroundColor: 'DEEPPINK' }} />

							<div className="partners-category__title lead">
								Активности
							<span className="partners-category__count">{partnersCategories[7] && writePartnersCount(partnersCategories[7].count)}</span>
							</div>

						</Link>
					</div>
					<div className="col-lg-3 col-md-6 col-12 mb-2">
						<Link to='/partners/6' className="partners-category no-style">
							<div className="partners-category__icon">
								<img src={shops} alt="category icon" />
							</div>

							<div className="partners-category__bg" style={{ backgroundColor: 'DARKORANGE' }} />

							<div className="partners-category__title lead">
								Магазины
							<span className="partners-category__count">{partnersCategories[6] && writePartnersCount(partnersCategories[6].count)}</span>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-md-6 col-12 mb-2">
						<Link to='/partners/10' className="partners-category no-style">
							<div className="partners-category__icon">
								<img src={learning} alt="category icon" />
							</div>

							<div className="partners-category__bg" style={{ backgroundColor: 'MEDIUMVIOLETRED' }} />

							<div className="partners-category__title lead">
								Обучение
							<span className="partners-category__count">{partnersCategories[10] && writePartnersCount(partnersCategories[10].count)}</span>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-md-6 col-12 mb-2">
						<Link to='/partners/11' className="partners-category no-style">
							<div className="partners-category__icon">
								<img src={cafe} alt="category icon" />
							</div>

							<div className="partners-category__bg" style={{ backgroundColor: 'CRIMSON' }} />

							<div className="partners-category__title lead">
								Кафе и рестораны
							<span className="partners-category__count">{partnersCategories[11] && writePartnersCount(partnersCategories[11].count)}</span>
							</div>
						</Link>
					</div>


					<div className="col-lg-4 col-md-6 col-12 mb-2">
						<Link to='/partners/5' className="partners-category partners-category_long no-style">
							<div className="partners-category__icon">
								<img src={ski} alt="category icon" />
							</div>

							<div className="partners-category__bg" style={{ backgroundColor: 'CORNFLOWERBLUE' }} />

							<div className="partners-category__title lead">
								Горнолыжные курорты
							<span className="partners-category__count">{partnersCategories[5] && writePartnersCount(partnersCategories[5].count)}</span>
							</div>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 mb-2">
						<Link to='/partners/12' className="partners-category partners-category_long no-style">
							<div className="partners-category__icon">
								<img src={beauty} alt="category icon" />
							</div>

							<div className="partners-category__bg" style={{ backgroundColor: 'CHOCOLATE' }} />

							<div className="partners-category__title lead">
								Красота и здоровье
							<span className="partners-category__count">{partnersCategories[12] && writePartnersCount(partnersCategories[12].count)}</span>
							</div>
						</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-12 mb-2">
						<Link to='/partners/8' className="partners-category partners-category_long no-style">
							<div className="partners-category__icon">
								<img src={dev} alt="category icon" />
							</div>

							<div className="partners-category__bg" style={{ backgroundColor: 'LIGHTSLATEGRAY' }} />

							<div className="partners-category__title lead">
								В разработке
							<span className="partners-category__count">{partnersCategories[8] && writePartnersCount(partnersCategories[8].count)}</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		)
}
