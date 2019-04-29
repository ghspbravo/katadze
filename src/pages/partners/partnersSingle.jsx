import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useStore, useActions } from 'easy-peasy';
import parse from 'html-react-parser'
import activatedPartner from '../../components/activatedPartner/activatedPartner';

import useModal from '../../hooks/useModal';
import placeholder from './placeholder.svg'

import './partnersSingle.scss'

export default function partnersSingle(router) {

	const isLoading = useStore(store => store.partners.isLoadingSingle)

	const [partner, setPartner] = useState({})

	const getSinglePartner = useActions(actions => actions.partners.getSinglePartner)

	const activateCoupon = useActions(actions => actions.partners.activateCoupon)
	const getCouponsAuth = useActions(actions => actions.partners.getCouponsAuth)

	const [modal, openModal] = useModal()
	const [modalYes, openYesModal] = useModal()
	const [modalNo, openNoModal] = useModal()

	const positiveFeedback = useCallback((e) => {
		openYesModal(<div className="col-lg-6 col-sm-8 col-12 px-0 mx-auto">
			<i className="partners-feedback-icon fas fa-check-circle"></i>
			<h5>Ура!</h5>
			<p>Мы рады создавать возможности для тебя</p>
		</div>, e)
	})

	const negativeFeedback = useCallback((e) => {
		openNoModal(<div className="col-lg-6 col-sm-8 col-12 px-0 mx-auto">
			<i className="partners-feedback-icon fas fa-times-circle"></i>
			<h5>Сожалеем :(</h5>
			<p>Напиши нам в чем причина</p>
			<Link className="button" to='/contacts'>Написать</Link>
		</div>, e)
	})

	const handleActivateCoupon = useCallback(id => {
		activateCoupon(id).then(isSuccess => {
			isSuccess &&
				openModal(<div>
					<div className="col-lg-6 col-sm-8 col-12 px-0 mx-auto">
						<h4 className="text-center">Активировано</h4>
						<div>
							<p>Получил ли ты скидку?</p>

							<div className="row no-gutters">
								<button className="partners-feedback-button no-style" onClick={positiveFeedback}><i className="fas fa-thumbs-up"></i></button>

								<button className="partners-feedback-button no-style ml-auto" onClick={negativeFeedback}><i className="fas fa-thumbs-down"></i></button>
							</div>
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

	const [partnerImageLoadedState, setPartnerImageLoadedState] = useState(false)
	useEffect(() => {
		console.log(partner)

		const buffer = new Image();
		buffer.onload = () => setPartnerImageLoadedState(true)
		buffer.src = partner.image;
	}, [partner])

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

					<div className="partner-image-wrapper">
						<img className="partner-image" src={partner.image} alt="" />
						<img src={placeholder} alt="" className="partner-image__placeholder" style={{
							opacity: partnerImageLoadedState ? 0 : 1
						}} />
					</div>
					{modal}
					{modalYes}
					{modalNo}
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
