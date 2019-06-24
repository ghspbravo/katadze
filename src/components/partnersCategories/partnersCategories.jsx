import React, { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import parse from 'html-react-parser'

import activities from './activities.svg'
import beauty from './beauty.svg'
import cafe from './cafe.svg'
import dev from './dev.svg'
import learning from './learning.svg'
import shops from './shops.svg'
import ski from './ski.svg'

import { useStore, useActions } from 'easy-peasy';
import titleBg from '../title/titleBg';
import partnersSearch from '../../pages/partners/partnersSearch/partnersSearch';

export default function partnersCategories(router) {
	const isLoading = useStore(store => store.partners.isLoading)

	const isMember = useStore(store => store.membership.expiredAt)
	const isLoggedIn = useStore(state => state.auth.isLoggedIn)

	const getCouponsAuth = useActions(actions => actions.partners.getCouponsAuth)
	const coupons = useStore(store => store.partners.coupons)

	const getPartners = useActions(actions => actions.partners.getPartners)
	const partnersCategories = useStore(store => store.partners.partnersCategories)

	const activateTariff = useActions(actions => actions.orders.orderMembership)
	const getTariffs = useActions(actions => actions.membership.getTariffs)
	const tariffs = useStore(store => store.membership.tariffs)

	const purchaseHandle = useCallback(id => {
		activateTariff(id)
	})

	useEffect(() => {
		!Object.keys(partnersCategories).length && getPartners()
		!Object.keys(coupons).length && getCouponsAuth()

		!tariffs.length && getTariffs()
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

	return (
		<div>
			<div className="mb-3 col-lg-10 px-0 col-12">
				<h5>
					БОЛЕЕ 30 ЛУЧШИХ МАГАЗИНОВ, ЗАВЕДЕНИЙ И АКТИВНОСТЕЙ ГОРОДА СО СКИДКАМИ до 50%
					</h5>
			</div>

			{/* Partner's search */}
			<div className="col-lg-10 px-0">
				{partnersSearch(router)}
			</div>

			{!isMember &&
				<div className='mb-3 col-lg-10 px-0 col-12'>
					<p>Воспользоваться подпиской могут только члены клуба. Оплатить подписку можно в личном кабинете</p>
					<div className="row no-gutters">
						<Link className="button" to="/profile/membership">Начать пользоваться скидками</Link>
					</div>
				</div>
			}
			{isLoading
				? <p>loading...</p>
				: <div className="row">
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
				</div>}

			<section className="sbox">
				<div className="text-center">
					{titleBg('Тарифы')}
				</div>

				<div className="row mt-4">
					{tariffs.length && tariffs.map((tariff, index) => <div key={index} className="col-sm-6 col-12 mb-3">
						<div className="card-membership card">
							<div className="card__photo-wrapper">
								<img className="card__photo" src={tariff.img} alt="" />
							</div>

							<div className="card__inner">
								<div className="card__title"><h6>
									{tariff.name}
								</h6></div>

								<div className="card__description">{parse(tariff.description)}</div>

								<div className="card__price">
									{tariff.price !== "0"
										? <h5>{tariff.price} <i className="fas fa-ruble-sign"></i></h5>
										: <h5>Бесплатно</h5>}
								</div>
							</div>

							<div className="card__footer">
								{isLoggedIn
									? isMember
										? <button disabled>Приобрести подписку</button>
										: <button disabled={isLoading} onClick={() => purchaseHandle(tariff.id)}>{isLoading ? '...' : 'Приобрести подписку'}</button>
									: <Link className="button" to='/login'>Приобрести подписку</Link>
								}
							</div>
						</div>
					</div>)}
				</div>
			</section>
		</div>
	)
}
