import React, { useEffect, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import cardPartner from '../../components/card/cardPartner';
import { useStore, useActions } from 'easy-peasy';

import useTitle from 'react-use/lib/useTitle';
import useModal from '../../hooks/useModal';

import placeholder from './placeholder.svg'

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

	const [modal, openModal] = useModal()
	const [modalYes, openYesModal] = useModal()
	const [modalNo, openNoModal] = useModal()

	const activateCoupon = useActions(actions => actions.partners.activateCoupon)

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
	return isLoading
		? (
			<p>loading...</p>
		)
		: (
			<div>
				<div className="mb-3">
					<Link className="hide" to='/partners/'><i className="fas fa-angle-double-left"></i> Вернуться к выбору категорий</Link>
				</div>
				<h1 className="title_page text-center">{partnersCategories[partnerId] && partnersCategories[partnerId].title}</h1>
				{partners[partnerId] && partners[partnerId].length
					? <div className="row justify-content-center">
						{modal}
						{modalYes}
						{modalNo}
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
			</div>
		)
}
