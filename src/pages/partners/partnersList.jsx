import React, { useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'

import cardPartner from '../../components/card/cardPartner';
import { useStore, useActions } from 'easy-peasy';

import useTitle from 'react-use/lib/useTitle';
import useModal from '../../hooks/useModal';

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

	const activateCoupon = useActions(actions => actions.partners.activateCoupon)

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

	useEffect(() => {
		!Object.keys(partnersCategories).length && getPartners()
		!Object.keys(coupons).length && getCouponsAuth()
	}, [])

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
						{partners[partnerId] &&
							partners[partnerId].map((partner, index) => <div key={index} className="col-md-6 col-12 mb-3">
								{cardPartner(
									partner.id,
									partner.img,
									partner.title,
									partner.description,
									coupons[partner.id],
									isMember,
									handleActivateCoupon,
									SubsciptionLoading
								)}

							</div>)}
					</div>
					: <p>В данной категории нет партнеров</p>}
			</div>
		)
}
