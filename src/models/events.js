import { action, thunk } from 'easy-peasy'
import server from './constants'

export const events = {
	camp: [],

	isLoading: false,

	getCamp: thunk(async (actions, payload) => {
		actions.setLoading(true)
		await fetch(server + 'event/3/', {
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
		}).then(response => response.json())
			.then(data => {

				actions.setCamp(data.tariffs.map(event => {
					event.price = event.price.split('.')[0]
					event.parts = event.parts.map(part => {
						part.price = part.price.split('.')[0]
						return part
					})

					return event
				}))

				actions.setLoading(false)
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка получения данных о мероприятии (CAMP)')
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

	setCamp: action((state, payload) => {
		// payload.tariffs.forEach(tariff => state.camp.push(tariff))
		state.camp = payload
	}),

	setLoading: action((state, payload) => {
		state.isLoading = payload
	}),
}