import { action, thunk } from 'easy-peasy'
import server from './constants'

export const authSocials = {
	access: '',
	refresh: '',

	isLoggedIn: false,

	isLoading: false,
	errors: '',

	authVk: thunk(async (actions, payload, {dispatch}) => {
		actions.clearErrors()
		actions.setLoading(true)
		const isSuccess = await fetch(server + 'auth/social/', {
			method: 'post',
			body: JSON.stringify({
				provider: 'vk-oauth2', 
				code: payload
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
			dispatch.auth.setTokens({
				access: data.access,
				refresh: data.refresh
			})

			dispatch.auth.setUserId(data.id)
			dispatch.profile.getUserInfo(data.id)
			
			dispatch.auth.setLoggedIn(true)
			actions.setLoading(false)
			return true
		})
		.catch((error) => {
			switch (error) {
				case 400:
					actions.setErrors('Ошибка авторизации через ВК')
					break;
			
				default:
					break;
			}

			actions.setLoading(false)
			return false
		})
		return isSuccess
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
}