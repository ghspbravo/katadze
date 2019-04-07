import React from 'react'
import { animated as a } from 'react-spring'
import logo from './logo';

export default function logoBrand(transition, index, pathName) {

	const getCategoryOnPath = pathName => {
		if (pathName.match(/(events)/)) return 'events'
		if (pathName.match(/(partners)/)) return 'friends'
	}

	return (
		<a.div key={index} className="logo-brand" style={transition}>
			<div className="logo-brand__logo">
				{logo('white')}
			</div>
			<div className="logo-brand__brand">katadze</div>
			<a.div className="logo-brand__category">{getCategoryOnPath(pathName)}</a.div>
		</a.div>
	)
}
