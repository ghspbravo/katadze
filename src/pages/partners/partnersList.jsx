import React, {useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom'

import cardPartner from '../../components/card/cardPartner';
import { useStore, useActions } from 'easy-peasy';

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
	const handleActivateCoupon = useCallback(id => {
		activateCoupon(id).then(isSuccess => {
			isSuccess && getCouponsAuth()
		})
	})

	useEffect(() => {
		!Object.keys(partnersCategories).length && getPartners()
		!Object.keys(coupons).length && getCouponsAuth()
	}, [])

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
