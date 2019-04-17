import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";

import './camp.scss'

import campBanner from './campBanner.jpg'
import titleSubtitleUnderline from '../../../../components/title/titleSubtitleUnderline';
import bgIcon from '../../../../components/bgIcon/bgIcon';

import jeep from './jeep.svg'
import clothes from './clothes.svg'
import food from './food.svg'
import home from './home.svg'
import horses from './horses.svg'
import party from './party.svg'
import psycology from './psycology.svg'
import run from './run.svg'
import sport from './sport.svg'
import transfer from './transfer.svg'
import travels from './travels.svg'
import waterfall from './waterfall.svg'
import enBook from './enBook.svg'
import power from './power.svg'
import balance from './balance.svg'
import titleBg from '../../../../components/title/titleBg';
import cardPrice from '../../../../components/card/cardPrice';

export default function camp() {

	const featuresSlider = useRef()

	useEffect(() => {
		const featuresSwiper = new Swiper(featuresSlider.current, {
			slidesPerView: 'auto',
		});

		return () => {
			featuresSwiper.destroy(true)
		}
	}, [])
	return (
		<main className="pt-0">
			{/* <section className="camp-banner" style={{ backgroundImage: `url(${campBanner})`, }}>
				<div className="camp-banner__inner">
					<div className="camp-banner__title mb-2">
						KAT
						<br /> ADZE
						<br /> CAMP
					</div>
					<div className="lead camp-banner__subtitle">
						Горы. Спорт. Английский. Ты
					</div>
				</div>
			</section> */}
			<section className="camp-banner" style={{ backgroundImage: `url(${campBanner})`, }}></section>


			<section className="sbox">
				<div className="container">
					<div className="col-lg-10 col-12 mx-auto px-0">
						{titleSubtitleUnderline(<h1>Katadze camp</h1>,
							<h5><b>KATADZEcamp</b> — это летний лагерь для молодых, энергичных, жаждущих эмоций и драйва людей, где созданы все условия для физического и личностного развития. Тебя ждут <b>7 дней</b> активного, насыщенного и полезного отдыха на высоте <b>1650 метров</b> над уровнем моря.</h5>)}
					</div>
				</div>
			</section>

			<section className="sbox">
				<div className="container">

					<div ref={featuresSlider} className="swiper-container">
						<div className="swiper-wrapper">

							<div className="swiper-slide col-lg-4 col-md-5 col-sm-8 col-12">
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(jeep)}
									<div className="ml-2 text-big">катание <br /> на джипах</div>
								</div>
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(travels)}
									<div className="ml-2 text-big">экскурсии</div>
								</div>
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(sport)}
									<div className="ml-2 text-big">спорт <br /> и английский </div>
								</div>
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(run)}
									<div className="ml-2 text-big">забег на горной <br /> местности</div>
								</div>
							</div>

							<div className="swiper-slide col-lg-4 col-md-5 col-sm-8 col-12">
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(psycology)}
									<div className="ml-2 text-big">занятия по <br /> самопознанию</div>
								</div>
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(party)}
									<div className="ml-2 text-big">вечеринки и <br /> развлечения</div>
								</div>
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(home)}
									<div className="ml-2 text-big">проживание</div>
								</div>
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(food)}
									<div className="ml-2 text-big">3-х разовое <br />питание</div>
								</div>
							</div>

							<div className="swiper-slide col-lg-4 col-md-5 col-sm-8 col-12">
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(transfer)}
									<div className="ml-2 text-big">трансфер от/до <br />Минвод</div>
								</div>
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(clothes)}
									<div className="ml-2 text-big">атрибутика</div>
								</div>
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(horses)}
									<div className="ml-2 text-big">катание <br /> на лошадях</div>
								</div>
								<div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
									{bgIcon(waterfall)}
									<div className="ml-2 text-big">поход <br /> на водопады</div>
								</div>
							</div>

						</div>
					</div>

				</div>
			</section>

			<section className="sbox">
				<div className="container">
					<div className="text-center mb-4">
						{titleBg('Траектории')}
					</div>
					
					<div className="row">

						<div className="col-md-4 col-12 text-center mb-3">
							<img className="mx-auto" src={enBook} alt="book"/>

							<h2 className="lead"><b>English</b></h2>

							<h5 className="lead">
								Много занятий, <br/> практики и теории <br/> английского, тест <br/> по завершению
							</h5>
						</div>

						<div className="col-md-4 col-12 text-center mb-3">
							<img className="mx-auto" src={power} alt="power"/>

							<h2 className="lead"><b>Sport</b></h2>

							<h5 className="lead">
								Много спорта <br/> и активностей, <br/> командные игры, <br/> забег
							</h5>
						</div>

						<div className="col-md-4 col-12 text-center mb-3">
							<img className="mx-auto" src={balance} alt="balance"/>

							<h2 className="lead"><b>Balance</b></h2>

							<h5 className="lead">
								English <br/> + sport
							</h5>
						</div>

					</div>

				</div>
			</section>

			<section className="sbox">
				<div className="container">
					<div className="row justify-content-center">
						
						<div className="col-lg-4 col-md-6 col-12 mb-3">
							{cardPrice(
								'https://twentysix.ru/uploads/images/00/96/83/2018/03/14/0cc0a0e55d.jpg',
								'KATADZE CAMP',
								<p>2 - 8 Августа 2019
								<br/> Архыз, Республика Карачаево-Черкессия </p>,
								'24 000',
								'gdocurl'
							)}
						</div>
					
						<div className="col-lg-4 col-md-6 col-12 mb-3">
							{cardPrice(
								'https://twentysix.ru/uploads/images/00/96/83/2018/03/14/0cc0a0e55d.jpg',
								'KATADZE CAMP',
								<p>2 - 8 Августа 2019
								<br/> Архыз, Республика Карачаево-Черкессия
								<br/> Архыз, Республика Карачаево-Черкессия
								<br/> Архыз, Республика Карачаево-Черкессия </p>,
								'24 000',
								'gdocurl'
							)}
						</div>

					</div>
				</div>
			</section>
		</main>
	)
}
