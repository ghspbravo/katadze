import React from 'react'
import { NavLink } from 'react-router-dom'

const navItemClass = 'nav-item'

/**
 * Элементы навигационного меню.
 * @returns {JSX.Element[]} Элементы навигации с классом nav-item.
 */
export default function navItems() {
	return [
		<div key={0} className={navItemClass}>
			<i className="fas fa-home mr-1 d-lg-none"></i>
			<NavLink exact to="/">Главная</NavLink>
		</div>,
		<div key={1} className={navItemClass}>
			<NavLink to="/events">Мероприятия</NavLink>
		</div>,
		<div key={6} className={navItemClass}>
			<i className="fas fa-percent mr-1 d-lg-none"></i>		
			<NavLink to="/partners">Партнеры</NavLink>
		</div>,
		<div key={2} className={navItemClass}>
			<NavLink to="/demo">Demo</NavLink>
		</div>,
		<div key={3} className={navItemClass}>
			<i className="fas fa-info mr-1 d-lg-none"></i>
			<NavLink to="/about">О нас</NavLink>
		</div>,
		<div key={4} className={navItemClass}>
			<i className="fas fa-question-circle mr-1 d-lg-none"></i>
			<NavLink to="/faq">FAQ</NavLink>
		</div>,
		<div key={5} className={navItemClass}>
			<i className="fas fa-address-card mr-1 d-lg-none"></i>
			<NavLink to="/contacts">Контакты</NavLink>
		</div>,
	]
}
