import { action, thunk } from 'easy-peasy'
import server from './constants'

export const auth = {
	access: '',
	refresh: '',

	isLoggedIn: false,

	isLoading: false,
	errors: '',

	login: thunk(async (actions, payload, {dispatch}) => {
		actions.clearErrors()
		actions.setLoading(true)
		const isSuccess = await fetch(server + 'auth/token/obtain/', {
			method: 'post',
			body: JSON.stringify({
				identifier: payload.username,
				password: payload.password,
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(response => {
			if (!response.ok) throw response.status
			return response
		})
		.then(response => response.json())
		.then(data => {
			actions.setTokens({
				access: data.access,
				refresh: data.refresh
			})

			actions.setUserId(data.id)
			dispatch.profile.getUserInfo(data.id)
			
			actions.setLoggedIn(true)
			actions.setLoading(false)
			return true
		})
		.catch((error) => {
			switch (error) {
				case 400:
					actions.setErrors('Неверные имя пользователя/пароль. Повторите ввод')
					break;
			
				default:
					break;
			}

			actions.setLoading(false)
			return false
		})
		return isSuccess
	}),

	refreshTokens: thunk(async (actions, payload, {getState}) => {
		actions.setLoading(true)
		await fetch(server + 'auth/token/refresh/', {
			method: 'post',
			body: JSON.stringify({
				refresh: getState().refresh,
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}).then(response => {
			if (!response.ok) throw response.status
			return response
		})
		.then(response => response.json())
		.then(data => {
			actions.setTokens({
				access: data.access,
				refresh: false
			})
			actions.setLoggedIn(true)
			actions.setLoading(false)
		})
		.catch((error) => {
			console.error(error);
			
			actions.logout()
			actions.setLoading(false)
		})
	}),

	setLoading: action((state, payload) => {
		state.isLoading = payload
	}),

	setErrors: action((state, payload) => {
		state.errors = payload.toString()
	}),

	clearErrors: action((state) => {
		state.errors = ''
	}),

	setLoggedIn: action((state, payload) => {
		state.isLoggedIn = payload
	}),

	setTokens: action((state, payload) => {
		state.access = payload.access
		if (payload.refresh) {
			state.refresh = payload.refresh
			localStorage.setItem('refresh', payload.refresh)
		}
	}),

	setUserId: action((state, payload) => {
		localStorage.setItem('user', payload)
	}),

	logout: action((state) => {
		state.access = ''
		state.refresh = ''
		state.isLoggedIn = false

		localStorage.setItem('refresh', '')
		localStorage.setItem('user', '')
	}),
}