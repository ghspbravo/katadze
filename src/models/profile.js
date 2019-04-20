import { action, thunk } from 'easy-peasy'
import server from './constants'

export const profile = {
	id: null,

	name: '',
	surname: '',
	thumbnail: '',
	photo: '',

	email: '',
	phone: '',
	gender: 0,
	date_birth: '',
	residence: '',

	activated: false,

	isLoading: false,
	errors: '',

	getUserInfo: thunk(async (actions, payload, { getState }) => {
		if (payload || getState().id) {
			actions.clearErrors()
			actions.setLoading(true)
			await fetch(server + `user/${payload || getState().id}`, {
				method: 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
			}).then(response => {
				if (!response.ok) {
					throw response.status
				}
				return response
			})
				.then(response => response.json())
				.then(data => {
					actions.setUserInfo(data)

					actions.setLoading(false)
				})
				.catch((code) => {
					switch (code) {
						case 400:
							alert('Ошибка получения данных пользователя')
							break;
						case 500:
							alert('Сервер не отвечает')
							break;

						default:
							break;
					}

					actions.setLoading(false)
				})
			}
	}),

	setUserInfo: action((state, payload) => {
		state.id = payload.id
		state.name = payload.first_name
		state.surname = payload.last_name
		state.photo = payload.avatar
		state.thumbnail = payload.thumb
		state.activated = !payload.is_suspended
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

	setLoading: action((state, payload) => {
		state.isLoading = payload
	}),

	logout: action((state, payload) => {
		state.id = null
		state.name = ''
		state.surname = ''
		state.thumbnail = ''
		state.photo = ''
		state.email = ''
		state.phone = ''
		state.gender = 0
		state.date_birth = ''
		state.residence = ''
		state.activated = false
	}),
}