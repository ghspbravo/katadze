import React, { useCallback } from 'react'
import './res/contacts/contacts.scss'

import contactsPath from './res/contacts/contacts.svg'
import cityPath from './res/contacts/city.png'

import { useSpring, animated as a } from 'react-spring'
import useEvent from 'react-use/lib/useEvent'
import useTitle from 'react-use/lib/useTitle';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans5 = (x, y) => `translate3d(0,${y / 30}px,0)`

export default function contacts() {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

	const mouseMoveHandler = useCallback(({ clientX: x, clientY: y }) => set({ xy: calc(x, y) }))
	useEvent('mousemove', mouseMoveHandler, window)

	useTitle('KATADZE | Контакты')
	return (
		<main>
			<div className="container">
				<div className="row no-gutters contacts-header">
					<div className="col-lg-6 col-12">
						<div className="contacts-header-inner pt-5">
							<h1 className="title_page">У тебя остался вопрос?</h1>

							<form>
								<div className="form-group ">
									<label className="mr-1" htmlFor="contacts-question">Твой вопрос</label>
									<textarea id="contacts-question" className="col px-0" type="text" autoComplete="none" />
								</div>
								<div className="row no-gutters">
									<div className="col-md col-12">
										<div className="form-group row no-gutters">
											<label className="mr-1" htmlFor="contacts-name">Имя</label>
											<input className="col" id="contacts-name" type="text" />
										</div>
									</div>
									<div className="col-md col-12">
										<div className="form-group row no-gutters">
											<label className="mr-1" htmlFor="contacts-mail">Почта</label>
											<input className="col" id="contacts-mail" type="email" />
										</div>
									</div>
								</div>

								<button className="mt-2" type="button">Отправить</button>
							</form>
						</div>

						<div className="d-lg-none contacts-header-figure_bg" style={{ backgroundImage: `url(${contactsPath})` }}></div>
					</div>

					<div className="col-md-6 d-none d-lg-block">
						<svg className="contacts-header-figure mt-5" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 522.17 460.55">
							<defs>
								<linearGradient id="gr-1" x1="31.14" y1="267.73" x2="553.31" y2="267.73" gradientUnits="userSpaceOnUse">
									<stop offset="0" stopColor="#31abe2" /><stop offset="1" stopColor="#f2f2f2" /></linearGradient>
							</defs>
							<title>Contacts</title>
							<path className="cls-1" opacity="0.38" fill='url(#gr-1)' d="M34.33,170.88s-28.88-140.4,87-133.16c94.42,5.9,45.36,95.54,226.27,98.91s228.12,119.43,196.64,267-277.88,85.18-317.08,57C145,401.62,57.47,280.44,34.33,170.88Z" transform="translate(-31.14 -37.45)" />
							<path className="cls-2" fill='#004162' fillRule='evenodd' d="M82.25,228.07l173-149.28s19.28-24,45.49,0,171,148.78,171,148.78l-128.67,123-127.7-.8Z" transform="translate(-31.14 -37.45)" />
							<a.g style={{ transform: props.xy.interpolate(trans5) }}>
								<polygon className="cls-3" fill='#e5eff3' fillRule='evenodd' points="72.76 59.24 415.45 58.89 415.45 328.64 72.51 328.64 72.76 59.24" />
								<polygon className="cls-4" fill='#2eb6d7' fillRule='evenodd' points="204.06 221.65 284.75 221.74 284.75 249.59 204.36 249.59 204.06 221.65" />
								<rect className="cls-5" fill='#fff' x="86.48" y="114.14" width="315.33" height="83.1" />
								<rect className="cls-5" fill='#fff' x="85.73" y="84.64" width="153.15" height="21.53" />
								<rect className="cls-5" fill='#fff' x="248.8" y="84.64" width="153.15" height="21.53" />
								<polygon className="cls-6" fill='#cfdbe1' fillRule='evenodd' points="72.89 193.77 194.07 297.49 299.22 297.49 415.45 193.77 420.22 224.04 316.13 321.27 169.24 328.64 72.81 220.88 72.89 193.77" />

								<path className="cls-5" fill='#fff' d="M249.56,275.31v1.74c0,2.1-1.05,3.3-3.07,3.3s-3.07-1.2-3.07-3.3v-6.82c0-2.1,1-3.3,3.07-3.3s3.07,1.2,3.07,3.3v1.27h-1.95v-1.4c0-.94-.41-1.3-1.07-1.3s-1.06.36-1.06,1.3v7.08c0,.94.41,1.27,1.06,1.27s1.07-.33,1.07-1.27v-1.87Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-5" fill='#fff' d="M257,270.1v.47a2.57,2.57,0,0,1-1.33,2.64c1.1.43,1.54,1.42,1.54,2.81v1.07a2.79,2.79,0,0,1-3.13,3.11h-3.25V267.08h3.12C256.06,267.08,257,268.07,257,270.1Zm-4.1-1.15v3.47h.8c.77,0,1.24-.34,1.24-1.39v-.73c0-.93-.32-1.35-1-1.35Zm0,5.34v4h1.18c.69,0,1.06-.32,1.06-1.29v-1.14c0-1.22-.39-1.6-1.33-1.6Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-5" fill='#fff' d="M258.05,280.2a4,4,0,0,0,.22-1.6v-2c0-1.37.34-2.36,1.37-2.79a2.61,2.61,0,0,1-1.35-2.66v-1c0-2,.92-3,3-3h3.12V280.2h-2.07v-5.34h-.71c-.93,0-1.35.45-1.35,1.66v2.07a4.17,4.17,0,0,1-.18,1.61ZM261.4,269c-.73,0-1,.42-1,1.35v1.3c0,1,.47,1.38,1.24,1.38h.8v-4Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-5" fill='#fff' d="M269.92,270.3c0-1.18-.41-1.5-1.06-1.5s-1.09.36-1.09,1.3v1.07h-1.89v-1c0-2.1,1-3.26,3-3.26s3.08,1.2,3.08,3.3v.34c0,1.4-.45,2.28-1.45,2.69A2.69,2.69,0,0,1,272,276v1c0,2.1-1.05,3.3-3.08,3.3s-3.07-1.2-3.07-3.3v-1.44h2v1.57c0,.94.41,1.29,1.07,1.29s1.06-.32,1.06-1.48v-1c0-1.22-.41-1.67-1.34-1.67h-.51v-1.87h.62c.77,0,1.23-.34,1.23-1.39Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-5" fill='#fff' d="M280,280.2H278l-.35-2.38h-2.53l-.36,2.38h-1.89l2.1-13.12h3Zm-4.7-4.16h2l-1-6.64Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-5" fill='#fff' d="M280.4,267.08h6.37V269h-2.16V280.2h-2.06V269H280.4Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-5" fill='#fff' d="M287.67,280.2V267.08h2.06V272h1c2.06,0,3.07,1.14,3.07,3.24V277c0,2.09-1,3.24-3.07,3.24Zm3-1.88c.66,0,1-.3,1-1.23v-2c0-.94-.35-1.24-1-1.24h-1v4.44Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-5" fill='#fff' d="M301,275.31v1.74c0,2.1-1.05,3.3-3.08,3.3s-3.07-1.2-3.07-3.3v-6.82c0-2.1,1.05-3.3,3.07-3.3s3.08,1.2,3.08,3.3v1.27H299v-1.4c0-.94-.41-1.3-1.07-1.3s-1.07.36-1.07,1.3v7.08c0,.94.41,1.27,1.07,1.27s1.07-.33,1.07-1.27v-1.87Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-5" fill='#fff' d="M301.87,280.2a4,4,0,0,0,.22-1.6v-2c0-1.37.34-2.36,1.37-2.79a2.61,2.61,0,0,1-1.35-2.66v-1c0-2,.92-3,3.06-3h3.11V280.2h-2.07v-5.34h-.71c-.93,0-1.35.45-1.35,1.66v2.07a4.17,4.17,0,0,1-.18,1.61ZM305.22,269c-.73,0-1.05.42-1.05,1.35v1.3c0,1,.47,1.38,1.24,1.38h.8v-4Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-9" fill='#6e6e6e' d="M128.46,140.47h-2.1v-13h1.82v8.23l.75-2.86,1.67-5.37h2.24v13H131v-9.15l-.84,3.19Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-9" fill='#6e6e6e' d="M138.62,136.7l1.39-9.23h2.84v13h-1.93v-9.32l-1.41,9.32h-1.93l-1.52-9.19v9.19h-1.79v-13h2.84Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-9" fill='#6e6e6e' d="M144,140.47a3.88,3.88,0,0,0,.22-1.58v-2c0-1.36.33-2.34,1.35-2.77a2.59,2.59,0,0,1-1.33-2.64v-1c0-2,.91-3,3-3h3.09v13h-2v-5.29h-.7c-.93,0-1.34.45-1.34,1.65v2a4,4,0,0,1-.18,1.59Zm3.32-11.14c-.72,0-1,.41-1,1.34V132c0,1,.46,1.37,1.23,1.37h.79v-4Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-9" fill='#6e6e6e' d="M287.63,132.77h2.83v1.88h-2.83v3.84h3.56v1.87h-5.62V127.25h5.62v1.87h-3.56Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-9" fill='#6e6e6e' d="M292.37,132.87h3.75v1.87h-3.75Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-9" fill='#6e6e6e' d="M301.89,136.56l1.41-9.31h2.86v13.11h-2V131l-1.42,9.4h-2l-1.54-9.27v9.27h-1.79V127.25h2.86Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-9" fill='#6e6e6e' d="M314.33,140.36h-2.08l-.36-2.38h-2.53l-.35,2.38h-1.89l2.09-13.11h3Zm-4.7-4.16h2l-1-6.63Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-9" fill='#6e6e6e' d="M315.29,127.25h2.06v13.11h-2.06Z" transform="translate(-31.14 -37.45)" />
								<path className="cls-9" fill='#6e6e6e' d="M318.84,127.25h2.07v11.24h3.39v1.87h-5.46Z" transform="translate(-31.14 -37.45)" />
								<line className="cls-10" stroke='#6e6e6e' strokeWidth='5.58px' fill='none' strokeMiterlimit="22.93" x1="90.57" y1="123.04" x2="345.78" y2="123.04" />
								<line className="cls-10" stroke='#6e6e6e' strokeWidth='5.58px' fill='none' strokeMiterlimit="22.93" x1="90.57" y1="134.14" x2="317.77" y2="134.14" />
								<line className="cls-10" stroke='#6e6e6e' strokeWidth='5.58px' fill='none' strokeMiterlimit="22.93" x1="90.57" y1="145.23" x2="325.17" y2="145.23" />
								<line className="cls-10" stroke='#6e6e6e' strokeWidth='5.58px' fill='none' strokeMiterlimit="22.93" x1="90.57" y1="167.43" x2="216.85" y2="167.43" />
								<path className="cls-11" fill='#333' opacity="0.13" d="M81.14,452.23l-.64.48M391.72,96.34h54.84V205.81c15.21,13.14,25.21,21.76,25.21,21.76V430.23H80.09v-.51Z" transform="translate(-31.14 -37.45)" />
							</a.g>
							<polygon className="cls-7" fill='#fcc100' fillRule='evenodd' points="51.11 190.62 184.22 313.42 311.99 313.12 440.66 190.12 440.66 414.78 48.98 414.78 51.11 190.62" />
							<line className="cls-8" stroke='#d7a100' strokeLinecap='round' strokeWidth='3.93px' fill='none' strokeMiterlimit="22.93" x1="184.23" y1="313.42" x2="50.11" y2="414.07" />
							<line className="cls-8" stroke='#d7a100' strokeLinecap='round' strokeWidth='3.93px' fill='none' strokeMiterlimit="22.93" x1="311.99" y1="313.12" x2="439.77" y2="413.7" />
						</svg>
					</div>
				</div>

				<section className="sbox">
					<div className="row no-gutters justify-content-center">
						<div className="col-12">
							<img style={{
								width: '300px',
								margin: '0 auto',
								display: 'block'
							}} src={cityPath} alt="city"/>

						</div>
						<div className="mt-4 text-center">
							<h5>Екатеринбург</h5>
							<p>
								ул. Софьи Ковалевской, 3, офис 424
							</p>
							<a className="hide" href="tel:+79667090909">+ 7 (966) 709-09-09</a>
						</div>

					</div>
				</section>

			</div>
				<section className="sbox_info py-5">
					<div className="container text-center">
						<h2>
							Напишите нам
							<br/> <a className="hide" href="mailto:katadzeguide@mail.ru">katadzeguide@mail.ru</a>
						</h2>
					</div>
				</section>
		</main >
	)
}
