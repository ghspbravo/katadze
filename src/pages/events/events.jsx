import React from 'react'
import topbanner from '../../components/topbanner/topbanner';
import useTitle from 'react-use/lib/useTitle';

import banner from './banner.jpg'
import campThumb from './campThumb.jpg'
import afpThumb from './afp/afp-banner.jpg'
import cardEvent from '../../components/card/cardEvent';

export default function events() {
	useTitle('KATADZE.EVENTS')
	return (
		<main className='pt-0'>
			{topbanner(<div className="text-center">
				<h2 className="lead"><b>katadze<span className="primary">.events</span></b></h2>
				<p>Мероприятия для каждого</p>
			</div>, banner)}

			<section className="sbox">
				<div className="container">

					<div className="row justify-content-center">


						<div className="col-lg-6 col-12 mb-3">
							{cardEvent(
								campThumb,
								'KATADZE CAMP',
								<p>KATADZEcamp - это летний спортивно-образовательный лагерь. Тебя ждут 7 дней активного, насыщенного и полезного отдыха на высоте 1650 метров над уровнем моря.</p>,
								'2-8 АВГУСТА',
								'АРХЫЗ',
								'/events/camp'
							)}
						</div>
						
						<div className="col-lg-6 col-12 mb-3">
							{cardEvent(
								afpThumb,
								'ALFA FUTURE PEOPLE',
								<p>Alfa Future People - это фестиваль электронной музыки и технологий, который пройдет уже в шестой раз. AFP объединяет выступления лучших мировых и российских представителей электронной музыки, самые передовые технологии и зрителей - преимущественно прогрессивную и позитивную молодежь со всего мира.</p>,
								'16-18 АВГУСТА',
								'Нижний новгород',
								'/events/afp'
							)}
						</div>
					</div>

				</div>
			</section>
		</main>
	)
}
