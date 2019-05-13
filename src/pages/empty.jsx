import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from 'react-use/lib/useTitle';

export default function empty() {
	
	useTitle('KATADZE | Страница не найдена')
	return (
		<main>
			<div className="container pt-5">
				<h1 className="title_page">Страницы не существует</h1>
				<p>Как ты сюда попал? <Link to='/contacts'>
					Поделись
				</Link> своей историей с нами</p>
				<div className="row no-gutters">
					<Link to='/' className="button">Вернуться на главную</Link>
				</div>
			</div>
		</main>
	)
}
