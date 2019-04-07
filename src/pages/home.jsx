import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from 'react-use/lib/useTitle';

export default function home() {
	useTitle('KATADZE')

	return (
		<main className="container">
			<h1>Home page</h1>
			<ol>
				<li><Link to='/events/'>Events</Link></li>
			</ol>
		</main>
	)
}
