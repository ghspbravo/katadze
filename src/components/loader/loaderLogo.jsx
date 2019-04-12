import React from 'react'
import './loaderLogo.scss'
import logo from '../logo/logo';

export default function loaderLogo() {
	return (
		<div className="loader-logo-wrapper">
			<div className="loader-logo-inner">
				{logo()}
			</div>
		</div>
	)
}
