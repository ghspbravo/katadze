import React from 'react'
import { Link } from 'react-router-dom'
import topbanner from '../components/topbanner/topbanner';
import useTitle from 'react-use/lib/useTitle';

export default function events() {
	useTitle('KATADZE.EVENTS')
	return (
		<main className='pt-0'>
			{topbanner(<div>
				<h2 className="lead">katadze.events</h2>
				<p style={{ textAlign: "center" }}>мероприятия для каждого</p>
			</div>)}
			<section className="sbox">
				<div className="container">
					<h1>Events page</h1>
					<Link to="events/1">Event 1</Link>
					{Array(20).fill().map((_, index) => <p key={index}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates similique quos dolorem nisi vel vero ullam consectetur a, enim iste molestias expedita. Sapiente, ipsa?
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates similique quos dolorem nisi vel vero ullam consectetur a, enim iste molestias expedita. Sapiente, ipsa?</p>
					)}
				</div>
			</section>
		</main>
	)
}
