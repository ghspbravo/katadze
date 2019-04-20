import React, {useEffect, useState} from 'react'
import { useStore, useActions } from 'easy-peasy'
import { Redirect } from 'react-router-dom'

export default function social(router) {
	const [isSuccess, setSuccess] = useState()
	const [shouldRedirect, setRedirect] = useState(false)

	const errors = useStore(state => state.socials.errors)
	const isLoading = useStore(state => state.socials.isLoading)
	
	const isLoggedIn = useStore(state => state.auth.isLoggedIn)

	const authVk = useActions(action => action.socials.authVk)
	
  const getUserInfo = useActions(actions => actions.profile.getUserInfo)
  const getStatus = useActions(actions => actions.membership.getStatus)

	useEffect(() => {
		let code = router.location.search
		code = code.replace('?code=', '')

		authVk(code).then(isSuccess => {
			setSuccess(isSuccess)
			isSuccess && getUserInfo().then(() => {
        getStatus()
			})
		})
	}, [])

	useEffect(() => {
		isLoggedIn &&
			setTimeout(() => setRedirect(true), 3000)
	}, [isLoggedIn])
	return (
		<main>
			{shouldRedirect && <Redirect to='/profile' />}
			<section className="sbox">
				<div className="container">
					<h1 className="title_page">Активация аккаунта</h1>

					{isLoading &&
						<p>На ваших глазах <b>творится</b> магия авторизации через соц. сеть...</p>
					}

					{isSuccess &&
						<p>На ваших глазах <b>произошла</b> магия авторизации через соц. сеть...</p>}

					{errors &&
						<p>{errors}</p>}
				</div>
			</section>
		</main>
	)
}
