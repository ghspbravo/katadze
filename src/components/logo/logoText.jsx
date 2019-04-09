import React from 'react'
import { animated as a } from 'react-spring'
import {Link} from 'react-router-dom'

export default function logoText(transition = null, index = null) {
	return (
		<a.div key={index} className="logo-text" style={transition}>
			<Link to='/'>
				KATADZE
			</Link>
		</a.div>
	)
}
