import React from 'react'
import { Link } from 'react-router-dom'

import cardPartner from '../card/cardPartner';

export default function partnersList() {
	return (
		<div>
			<div className="mb-3">
				<Link to='/partners/'><i className="fas fa-arrow-left"></i> Вернуться к выбору категорий</Link>
			</div>
			<div className="row justify-content-center">
				{Array(10).fill().map((val, index) => <div key={index} className="col-md-6 col-12 mb-3">

					{cardPartner(
						'https://katadze.ru/media/upload/partner_img/10add650-6ed5-4b5d-98ab-cf4025c73270.jpg',
						'Уктус',
						'Одни из лучших трасс в Челябинской области',
						1,
						50,
					)}

				</div>)}
			</div>
		</div>
	)
}
