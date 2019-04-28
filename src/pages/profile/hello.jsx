import React, { useCallback, useEffect } from 'react'
import { useStore, useActions } from 'easy-peasy';
import { Link } from 'react-router-dom'
import hasMembershipCard from '../../components/memberCard/hasMembershipCard';
import profileUserCard from '../../components/profile/profileUserCard';
import howToMembership from '../../components/howToMembership/howToMembership';

export default function hello() {
	const sendActivate = useActions(actions => actions.register.sendActivate)

	const getMembershipStatus = useActions(actions => actions.membership.getStatus)

	const isActivated = useStore(store => store.profile.activated)
	const isMembershipActive = useStore(store => store.membership.isActive)
	const membershipExpired = useStore(store => store.membership.expiredAt)

	const handleActivateClick = useCallback((e) => {
		sendActivate()
		e.target.classList.add('disabled')
	})

	useEffect(() => {
		isActivated && getMembershipStatus()
	}, [])

	const name = useStore(state => state.profile.name)
	const surname = useStore(state => state.profile.surname)
	const photo = useStore(state => state.profile.photo)
	const email = useStore(state => state.profile.email)
	const phone = useStore(state => state.profile.phone)

	return (
		<div>
			<h5>Добро пожаловать в личный кабинет клуба Katadze!</h5>
			<div className="text-center">
				<h1 style={{ fontWeight: '500', letterSpacing: 1.2 }} className="lead">ЖИВИ АКТИВНО.
				<br /> С KATADZE – ВЫГОДНО.</h1>
			</div>

			<div className="row">
				<div className="col-lg-8 col-12 col-md-8 col-sm-10">
					{!isActivated &&
						<div>
							<p>Похоже ты не активировал аккаунт.. Проверь свою почту и подтверди аккаунт прежде чем пользоваться сервисами KatadZe</p>
							<p>Не получил письмо? <button onClick={handleActivateClick} className="link">Отправить повторное письмо</button> </p>
						</div>}

					{isActivated && !membershipExpired &&
						<div className="row no-gutters">
							<div className="d-md-none">
								{profileUserCard(name, surname, photo, email, phone)}
							</div>
							<h4 className="col" style={{ textTransform: 'uppercase' }}>Ты еще не приобрел подписку</h4>
							<span style={{
								fontSize: '100px'
							}}>:(</span>

							<p className="secondary">
								Сделай это прямо сейчас и начни
							<br className="d-none d-lg-block" /> экономить на покупках и
							<br className="d-none d-lg-block" /> развлечениях!
						</p>

							<Link className="mt-3 button" to='/profile/membership'>
								Приобрести подписку
						</Link>
						</div>}

					{isActivated && !isMembershipActive && membershipExpired &&
						<div>
							<div className="d-md-none">
								{profileUserCard(name, surname, photo, email, phone)}
							</div>
							<p>Твоя подписка отключена модераторами</p>
						</div>}

					{isActivated && isMembershipActive && membershipExpired &&
						<div>
							<div className="d-md-none">
								{profileUserCard(name, surname, photo, email, phone)}
							</div>

							<h4 className="mb-0" style={{ textTransform: 'uppercase' }}>Поздравляем!</h4>
							<h5 className="mt-0" style={{ textTransform: 'uppercase', fontWeight: 'normal' }}>Твоя подписка действительна до {membershipExpired}</h5>

							<p className="secondary">
								Совершай выгодные покупки с Katadze!
							</p>

							{hasMembershipCard()}

							<div className="mt-3 row no-gutters">
								<Link className="button" to='/partners'>
									Выбрать партнера
							</Link>
							</div>
						</div>}
				</div>
				<div className="d-none d-md-block col-md-4 col-lg-4 pb-2">
					{profileUserCard(name, surname, photo, email, phone)}
				</div>

			</div>

			<section className="sbox">

				<h4 className="text-center" style={{
					fontWeight: '900'
				}}>Как пользоваться подпиской</h4>

				<div>
					{howToMembership()}
				</div>
				<p className="primary text-small">* Для получения скидки при себе иметь продленный студенческий билет</p>

			</section>
		</div>
	)
}
