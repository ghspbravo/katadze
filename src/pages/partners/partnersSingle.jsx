import React, { useEffect, useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useStore, useActions } from 'easy-peasy';
import parse from 'html-react-parser'
import activatedPartner from '../../components/activatedPartner/activatedPartner';

import useModal from '../../hooks/useModal';

export default function partnersSingle(router) {

	const isLoading = useStore(store => store.partners.isLoading)

	const [partner, setPartner] = useState({})

	const getSinglePartner = useActions(actions => actions.partners.getSinglePartner)

	const activateCoupon = useActions(actions => actions.partners.activateCoupon)
	const getCouponsAuth = useActions(actions => actions.partners.getCouponsAuth)

	const [modal, openModal] = useModal()

	const question = useRef()
	const success = useRef()
	const notSuccess = useRef()

	const handleActivateCoupon = useCallback(id => {
		activateCoupon(id).then(isSuccess => {
			isSuccess &&
				openModal(<div>
					<div className="col-lg-6 col-sm-8 col-10 px-0 mx-auto">
						<h4 className="text-center">Активировано</h4>
						<div ref={question}>
							<p>Получил ли ты скидку?</p>

							<div className="row no-gutters">
								<button onClick={() => {
									question.current.style.display = 'none'
									success.current.style.display = 'block'
								}}>Да</button>

								<button onClick={() => {
									question.current.style.display = 'none'
									notSuccess.current.style.display = 'block'
								}} className="button ml-auto">Нет</button>
							</div>
						</div>
						<div ref={success} style={{
							display: 'none'
						}}>
							<p>Мы рады создавать возможности для тебя</p>
						</div>
						<div ref={notSuccess} style={{
							display: 'none'
						}}>
							<p>Напиши нам в чем причина</p>
							<Link className="button" to='/contacts'>Написать</Link>
						</div>
					</div>
				</div>)
		})
	})

	const coupons = useStore(store => store.partners.coupons)
	const isMember = useStore(store => store.membership.expiredAt)

	useEffect(() => {
		const fetchPartner = async () => {
			!Object.keys(coupons).length && await getCouponsAuth()
			const partnerId = router.match.params.id
			setPartner(await getSinglePartner(partnerId))
		}
		fetchPartner()

	}, [])

	useEffect(() => {
		document.title = `KATADZE.FRIENDS | ${partner && partner.title ? partner.title : ''}`
	}, [partner])
	return (
		<main>
			{isLoading
				? <div className="container">
					<p>loading...</p>
				</div>
				: <div className="container">
					<h1 className="text-center">{partner.title}</h1>

					<div className="mb-3">
						<button onClick={() => router.history.goBack()}
							className="link hide"><i className="fas fa-angle-double-left"></i> Назад</button>
					</div>

					<img style={{ display: 'block', width: '100%' }} className="mx-auto" src={partner.image} alt="" />
					{modal}
					{coupons && coupons[partner.id] && coupons[partner.id].expired
						? <div className="row no-gutters mt-3">
							<div className="mx-auto">
								{activatedPartner(coupons[partner.id].expired)}
							</div>
						</div>
						: <div className="row no-gutters mt-3">
							<button className="mx-auto"
								onClick={() => handleActivateCoupon(partner.id)} disabled={!isMember || isLoading || coupons[partner.id] === undefined}
							>Активировать</button>
							<div className="col-12 text-small text-center">нажми при оплате</div>
							{!isMember &&
								<div className="col-12 my-3">
									<div className="text-center">
										<Link to='/profile/membership' className="button">Начать пользоваться скидками</Link>
									</div>
								</div>
							}
						</div>
					}

					<div className="col-lg-10 col-12 px-0">
						{partner.description
							&& parse(partner.description)}
					</div>

					<p style={{
						fontSize: '12px'
					}} className="secondary">
						*Участником клуба KatadZe может быть только студент. При активации сикдки необходимо иметь продленный студенческий билет.
				<br /> При возникновении вопросов — обращайтесь к нашему администратору по телефону <a className="hide secondary" href="tel:+79667090909">+7 (966) 709-09-09</a>
					</p>

					<div className="text-center">
						<h1 style={{ fontWeight: '500', letterSpacing: 1.2 }} className="lead">ЖИВИ АКТИВНО. С KATADZE – ВЫГОДНО.</h1>
					</div>
				</div>}
		</main>
	)
}
