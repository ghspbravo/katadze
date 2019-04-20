import React, {useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom'
import { useStore, useActions } from 'easy-peasy';

import cardMembership from '../../components/card/cardMembership';

export default function membership() {
	const activateTariff = useActions(actions => actions.orders.orderMembership)
	const isLoading = useStore(store => store.orders.isLoading)

	const getTariffs = useActions(actions => actions.membership.getTariffs)
	const tariffs = useStore(store => store.membership.tariffs)

	const isActivated = useStore(store => store.profile.activated)

	const purchaseHandle = useCallback(id => {
		activateTariff(id)
	})

	useEffect(() => {
		isActivated && !tariffs.length && getTariffs()
	}, [])

	return (
		<div>
			<div className="mb-1">
				<Link className="hide" to="/profile"><i className="fas fa-angle-double-left mr-1"></i>Назад</Link>
			</div>
			{isActivated 
			?	<div className="row">
				{tariffs.length && tariffs.map((tariff, index) => <div key={index} className="col-sm-6 col-12 mb-3">
					{cardMembership(
						tariff.id,
						tariff.name,
						tariff.price,
						tariff.description,
						tariff.img,
						purchaseHandle,
						isLoading
					)}
				</div>)}
			</div>
			: <p>Чтобы использовать партнерскую программу, необходимо активировать аккаунт</p>}
		</div>
	)
}
