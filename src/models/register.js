import { action, thunk } from 'easy-peasy'
import server from './constants'

export const register = {
	isEmailUniq: true,
	isPhoneUniq: true,

	isLoading: false,
	errors: '',
	fieldErrors: {},

	isActivated: false,

	register: thunk(async (actions, payload) => {
		actions.clearErrors()
		actions.setLoading(true)
		const success = await fetch(server + 'user/', {
			method: 'post',
			body: JSON.stringify({
				email: payload.email,
				password: payload.password,
				date_birth: payload.date_birth,
				gender: payload.gender,
				last_name: payload.last_name,
				first_name: payload.first_name,
				username: payload.username,
				residence: payload.residence,
				phones: [{ number: payload.phone }],
				avatar: payload.avatar
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(response => {
			if (!response.ok) {
				response.json().then(actions.setFieldErrors)
				throw response.status
			}
			return response
		})
			.then(response => response.json())
			.then(data => {

				// data.id
				// data.token, data.refresh
				// actions.sendActivate({
				// 	token: data.token
				// })
				actions.setLoading(false)
				return true
			})
			.catch((code) => {
				switch (code) {
					case 400:
						actions.setErrors('Ошибки в процессе регистрации. Проверьте корректность введенных данных')
						break;
					case 500:
						alert('Сервер не отвечает')
						break;

					default:
						break;
				}

				actions.setLoading(false)
				return false
			})
		return success
	}),

	sendActivate: thunk(async (actions, payload, { getStoreState, dispatch }) => {
		await dispatch.auth.refreshTokens()
		await fetch(server + 'activate/', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Authorization': `Bearer ${getStoreState().auth.access}`
			},
		}).then(response => {
			if (!response.ok) {
				throw response.status
			}
			return response
		})
			.catch((code) => {
				switch (code) {
					case 401:
						alert('Ошибка отправки письма с активацией')
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

	activate: thunk(async (actions, payload) => {
		actions.clearErrors()
		actions.setLoading(true)
		await fetch(server + 'activate-confirm/', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				token: payload.token,
				uidb64: payload.uidb64
			}),
		}).then(response => {
			if (!response.ok) {
				throw response.status
			}
			actions.setLoading(false)
			actions.setActivated()
			return response
		})
			.catch((code) => {
				switch (code) {
					case 400:
						actions.setErrors('Ошибка во время активации')
						break;

					default:
						break;
				}
				actions.setLoading(false)
			})
	}),

	checkEmailUniq: thunk(async (actions, payload) => {
		const isUniq = true
		// await fetch(server + 'users/email-exists/', {
		// 	method: 'get',
		// 	body: JSON.stringify({
		// 		email: payload,
		// 	}),
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// }).then(response => {
		// 	if (!response.ok) throw response.status
		// 	return response
		// })
		// .then(response => response.json())
		// .then(data => {
		// 	return data.exists
		// })
		// .catch((error) => {
		// 	console.error(error);
		// })

		actions.setEmailUniq(isUniq)
	}),

	checkPhoneUniq: thunk(async (actions, payload) => {
		const isUniq = true
		// await fetch(server + 'users/phone-number-exists/', {
		// 	method: 'get',
		// 	body: JSON.stringify({
		// 		email: payload,
		// 	}),
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// }).then(response => {
		// 	if (!response.ok) throw response.status
		// 	return response
		// })
		// .then(response => response.json())
		// .then(data => {
		// 	return data.exists
		// })
		// .catch((error) => {
		// 	console.error(error);
		// })

		actions.setPhoneUniq(isUniq)
	}),

	setLoading: action((state, payload) => {
		state.isLoading = payload
	}),

	setActivated: action((state, payload) => {
		state.isActivated = true
	}),

	setErrors: action((state, payload) => {
		state.errors = payload.toString()
	}),

	setFieldErrors: action((state, payload) => {
		state.fieldErrors = payload
	}),

	clearErrors: action((state) => {
		state.errors = ''
		state.fieldErrors = {}
	}),

	setPhoneUniq: action((state, payload) => {
		state.isPhoneUniq = payload
	}),

	setEmailUniq: action((state, payload) => {
		state.isEmailUniq = payload
	}),
}