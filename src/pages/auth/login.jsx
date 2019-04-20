import React, { useCallback } from 'react'
import { useFormState } from 'react-use-form-state';
import { useStore, useActions } from 'easy-peasy';
import { Redirect, Link } from 'react-router-dom'

import {vkAuthApp} from '../../models/constants'
import badgeExperimental from '../../components/badges/badgeExperimental';

export default function login() {

	const errors = useStore(state => state.auth.errors)

	const [formState, { text, password }] = useFormState();

	const isLoggedIn = useStore(state => state.auth.isLoggedIn)
	const isLoading = useStore(state => state.auth.isLoading)

  const getUserInfo = useActions(actions => actions.profile.getUserInfo)
  const getStatus = useActions(actions => actions.membership.getStatus)

	const login = useActions(actions => actions.auth.login)
	const submitHandler = useCallback(e => {
		e.preventDefault()

		login({
			username: formState.values.username,
			password: formState.values.password,
		}).then(isSuccess => {
			isSuccess && getUserInfo().then(() => {
        getStatus()
			})
		})
	})
	return (
		<main>
			{isLoggedIn && <Redirect to='/profile' />}
			<section className="sbox">
				<div className="container">
					<div className="col-lg-5 col-md-10 px-0 mx-auto">
						<h1 className="title_page">
							Вход
						</h1>

						<div className="mb-4">
							<p>Войдите на сайт для доступа к партнерской программе, оплаты мероприятий</p>
						</div>

						<form onSubmit={submitHandler} method="post" className="mb-3">
							<div className="form-group">
								<label htmlFor="identifier">Логин или почта</label>
								<input className="col-12 px-0" id="identifier" required
									{...text('username')} />
								{!formState.validity.username &&
									<div className="form-error">{formState.errors.username}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="password">Пароль</label>
								<input className="col-12 px-0" id="password" required minLength="8"
									{...password('password')} />
								{!formState.validity.password &&
									<div className="form-error">{formState.errors.password}</div>}
							</div>

							{errors && <div className="form-error">
								{errors}
							</div>}

							<div className="row no-gutters">
								<button className={`ml-auto ${isLoading ? 'disabled' : ''}`}>
									{isLoading ? "..." : "Войти"}</button>
							</div>
						</form>

						<p>Нет аккаунта? <Link to='/register'>Создать</Link></p>

						<div className="row no-gutters mt-4">
							<a href={vkAuthApp} className="button mx-auto">
							{badgeExperimental()}
							Войти через ВК</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
