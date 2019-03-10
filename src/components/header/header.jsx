import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'
import logo from '../logo/logo';

export default function header() {
	return (
		<div className="header container">
			<div className="row align-items-center no-gutters">
				<div className="header-logo">
					{logo()}
				</div>
				<nav className="row no-gutters header-nav">
					<div className="header-nav-item">
						<NavLink activeClassName="active" to="/">Home</NavLink>
					</div>
					<div className="header-nav-item">
						<NavLink activeClassName="active" to="/demo/">Demo</NavLink>
					</div>
				</nav>
			</div>
		</div>
	)
}
