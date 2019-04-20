import { action, thunk } from 'easy-peasy'
import server from './constants'

const statusList = [
	'Заказ зарегистрирован в банке, но не оплачен',
	'Сумма удержана',
	'Заказ полностью авторизован',
	'Авторизация отменена',
	'Проведена операция возврата',
	'Авторизация инициирована через сервер банка-эмитента',
	'Авторизация отклонена'
]

export const orders = {
	orderStatus: undefined,

	isLoading: false,
	errors: '',

	orderMembership: thunk(async (actions, payload, { getStoreState, dispatch }) => {
		actions.setLoading(true)
		await dispatch.auth.refreshTokens()
		await fetch(server + 'order/subscription/', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${getStoreState().auth.access}`
			},
			body: JSON.stringify({
				subscription_type: payload
			})
		}).then(response => {
			if (!response.ok) {
				throw response.status
			}
			return response
		})
			.then(response => response.json())
			.then(data => {
				window.location.href = data.form_url

				actions.setLoading(false)
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка формирования заказа')
						break;
					case 500:
						alert('Сервер не отвечает')
						break;

					default:
						break;
				}

				actions.setLoading(false)
			})
	}),

	orderEvent: thunk(async (actions, payload, { getStoreState, dispatch }) => {
		actions.setLoading(true)
		await dispatch.auth.refreshTokens()
		await fetch(server + 'order/event/', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${getStoreState().auth.access}`
			},
			body: JSON.stringify({
				event_tariff: payload.id,
				event_tariff_part: payload.idPart
			})
		}).then(response => {
			if (!response.ok) {
				throw response.status
			}
			return response
		})
			.then(response => response.json())
			.then(data => {
				window.location.href = data.form_url

				actions.setLoading(false)
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка формирования заказа')
						break;
					case 500:
						alert('Сервер не отвечает')
						break;

					default:
						break;
				}

				actions.setLoading(false)
			})
	}),

	submit: thunk(async (actions, payload, { getStoreState, dispatch }) => {
		actions.setLoading(true)
		await dispatch.auth.refreshTokens()
		await fetch(server + `order/${payload}`, {
			method: 'patch',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${getStoreState().auth.access}`
			},
		}).then(response => {
			if (!response.ok) {
				throw response.status
			}
			return response
		})
			.then(response => response.json())
			.then(data => {
				actions.setStatus(data.status)
				actions.setLoading(false)
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка получения данных о заказе')
						break;
					case 500:
						alert('Сервер не отвечает')
						break;

					default:
						break;
				}

				actions.setLoading(false)
			})
	}),

	setStatus: action((state, payload) => {
		state.orderStatus = statusList[payload]
	}),

	setErrors: action((state, payload) => {
		state.errors = payload.toString()
	}),

	clearErrors: action((state) => {
		state.errors = ''
	}),

	setLoading: action((state, payload) => {
		state.isLoading = payload
	}),
}