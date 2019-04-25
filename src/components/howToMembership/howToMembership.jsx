import React from 'react'
import { Link } from 'react-router-dom'

import bgIconBig from '../bgIcon/bgIconBig';
import step1 from './step1.svg'
import step2 from './step2.svg'
import step3 from './step3.svg'

export default function howToMembership() {
	return (
		<div className="howto-membership">

			<div className="row no-gutters align-items-center howto-membership-item mb-3">
				<div className="mx-auto">
					{bgIconBig(step1)}
				</div>
				<div className="ml-sm-2 col-12 col-sm">
					<h5 className="upper">Быть студентом учебного заведения
									<br /> <span style={{
							fontWeight: 'normal'
						}}>(ВВУЗы, СУЗы, техникумы)</span>
					</h5>
				</div>
			</div>

			<div className="row no-gutters align-items-center howto-membership-item mb-3">
				<div className="mx-auto">
					{bgIconBig(step2)}
				</div>
				<div className="ml-sm-2 col-12 col-sm">
					<h5 className="upper">Оплатить подписку
									<br /> <span style={{
							fontWeight: 'normal'
						}}>(ВВУЗы, СУЗы, техникумы)</span>
					</h5>
					<Link className="button" to='/profile/membership'>Приобрести подписку</Link>
				</div>
			</div>

			<div className="row no-gutters align-items-center howto-membership-item mb-2">
				<div className="mx-auto">
					{bgIconBig(step3)}
				</div>
				<div className="ml-sm-2 col-12 col-sm">
					<h5 className="upper">Совершить покупки со скидкой
									<br /> <span style={{
							fontWeight: 'normal',
							textTransform: 'none'
						}}>Просто активируйте скидку на сайте при менеджере у партнеров</span>
					</h5>
					<Link className="button" to='/partners'>Выбрать партнера</Link>
				</div>
			</div>

		</div>
	)
}
