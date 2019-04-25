import React from 'react'
import { Link } from 'react-router-dom';

import partnersBg from './partners.jpg'
import eventsBg from './events.jpg'
import gidsBg from './gids.jpg'
import mainBg from './main.jpg'

import './homeItemsMobile.scss'
import scrolldown from '../scrolldown/scrolldown';

export default function homeItemsMobile() {
	return (
		<div className="home-wrapper-mobile">

			<div className="home-item-mobile" style={{
				backgroundImage: `url(${mainBg})`,
				backgroundPositionX: 'center'
			}}>
				<div className="home-item-mobile-inner">
					<div className="home-item-mobile__title"><h2>KATADZE</h2></div>
				</div>

				{scrolldown()}
			</div>

			<div className="home-item-mobile" style={{
				backgroundImage: `url(${partnersBg})`,
				backgroundPositionX: '30%'
			}}>
				<div className="home-item-mobile-inner">
					<div className="home-item-mobile__title"><h2>FRIENDS</h2></div>
					<div className="home-item-mobile__description">
						<p>Создавать пространство для возможностей — наша цель.
						<br /> Добиваться её нам помогают наши <b>партнеры</b>.
						<br />
							<br />Постоянные скидки и бонусы от друзей <b>KatadZe</b>.</p>
					</div>

					<div className="mt-5 home-item-mobile__link">
						<Link to='/partners' >Перейти</Link>
					</div>
				</div>
			</div>

			<div className="home-item-mobile" style={{
				backgroundImage: `url(${eventsBg})`,
				backgroundPositionX: 'center'
			}}>
				<div className="home-item-mobile-inner">
					<div className="home-item-mobile__title"><h2>EVENTS</h2></div>
					<div className="home-item-mobile__description">
						<p>Объединяя людей по всему миру, мы создаем уникальные проекты самой разной направленности.
							<br />
							<br />Присоединяйся!
						</p>
						<h5 style={{
							textTransform: 'uppercase'
						}}>погнали KatadZe</h5>
					</div>

					<div className="mt-5 home-item-mobile__link">
						<Link to='/events' >Перейти</Link>
					</div>
				</div>
			</div>

			<div className="home-item-mobile" style={{
				backgroundImage: `url(${gidsBg})`,
				backgroundPositionX: 'center'
			}}>
				<div className="home-item-mobile-inner">
					<div className="home-item-mobile__title"><h2>GIDS</h2></div>
					<div className="home-item-mobile__description">
						<p>Удобный и быстрый сервис для поиска гида и ярких впечатлений
					<br /> Регистрируйся и наслаждайся!
					<br />
							<br /> * <i>Проект находится в разработке</i>
						</p>
					</div>
				</div>
			</div>

		</div>
	)
}
