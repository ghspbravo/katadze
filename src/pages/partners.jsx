import React from 'react'
import {Route, Switch} from 'react-router-dom'

import useTitle from 'react-use/lib/useTitle';
import banner from './res/partners/banner.jpg'

import topbanner from '../components/topbanner/topbanner';

import './res/partners/partners.scss'
import partnersCategories from '../components/partners/partnersCategories';
import partnersList from '../components/partners/partnersList';

export default function partners() {

	useTitle('KATADZE.FRIENDS')
	return (
		<main className='pt-0'>
			{topbanner(<div className="text-center">
				<h2 className="lead"><b>katadze<span className="primary">.friends</span></b></h2>
				<p>Живи активно. С KatadZe — выгодно.</p>
				<p>Получай скидки от наших партнеров</p>
			</div>, banner)}

			<section className="sbox">
				<div className="container">

				<Switch>
					<Route exact path='/partners/' component={partnersCategories} />
					<Route exact path='/partners/:id' component={partnersList} />
				</Switch>

				</div>
			</section>
		</main>
	)
}
