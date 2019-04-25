import React from 'react'
import {Route, Switch} from 'react-router-dom'

import useTitle from 'react-use/lib/useTitle';
import banner from './banner.jpg'

import topbanner from '../../components/topbanner/topbanner';

import './partners.scss'
import partnersCategories from '../../components/partnersCategories/partnersCategories';
import partnersList from './partnersList';

export default function partners() {

	useTitle('KATADZE.FRIENDS')
	return (
		<main className='pt-0'>
			{topbanner(<div className="text-center">
				<h2 className="lead"><b>katadze<span className="primary">.friends</span></b></h2>
				<h4 style={{
					fontWeight: '900'
				}}>Живи активно. 
				<br/> С KatadZe — выгодно.</h4>
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
