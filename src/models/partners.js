import { action, thunk } from 'easy-peasy'
import server from './constants'

export const partners = {

	partnersCategories: {},
	partners: {},
	coupons: {},
	partnerCities: new Set(),
	partnerList: [],

	isSubsciptionLoading: false,
	isLoading: false,
	isLoadingSingle: false,
	errors: '',

	getPartners: thunk(async (actions, payload) => {
		actions.setLoading(true)
		await fetch(server + 'partner_categories/', {
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
				actions.setPartners(data.results)

				actions.setLoading(false)
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка получения данных о партнерах')
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

	getSinglePartner: thunk(async (actions, payload) => {
		actions.setLoadingSingle(true)
		const partner = await fetch(server + `partner/${payload}`, {
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
				actions.setLoadingSingle(false)
				return {
					id: data.id,
					title: data.title,
					image: data.img,
					description: data.content
				}
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка получения данных о партнерах')
						break;
					case 500:
						alert('Сервер не отвечает')
						break;

					default:
						break;
				}

				actions.setLoadingSingle(false)
				return false
			})
		return partner
	}),

	getCouponsAuth: thunk(async (actions, payload, { getStoreState, dispatch }) => {
		getStoreState().auth.refresh && await dispatch.auth.refreshTokens()
		await fetch(server + 'coupons/', {
			method: 'get',
			headers: getStoreState().auth.refresh
				? {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${getStoreState().auth.access}`
				}
				: {
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
				actions.setCoupons(data)
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка получения данных о купонах (auth)')
						break;
					case 500:
						alert('Сервер не отвечает')
						break;

					default:
						break;
				}
			})
	}),

	activateCoupon: thunk(async (actions, payload, { getStoreState }) => {
		actions.setSubsciptionLoading(true)
		const isSuccess = await fetch(server + 'user/coupon/', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${getStoreState().auth.access}`
			},
			body: JSON.stringify({
				type: payload
			})
		}).then(response => {
			if (!response.ok) {
				throw response.status
			}
			return response
		}).then(response => response.json())
			.then(data => {
				actions.setActivatedCoupon(data)
				actions.setSubsciptionLoading(false)
				return true
			})
			.catch((code) => {
				switch (code) {
					case 400:
						alert('Ошибка активации купона')
						break;
					case 500:
						alert('Сервер не отвечает')
						break;

					default:
						break;
				}
				actions.setSubsciptionLoading(false)
				return false
			})
		return isSuccess
	}),

	setActivatedCoupon: action((state, payload) => {
		const couponId = payload.type
		const partnersDateList = payload.expired_at.match(/\d+-\d+-\d+/)[0].split('-')
		const partnersExpireDate = `${partnersDateList[2]}.${partnersDateList[1]}.${partnersDateList[0]}`
		state.coupons[couponId].expired = partnersExpireDate
	}),

	setCoupons: action((state, payload) => {
		payload.forEach(partnersCoupon => {
			const partnersId = partnersCoupon.partner
			let partnersDateList = ''
			if (partnersCoupon.expired_at) partnersDateList = partnersCoupon.expired_at.match(/\d+-\d+-\d+/)[0].split('-')

			state.coupons[partnersId] = {
				discount: partnersCoupon.discount,
				expired: partnersCoupon.expired_at && `${partnersDateList[2]}.${partnersDateList[1]}.${partnersDateList[0]}`
			}
		})
	}),

	setPartners: action((state, payload) => {
		payload.forEach(category => {
			partners.partnersCategories[category.id] = {
				title: category.name,
				count: category.partners.length
			}
			partners.partners[category.id] = category.partners

			category.partners.forEach(partner => {
				partner &&
					state.partnerList.push(partner)

				partner.city_name
					&& state.partnerCities.add(partner.city_name)
			})
		})
	}),

	setErrors: action((state, payload) => {
		state.errors = payload.toString()
	}),

	clearErrors: action((state) => {
		state.errors = ''
	}),

	setSubsciptionLoading: action((state, payload) => {
		state.isSubsciptionLoading = payload
	}),

	setLoading: action((state, payload) => {
		state.isLoading = payload
	}),

	setLoadingSingle: action((state, payload) => {
		state.isLoadingSingle = payload
	}),

	logout: action((state, payload) => {
		Object.values(state.coupons).forEach(coupon => coupon.expired = null)
	}),
}