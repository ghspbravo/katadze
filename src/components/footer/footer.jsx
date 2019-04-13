import React from 'react'
import bgIcon from '../bgIcon/bgIcon';

import instIcon from './instagram.svg'
import vkIcon from './vk.svg'
import mailIcon from './mail.svg'

export default function footer() {
	return (
		<div className="container mt-5 mb-2">
			<div className="mb-1">
				<p><b>Ищи нас тут:</b></p>
			</div>
			<div className="row no-gutters">
				<a className="mr-1" href="https://www.instagram.com/katadzzze/" target="_blank" rel="noopener noreferrer">
					{bgIcon(instIcon)}
				</a>
				<a className="mr-1" href="https://vk.com/katadzzze" target="_blank" rel="noopener noreferrer">
					{bgIcon(vkIcon)}
				</a>
				<a href="mailto:katadzeguide@mail.ru" target="_blank" rel="noopener noreferrer">
					{bgIcon(mailIcon)}
				</a>
			</div>
		</div>
	)
}
