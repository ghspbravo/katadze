import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from 'react-use/lib/useTitle';
import isMobile from '../detectMobileBrowser';

export default function home() {
	useTitle('KATADZE')

	return (
		<main className="container">
			<h1>Home page</h1>
			<ol>
				<li><Link to='/events/'>Events</Link></li>
			</ol>
			<p>This browser is {isMobile() ? 'Mobile' : 'Desktop'}</p>
		</main>
	)
}
