import React from 'react'
import { Link } from 'react-router-dom'

export default function empty() {
	return (
		<main>
			<div className="container pt-5">
				<h1 className="title_page">Страницы не существует</h1>
				<p>Как ты сюда попал? <Link to='/contacts'>
					<span>Поделись</span>
				</Link> своей историей с нами</p>
				<Link to='/' className="button">Вернуться на главную</Link>
			</div>
		</main>
	)
}
