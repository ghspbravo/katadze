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
			<NavLink exact to="/">Home</NavLink>
		</div>,
		<div key={1} className={navItemClass}>
			<NavLink to="/events">Events</NavLink>
		</div>,
		<div key={6} className={navItemClass}>
			<i className="fas fa-percent mr-1 d-lg-none"></i>		
			<NavLink to="/partners">Partners</NavLink>
		</div>,
		<div key={2} className={navItemClass}>
			<NavLink to="/demo">Demo</NavLink>
		</div>,
		<div key={3} className={navItemClass}>
			<i className="fas fa-info mr-1 d-lg-none"></i>
			<NavLink to="/about">About</NavLink>
		</div>,
		<div key={4} className={navItemClass}>
			<i className="fas fa-question-circle mr-1 d-lg-none"></i>
			<NavLink to="/faq">Faq</NavLink>
		</div>,
		<div key={5} className={navItemClass}>
			<i className="fas fa-address-card mr-1 d-lg-none"></i>
			<NavLink to="/contacts">Contacts</NavLink>
		</div>,
	]
}
