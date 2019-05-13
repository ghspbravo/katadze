import React, { useEffect, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import cardPartner from '../../components/card/cardPartner';
import { useStore, useActions } from 'easy-peasy';

import useTitle from 'react-use/lib/useTitle';

import placeholder from './placeholder.svg'
import Portal from '../../components/modal/modalTest'
import { useFormState } from 'react-use-form-state';

export default function partnersList(router) {

	const isLoading = useStore(store => store.partners.isLoading)
	const SubsciptionLoading = useStore(store => store.partners.isSubsciptionLoading)

	const isMember = useStore(store => store.membership.expiredAt)

	const getCouponsAuth = useActions(actions => actions.partners.getCouponsAuth)
	const coupons = useStore(store => store.partners.coupons)

	const getPartners = useActions(actions => actions.partners.getPartners)
	const partners = useStore(store => store.partners.partners)
	const partnersCategories = useStore(store => store.partners.partnersCategories)

	const partnerId = router.match.params.id

	const activateCoupon = useActions(actions => actions.partners.activateCoupon)

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

	useEffect(() => {
		!Object.keys(partnersCategories).length && getPartners()
		!Object.keys(coupons).length && getCouponsAuth()
	}, [])

	const [partnersState, setPartnersState] = useState([])
	useEffect(() => {

		if (!Object.values(partners).length) return
		setPartnersState(prevState => {

			partners[partnerId].forEach((item, index) => {

				prevState.push(false)

				const buffer = new Image();
				buffer.onload = () => setPartnersState(prevState => {
					prevState[index] = true
					return { ...prevState }
				})
				buffer.src = item.img;
			})

			return prevState
		})

	}, [isLoading])

	useTitle('KATADZE.FRIENDS')
	return (<div>
		<div className="mb-3">
			<Link className="hide" to='/partners/'><i className="fas fa-angle-double-left"></i> Вернуться к выбору категорий</Link>
		</div>
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
			? <p>loading...</p>
			: <div>
				<h1 className="title_page text-center">{partnersCategories[partnerId] && partnersCategories[partnerId].title}</h1>
				{partners[partnerId] && partners[partnerId].length
					? <div className="row justify-content-center">
						{partners[partnerId] &&
							partners[partnerId].map((partner, index) => <div key={index} className="col-md-6 col-12 mb-3">
								{cardPartner(
									partner.id,
									{ original: partner.img, placeholder, originalReady: partnersState[index] },
									partner.title,
									partner.description,
									coupons[partner.id],
									isMember,
									handleActivateCoupon,
									SubsciptionLoading,
								)}
							</div>)}
					</div>
					: <p>В данной категории нет партнеров</p>}
			</div>}
	</div>)
}
