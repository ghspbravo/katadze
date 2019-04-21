import React, { useEffect, useState } from 'react'
import { useStore, useActions } from 'easy-peasy'

import useTitle from 'react-use/lib/useTitle';

export default function activate(router) {

	const errors = useStore(state => state.register.errors)
	const isLoading = useStore(state => state.register.isLoading)
	
	const isActivated = useStore(state => state.register.isActivated)

	const activate = useActions(actions => actions.register.activate)

	const [isSuccess, setSuccess] = useState(false)

	useEffect(() => {
		activate({
			uidb64: router.match.params.uidb64,
			token: router.match.params.token,
		})
	}, [])

	useEffect(() => {
		if (isActivated) {
			setSuccess(true)
			setTimeout(() => router.history.push('/profile'), 3000)
		}
	}, [isActivated])

	useTitle('KATADZE | Активация аккаунта')
	return (
		<main>
			<section className="sbox">
				<div className="container">
					<h1 className="title_page">Активация аккаунта</h1>

					{isLoading &&
						<p>На ваших глазах <b>творится</b> магия потверждения почтового адреса...</p>
					}

					{isSuccess &&
						<p>На ваших глазах <b>произошла</b> магия потверждения почтового адреса...</p>}

					{errors &&
						<p>{errors}</p>}
				</div>
			</section>
		</main>
	)
}
