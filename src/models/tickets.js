import { thunk } from 'easy-peasy'
import server from './constants'

export const tickets = {
	contact: thunk(async (actions, payload) => {
		const response = await fetch(server + 'ticket/faq/', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: payload.question,
				name: payload.name,
				email: payload.email
			})
		}).then(response => {
			if (!response.ok) {
				throw response.status
			}
			return response
		}).then(response => response.json())
			.then(data => {
				return {
					success: true,
					response: data
				}
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка отправки')
						break;
					case 500:
						alert('Сервер не отвечает')
						break;

					default:
						break;
				}
				return {
					success: false,
					response: 'Ошибка отправки'
				}
			})
			return response
	}),
	
	partner: thunk(async (actions, payload, {getStoreState, dispatch}) => {
		getStoreState().auth.refresh && await dispatch.auth.refreshTokens()
		const response = await fetch(server + 'ticket/coupon/', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${getStoreState().auth.access}`
			},
			body: JSON.stringify({
				coupon_type: payload.couponId,
				variant: payload.success,
				reason: payload.complain
			})
		}).then(response => {
			if (!response.ok) {
				throw response.status
			}
			return response
		}).then(response => response.json())
			.then(data => {
				return {
					success: true,
					response: data
				}
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка отправки')
						break;
					case 500:
						alert('Сервер не отвечает')
						break;

					default:
						break;
				}
				return {
					success: false,
					response: 'Ошибка отправки'
				}
			})
			return response
	}),
}