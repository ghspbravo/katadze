import React from 'react'
import bgIcon from '../bgIcon/bgIcon';

import instIcon from './instagram.svg'
import vkIcon from './vk.svg'
import mailIcon from './mail.svg'

import privacy from './privacy.pdf'
import termsOfUse from './termsOfUse.pdf'

export default function footer() {
	return (
		<div className="pt-5 pb-2" style={{
			backgroundColor: 'white',
			position: 'relative',
			zIndex: 1
		}}>
			<div className="container">
				<div className="mb-2">
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

				<p className="text-small">Мы используем файлы cookie, чтобы улучшить работу и повысить эффективность сайта.
				<br/> Продолжая пользование данным сайтом, вы соглашаетесь с <a className="underline" rel="noopener noreferrer" target="_blank" href={privacy}>политикой конфиденциальности</a> и <a className="underline" rel="noopener noreferrer" target="_blank" href={termsOfUse}>условиями использования</a>.</p>
			</div>
		</div>
	)
}
