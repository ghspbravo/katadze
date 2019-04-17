import React from 'react'
import topbanner from '../components/topbanner/topbanner';
import useTitle from 'react-use/lib/useTitle';

import banner from './res/events/banner.jpg'
import campThumb from './res/events/campThumb.jpg'
import cardEvent from '../components/card/cardEvent';

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


						{Array(10).fill().map((val, index) => <div key={index} className="col-lg-6 col-12 mb-3">
							{cardEvent(
								campThumb,
								'KATADZE CAMP',
								<p>KATADZEcamp - это летний лагерь. Тебя ждут 7 дней активного, насыщенного и полезного отдыха на высоте 1650 метров над уровнем моря.</p>,
								'2-8 АВГУСТА',
								'АРХЫЗ',
								'/events/camp'
							)}
						</div>)}
					</div>

				</div>
			</section>
		</main>
	)
}
