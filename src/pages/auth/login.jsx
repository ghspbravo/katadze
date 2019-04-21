import React, { useCallback } from 'react'
import { useFormState } from 'react-use-form-state';
import { useStore, useActions } from 'easy-peasy';
import { Redirect, Link } from 'react-router-dom'

import {vkAuthApp, fbAuthApp} from '../../models/constants'
import badgeExperimental from '../../components/badges/badgeExperimental';

import useTitle from 'react-use/lib/useTitle';

import './auth.scss'

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

	useTitle('KATADZE | Вход')
	return (
		<main>
			{isLoggedIn && <Redirect to='/profile' />}
			<section className="sbox">
				<div className="container">
					<div className="col-lg-5 col-md-10 mx-auto auth-wrapper">
						<h1 className="auth__title title_page">
							Вход
						</h1>

						<div className="mb-4 auth__message">
							<p>Войдите на сайт для доступа к партнерской программе и оплаты мероприятий</p>
						</div>

						<form onSubmit={submitHandler} method="post" className="mb-3 auth__form">
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
								<button className={`ml-auto auth-button ${isLoading ? 'disabled' : ''}`}>
									{isLoading ? "..." : "Войти"}</button>
							</div>
						</form>

						<p>Нет аккаунта? <Link to='/register'>Создать</Link></p>

						<div className="row no-gutters mt-4">
							<a href={vkAuthApp} className="button mx-auto auth-social auth-social_vk">
							Авторизация через ВК</a>
						</div>

						<div className="row no-gutters mt-2">
							<a href={fbAuthApp} className="button mx-auto auth-social auth-social_fb">
							{badgeExperimental()}
							Войти через Facebook</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
