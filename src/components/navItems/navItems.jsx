import React from 'react'
import { NavLink } from 'react-router-dom'

const navItemClass = 'nav-item'

/**
 * Элементы навигационного меню.
 * @returns {JSX.Element[]} Элементы навигации с классом nav-item.
 */
export default function navItems() {
	return [
		<NavLink exact to="/" key={0} className={navItemClass}>
			<i className="fas fa-home mr-1 d-lg-none"></i>
			<span>Главная</span>
		</NavLink>,
		<NavLink to="/events" key={1} className={navItemClass}>
			<i className="fas fa-snowboarding mr-1 d-lg-none"></i>
			<span >Мероприятия</span>
		</NavLink>,
		<NavLink to="/partners" key={6} className={navItemClass}>
			<i className="fas fa-percent mr-1 d-lg-none"></i>		
			<span>Партнеры</span>
		</NavLink>,
		// <NavLink to="/demo" key={2} className={navItemClass}>
		// 	<span >Demo</span>
		// </NavLink>,
		<NavLink to="/about" key={3} className={navItemClass}>
			<i className="fas fa-info mr-1 d-lg-none"></i>
			<span>О нас</span>
		</NavLink>,
		<NavLink to="/faq" key={4} className={navItemClass}>
			<i className="fas fa-question-circle mr-1 d-lg-none"></i>
			<span>FAQ</span>
		</NavLink>,
		<NavLink to="/contacts" key={5} className={navItemClass}>
			<i className="fas fa-address-card mr-1 d-lg-none"></i>
			<span>Контакты</span>
		</NavLink>,
	]
}
