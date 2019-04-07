import React from 'react'

export default function eventSingle(router) {
	return (
		<div className="container">
			<h1>single event</h1>
			<p>event ID: {router.match.params.id}</p>
		</div>
	)
}
