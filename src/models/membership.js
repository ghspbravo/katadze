import { action, thunk } from 'easy-peasy'
import server from './constants'

export const membership = {
	isActive: false,
	expiredAt: false,

	tariffs: [],

	isLoading: false,
	errors: '',

	getStatus: thunk(async (actions, payload, { getStoreState, dispatch }) => {
		actions.setLoading(true)
		await dispatch.auth.refreshTokens()
		await fetch(server + 'subscription/', {
			method: 'get',
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
				actions.setStatus(data)

				actions.setLoading(false)
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка получения данных о подписке')
						break;
					case 404:
						actions.setStatus({
							is_active: false,
							expired_at: false,
						})
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

	getTariffs: thunk(async (actions, payload) => {
		actions.setLoading(true)
		await fetch(server + 'subscription_types/', {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		}).then(response => {
			if (!response.ok) {
				throw response.status
			}
			return response
		})
			.then(response => response.json())
			.then(data => {
				actions.setTariffs(data.map(tariff => {
					tariff.price = tariff.price.split('.')[0]
					return tariff
				}))

				actions.setLoading(false)
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка получения данных о тарифах')
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

	setTariffs: action((state, payload) => {
		state.tariffs = payload
	}),

	setStatus: action((state, payload) => {
		state.isActive = payload.is_active
		if (payload.expired_at) {
			let membershipDateList = payload.expired_at.match(/\d+-\d+-\d+/)[0].split('-')
			state.expiredAt = `${membershipDateList[2]}.${membershipDateList[1]}.${membershipDateList[0]}`
		}
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

	logout: action((state, payload) => {
		state.isActive = false
		state.expiredAt = false
	}),
}