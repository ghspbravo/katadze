import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useStore, useActions } from 'easy-peasy';
import parse from 'html-react-parser'
import activatedPartner from '../../components/activatedPartner/activatedPartner';

import placeholder from './placeholder.svg'

import Portal from '../../components/modal/modalTest'
import { useFormState } from 'react-use-form-state';
import './partnersSingle.scss'

export default function partnersSingle(router) {

	const isLoading = useStore(store => store.partners.isLoadingSingle)

	const [partner, setPartner] = useState({})

	const getSinglePartner = useActions(actions => actions.partners.getSinglePartner)

	const activateCoupon = useActions(actions => actions.partners.activateCoupon)
	const getCouponsAuth = useActions(actions => actions.partners.getCouponsAuth)

	const complain = useActions(actions => actions.tickets.partner)

	const submitHandler = async (e) => {
		e.preventDefault()
		const result = await complain({
			couponId: currentPartner,
			success: 0,
			complain: formState.values.complain
		})

		setFeedbackSended(result)
	}

	const positiveFeedback = useCallback((e) => {
		setFeedbackStatus(true)
	})

	const negativeFeedback = useCallback((e) => {
		setFeedbackStatus(false)
	})
	const [feedbackOpen, setFeedbackOpen] = useState(false)
	const [feedbackStatus, setFeedbackStatus] = useState(undefined)
	const [feedbackSended, setFeedbackSended] = useState(false)
	const [currentPartner, setCurrentPartner] = useState(false)

	const [formState, { textarea }] = useFormState();

	const handleActivateCoupon = useCallback(id => {
		activateCoupon(id).then(isSuccess => {
			setCurrentPartner(id)
			setFeedbackOpen(isSuccess)
			setFeedbackStatus(undefined)
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

		const buffer = new Image();
		buffer.onload = () => setPartnerImageLoadedState(true)
		buffer.src = partner.image;
	}, [partner])

	useEffect(() => {
		document.title = `KATADZE.FRIENDS | ${partner && partner.title ? partner.title : ''}`
	}, [partner])
	return (
		<main>
			<Portal isOpen={feedbackOpen} id='modals-root' closeModal={() => setFeedbackOpen(false)}>
			<div className="col-lg-6 col-sm-8 col-12 px-0 mx-auto">
				<h4 className="text-center">Активировано</h4>
				{feedbackStatus === true
					? <div>
						<i className="partners-feedback-icon fas fa-check-circle"></i>
						<h5>Ура!</h5>
						<p>Мы рады создавать возможности для тебя</p>
					</div>
					: feedbackStatus === false
						? <div>
							<i className="partners-feedback-icon fas fa-times-circle"></i>
							<h5>Сожалеем :(</h5>
							{feedbackSended
								? <p>Благодарим за отзыв! В ближайшее время свяжемся с парнером и уточним детали</p>
								: <form onSubmit={submitHandler}>
									<div className="form-group">
										<label htmlFor="complain">Напиши нам в чем причина</label>
										<textarea {...textarea('complain')} name="complain" id="complain" cols="30" rows="4"></textarea>
										{!formState.validity.complain &&
											<div className="form-error col-12 px-0">{formState.errors.complain}</div>}
									</div>
									<button>Отправить</button>
								</form>}
						</div>
						: null
				}
				{feedbackStatus === undefined
					? <div>
						<p>Получил ли ты скидку?</p>

						<div className="row no-gutters">
							<button className="partners-feedback-button no-style" onClick={positiveFeedback}><i className="fas fa-thumbs-up"></i></button>

							<button className="partners-feedback-button no-style ml-auto" onClick={negativeFeedback}><i className="fas fa-thumbs-down"></i></button>
						</div>
					</div>
					: null}
			</div>
		</Portal>
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
