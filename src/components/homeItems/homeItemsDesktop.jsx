import React from 'react'
import { Link } from 'react-router-dom'
import { animated as a } from 'react-spring'

import partnersBg from './partners.jpg'
import eventsBg from './events.jpg'
import gidsBg from './gids.jpg'
import mainBg from './main.jpg'

import './homeItemsDesktop.scss'

export default function homeItemsDesktop(
	activateHandlers,
	deactivateHandlers,
	springs
) {
	return (
		<div className="home-wrapper row no-gutters" style={{ backgroundImage: `url(${mainBg})` }}>
			<div key={0} onMouseEnter={activateHandlers[0]} onMouseLeave={deactivateHandlers[0]} className="home-item">
				<div className="home-item__title"><h3>друзья<span>.</span></h3></div>

				<a.div style={springs[0]} className="home-item-inner">
					<Link className="home-item__link" to='/partners'>Перейти</Link>
				</a.div>

				<a.svg style={springs[0]} className="home-item-bg" width="100%" height="100%">
					<defs>
						<mask id="knockout-text-0" x="0" y="0" width="100%" height="100%">
							<rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect>
							<text className="home-item__transparent-title" dy=".25em" x="50%" y="50%" textAnchor="middle">FRIENDS</text>
						</mask>
					</defs>
					<rect className="knockout-text-bg" width="100%" height="100%" fill="#41bfef" x="0" y="0" fillOpacity="0.95" mask="url(#knockout-text-0)"></rect>
				</a.svg>

				<a.div className="home-item-image" style={{ ...springs[0], backgroundImage: `url(${partnersBg})` }}></a.div>

				<a.div style={springs[0]} className="home-item-description">
					<p>Создавать пространство для возможностей — наша цель.
						<br /> Добиваться её нам помогают наши <b>партнеры</b>:
						<br /> постоянные скидки и бонусы от друзей <b>KatadZe</b>.</p>
				</a.div>
			</div>

			<div key={1} onMouseEnter={activateHandlers[1]} onMouseLeave={deactivateHandlers[1]} className="home-item">
				<div className="home-item__title"><h3>события<span>.</span></h3></div>

				<a.div style={springs[1]} className="home-item-inner">
					<Link className="home-item__link" to='/events'>Перейти</Link>
				</a.div>

				<a.svg style={springs[1]} className="home-item-bg" width="100%" height="100%">
					<defs>
						<mask id="knockout-text-1" x="0" y="0" width="100%" height="100%">
							<rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect>
							<text className="home-item__transparent-title" dy=".25em" x="50%" y="50%" textAnchor="middle">EVENTS</text>
						</mask>
					</defs>
					<rect className="knockout-text-bg" width="100%" height="100%" fill="#41bfef" x="0" y="0" fillOpacity="0.9" mask="url(#knockout-text-1)"></rect>
				</a.svg>

				<a.div className="home-item-image" style={{ ...springs[1], backgroundImage: `url(${eventsBg})` }}></a.div>

				<a.div style={springs[1]} className="home-item-description">
					<p>Объединяя людей по всему миру, мы создаем уникальные проекты самой разной направленности.
					<br />Присоединяйся: <b>погнали KatadZe</b>
					</p>
				</a.div>
			</div>

			<div key={2} onMouseEnter={activateHandlers[2]} onMouseLeave={deactivateHandlers[2]} className="home-item">
				<div className="home-item__title"><h3>гиды<span>.</span></h3></div>

				<a.svg style={springs[2]} className="home-item-bg" width="100%" height="100%">
					<defs>
						<mask id="knockout-text-2" x="0" y="0" width="100%" height="100%">
							<rect x="0" y="0" width="100%" height="100%" fill="#fff"></rect>
							<text className="home-item__transparent-title" dy=".25em" x="50%" y="50%" textAnchor="middle">GIDS</text>
						</mask>
					</defs>
					<rect className="knockout-text-bg" width="100%" height="100%" fill="#41bfef" x="0" y="0" fillOpacity="0.9" mask="url(#knockout-text-2)"></rect>
				</a.svg>

				<a.div className="home-item-image" style={{ ...springs[2], backgroundImage: `url(${gidsBg})` }}></a.div>

				<a.div style={springs[2]} className="home-item-description home-item-description_revert">
					<p>Удобный и быстрый сервис для поиска гида и ярких впечатлений
					<br /> Регистрируйся и наслаждайся!
					<br/>
					<br /> * <i>Проект находится в разработке</i>
					</p>
				</a.div>
			</div>
		</div>
	)
}
