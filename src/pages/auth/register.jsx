import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useFormState } from 'react-use-form-state';
import { useStore, useActions } from 'easy-peasy';
import { Redirect, Link } from 'react-router-dom'

import useTitle from 'react-use/lib/useTitle';
import IMask from 'imask';
import { useDropzone } from 'react-dropzone'

export default function register() {

	const [formState, {
		text,
		password,
		email,
		select,
	}] = useFormState();
	const [photo, setPhoto] = useState()

	const isEmailUniq = useStore(state => state.register.isEmailUniq)
	const checkEmail = useActions(actions => actions.register.checkEmailUniq)

	const isPhonelUniq = useStore(state => state.register.isPhoneUniq)
	const checkPhone = useActions(actions => actions.register.checkPhoneUniq)

	const errors = useStore(state => state.register.errors)
	const fieldErrors = useStore(state => state.register.fieldErrors)

	const isLoading = useStore(state => state.register.isLoading)
	const isLoggedIn = useStore(state => state.auth.isLoggedIn)

	const register = useActions(actions => actions.register.register)
	const login = useActions(actions => actions.auth.login)
	const sendActivate = useActions(actions => actions.register.sendActivate)
	const getUserInfo = useActions(actions => actions.profile.getUserInfo)

	const submitHandler = useCallback(async e => {
		e.preventDefault()

		const date = formState.values.birthdate.split('.')
		const isSuccess = await register({
			email: formState.values.email,
			password: formState.values.password,
			date_birth: `${date[2]}-${date[1]}-${date[0]}`,
			gender: formState.values.gender,
			last_name: formState.values.surname,
			first_name: formState.values.name,
			username: formState.values.username,
			residence: formState.values.city,
			phone: formState.values.phonenumber,
			avatar: photo
		})
		if (isSuccess) {
			await login({
				username: formState.values.username,
				password: formState.values.password,
			})
			await sendActivate()
			await getUserInfo()
		}
	})

	const onDrop = useCallback(acceptedFiles => {
		try {
			const reader = new FileReader();
			reader.onload = () => {
				const fileAsBinaryString = reader.result;
				console.log(fileAsBinaryString)
				setPhoto(fileAsBinaryString)
			};
			reader.onabort = () => console.log('file reading was aborted');
			reader.onerror = () => console.log('file reading has failed');
	
			reader.readAsDataURL(acceptedFiles[0])
		} catch {
			alert('Ошибка считывания файла')
		}

	}, [])
	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ 
		onDrop, 
		multiple: false,
	accept: 'image/*' })

	const dateInput = useRef()
	const phoneInput = useRef()

	useEffect(() => {
		const dateMask = new IMask(dateInput.current, {
			mask: Date,
			blocks: {
				Y: {
					mask: IMask.MaskedRange,
					from: 1950,
					to: new Date().getFullYear() - 18,
				}
			},
		});
		const phoneMask = new IMask(phoneInput.current, {
			mask: '+{7} (000) 000-00-00',
		});
		return () => {
			dateMask.destroy()
			phoneMask.destroy()
		}
	}, [])

	useTitle('KATADZE | Регистрация')
	return (
		<main>
			{isLoggedIn && <Redirect to='/profile' />}
			<section className="sbox">
				<div className="container">
					<div className="col-lg-5 col-md-10 mx-auto auth-wrapper">
						<h1 className="auth__title title_page">Регистрация</h1>

						<div className="auth__message">
							<p>Регистрируйся и получай возможность оплачивать мероприятия и пользоваться партнерской программой!</p>
							<p>Уже зарегистрированы? <Link to='/login'>Войти</Link></p>
						</div>

						<form className="auth__form" onSubmit={submitHandler} method="post">
							<div className="form-group">
								<label htmlFor="username">Имя пользователя</label>
								<input required id="username" className="col-12 px-0" {...text({
									name: 'username',
									// TODO: uniq server validation
									validateOnBlur: true,
								})} />
								{!formState.validity.username &&
									<div className="form-error col-12 px-0">{formState.errors.username}</div>}
								{fieldErrors.username &&
									<div className="form-error col-12 px-0">{fieldErrors.username}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input required id="email" className="col-12 px-0" {...email({
									name: 'email',
									onBlur: (e) => checkEmail(e.target.value),
									validateOnBlur: true,
								})} />
								{!formState.validity.email &&
									<div className="form-error col-12 px-0">{formState.errors.email}</div>}
								{fieldErrors.email &&
									<div className="form-error col-12 px-0">{fieldErrors.email}</div>}
								{!isEmailUniq &&
									<div className="form-error col-12 px-0">Этот адрес занят. Уже зарегистрированы?</div>}
							</div>

							<div className="form-group">
								<label htmlFor="password">Пароль</label>
								<input minLength="8" required id="password" className="col-12 px-0" {...password('password')} />
								{!formState.validity.password &&
									<div className="form-error col-12 px-0">{formState.errors.password}</div>}
								{fieldErrors.password &&
									<div className="form-error col-12 px-0">{fieldErrors.password}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="name">Имя</label>
								<input required id="name" className="col-12 px-0" {...text('name')} />
								{!formState.validity.name &&
									<div className="form-error col-12 px-0">{formState.errors.name}</div>}
								{fieldErrors.first_name &&
									<div className="form-error col-12 px-0">{fieldErrors.first_name}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="surname">Фамилия</label>
								<input required id="surname" className="col-12 px-0" {...text('surname')} />
								{!formState.validity.surname &&
									<div className="form-error col-12 px-0">{formState.errors.surname}</div>}
								{fieldErrors.last_name &&
									<div className="form-error col-12 px-0">{fieldErrors.last_name}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="birthdate">Дата рождения</label>

								<input ref={dateInput} required id="birthdate" className="col-12 px-0" {...text('birthdate')} />
								{!formState.validity.birthdate &&
									<div className="form-error col-12 px-0">{formState.errors.birthdate}</div>}
								{fieldErrors.date_birth &&
									<div className="form-error col-12 px-0">{fieldErrors.date_birth}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="gender">Пол</label>
								<div className="select">
									<select id="gender" className="col-12 px-0" {...select('gender')}>
										<option value="" disabled selected hidden>Пол</option>
										<option value="0">Мужской</option>
										<option value="1">Женский</option>
									</select>
								</div>
								{!formState.validity.gender &&
									<div className="form-error col-12 px-0">{formState.errors.gender}</div>}
								{fieldErrors.gender &&
									<div className="form-error col-12 px-0">{fieldErrors.gender}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="city">Город</label>
								<input required id="city" className="col-12 px-0" {...text('city')} />
								{!formState.validity.city &&
									<div className="form-error col-12 px-0">{formState.errors.city}</div>}
								{fieldErrors.residence &&
									<div className="form-error col-12 px-0">{fieldErrors.residence}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="phonenumber">Номер телефона</label>
								<input placeholder="+7" ref={phoneInput} id="phonenumber" className="col-12 px-0" {...text({
									name: 'phonenumber',
									onBlur: (e) => checkPhone(e.target.value),
									validateOnBlur: true,
								})} />
								{!formState.validity.phonenumber &&
									<div className="form-error col-12 px-0">{formState.errors.phonenumber}</div>}
								{!isPhonelUniq &&
									<div className="form-error col-12 px-0">Этот номер телефона уже используется.</div>}
								{fieldErrors.phones &&
									<div className="form-error col-12 px-0">{fieldErrors.phones[0] || fieldErrors.phones[0].number}</div>}
							</div>

							<div className="form-group">
								<label htmlFor="photo">Ваша фотография</label>

								<img className="photo-preview" src={photo} alt="" />
								<div style={{
									borderColor: isDragAccept ? '#00e676' : isDragActive ? '#2196f3' : isDragReject ? '#ff1744' : ''
								}} className="dropzone" {...getRootProps()}>
									<input {...getInputProps()} />
									{
										isDragActive
											? <p>Перетащите сюда фотографии</p>
											: <p>Перетащите сюда фотографии или нажмите, чтобы выбрать</p>
									}
								</div>
								{fieldErrors.avatar &&
									<div className="form-error col-12 px-0">{fieldErrors.avatar}</div>}
							</div>

							{errors && <div className="form-error">
								{errors}
							</div>}

							<div className="row no-gutters mt-2">
								<button className={`auth-button ml-auto ${isLoading ? 'disabled' : ''}`}>
									{isLoading ? "..." : "Зарегистрироваться"}</button>
							</div>

						</form>
					</div>
				</div>
			</section>
		</main>
	)
}
