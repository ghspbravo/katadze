import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useStore, useActions } from 'easy-peasy';

export default function acquiring(router) {
	const submitOrder = useActions(actions => actions.orders.submit)
	const isLoading = useStore(store => store.orders.isLoading)

	const orderStatus = useStore(store => store.orders.orderStatus)

	useEffect(() => {
		let uuid = router.location.search
		uuid = uuid.replace('?orderId=', '')
		uuid = uuid.replace('&lang=ru', '')

		submitOrder(uuid)
	}, [])
	return (
		<main>
			<div className="container pt-5">
				<h1 className="title_page">Ваш заказ {isLoading ? 'обрабатывается...' : 'обработан!'}</h1>
				<p>Благодарим за использование наших услуг!</p>
				{orderStatus && 
					<p>{orderStatus}</p>}
				<Link to='/profile' className="button">Вернуться в личный кабинет</Link>
			</div>
		</main>
	)
}
