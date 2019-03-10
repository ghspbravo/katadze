import React from 'react'
import './logo.scss'

export default function logo(type) {
	return (
		<div data-testid="logo" className={`logo ${type ? 'logo_' + type : ''}`} >
			<img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="logo" />			
		</div>
	)
}
