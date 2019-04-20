import React, { useCallback, useEffect } from 'react'
import { useStore, useActions } from 'easy-peasy';
import { Link } from 'react-router-dom'

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

	return (
		<div>
			<h5>Добро пожаловать в личный кабинет клуба Katadze!</h5>

			{!isActivated &&
				<div>
					<p>Похоже ты не активировал аккаунт.. Проверь свою почту и подтверди аккаунт прежде чем пользоваться сервисами KatadZe</p>
					<p>Не получил письмо? <button onClick={handleActivateClick} className="link">Отправить повторное письмо</button> </p>
				</div>}

			{isActivated && !membershipExpired &&
				<div className="col-lg-8 px-0 col-12 col-sm-10">
				<div className="row no-gutters">
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
				</div>
			</div>}
			
			{isActivated && !isMembershipActive && membershipExpired &&
				<p>Твоя подписка отключена модераторами</p> }

			{isActivated && isMembershipActive && membershipExpired &&
				<div className="col-lg-8 px-0 col-12 col-sm-10">
				<div className="row no-gutters">
					<h4 style={{ textTransform: 'uppercase' }}>Твоя подписка действительна до {membershipExpired}</h4>
	
					<p className="secondary">
						Совершай выгодные покупки с Katadze!
					<br/> <span className="text-small">* Для получения скидки при себе иметь продленный студенческий билет</span>
					</p>
	
					<Link className="mt-3 button" to='/partners'>
						Выбрать партнера
					</Link>
				</div>
			</div>}
		</div>
	)
}
