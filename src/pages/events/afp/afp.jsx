import React, { useEffect, useRef, useCallback } from 'react'
import Swiper from "swiper";
import './afp.scss'
import bgIcon from '../../../components/bgIcon/bgIcon';
import titleSubtitleUnderline from '../../../components/title/titleSubtitleUnderline';
import { useStore, useActions } from 'easy-peasy';

import afpBanner from './afp-banner.jpg'

import afpTicket from '../icons/afpTicket.svg'
import photo from '../icons/camera.png'
import train from '../icons/train.png'
import bus from '../icons/transfer.svg'
import camping from '../icons/campPlace.svg'
import document from '../icons/document.svg'
import tshirt from '../icons/clothes.svg'
import map from '../icons/map.svg'
import help from '../icons/help.svg'
import chat from '../icons/chat.svg'
import percent from '../icons/percent.svg'
import titleBg from '../../../components/title/titleBg';
import cardPrice from '../../../components/card/cardPrice';

import controlNext from './control-next.svg'
import controlPrev from './control-prev.svg'

import zbrand from './zbrand.svg'

export default function afp() {
  const isLoading = useStore(store => store.partners.isLoading)

  const isLoggedIn = useStore(store => store.auth.isLoggedIn)
  const isActivated = useStore(store => store.profile.activated)

  const orderEvent = useActions(actions => actions.orders.orderEvent)

  const getEventInfo = useActions(actions => actions.events.getAfp)
  const tariffs = useStore(store => store.events.afp)

  const featuresSlider = useRef()
  const gallery = useRef()

  // sliders
  useEffect(() => {
    const featuresSwiper = new Swiper(featuresSlider.current, {
      slidesPerView: 'auto',
    });

    const gallerySwiper = new Swiper(gallery.current, {
      spaceBetween: 35,
      navigation: {
        nextEl: '.gallery-control-next',
        prevEl: '.gallery-control-prev',
      },
    })

    return () => {
      featuresSwiper.destroy(true)
      gallerySwiper.destroy(true)
    }
  }, [])

  useEffect(() => {
    getEventInfo()
  }, [])

  const paymentHandler = useCallback((id, idPart = null) => {
    orderEvent({
      id,
      idPart
    })
  })
  return (
    <main className="pt-0">
      <section className="js-banner camp-banner" style={{ backgroundImage: `url(${afpBanner})`, }}></section>

      <section className="sbox">
        <div className="container">
          <div className="col-lg-10 col-12 mx-auto px-0">
            {titleSubtitleUnderline(<h1>ALFA FUTURE PEOPLE</h1>,
              <h5>Фестиваль электронной музыки и технологий, который пройдет уже в шестой раз. <b>Alfa Future People 2019</b> (AFP) объединяет выступления лучших мировых и российских представителей электронной музыки, самые передовые технологии и зрителей - преимущественно прогрессивную и позитивную молодежь со всего мира.</h5>)}
          </div>
        </div>
      </section>

      {/* Lead block */}
      <section className="sbox">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-4 col-2">
              <img src={zbrand} alt="" />
            </div>

            <div className="col-lg-9 col-md-8 col-10">
              <p className="h4" style={{ fontWeight: 400 }}>Мы зарядим тебя эмоциями и сделаем поездку на <b>Alfa Future People</b> незабываемой!</p>
              <p className="h4" style={{ fontWeight: 400 }}>Для членов клуба доступны трансфер из Екатеринбурга (поезд), проживание в кемпинге Гамма и БИЛЕТЫ по специальным ценам! </p>
            </div>

          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="sbox">
        <div className="container">

          <div className="text-center mb-4">
            {titleBg('Тарифы', true)}
          </div>


          <div ref={featuresSlider} className="swiper-container">
            <div className="swiper-wrapper">

              <div className="swiper-slide col-md-6 col-sm-8 col-10">
                <h2 className="lead text-center"><b>JUNIOR 9599 РУБ</b></h2>

                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(train, true)}
                  <div className="ml-2 text-big col">Поезд Екб-Нижний Новгород-Екб</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(bus, true)}
                  <div className="ml-2 text-big col">Трансфер с поезда до места</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(camping, true)}
                  <div className="ml-2 text-big col">Кемпинг «Гамма» (охрана, <br /> душ, туалет)</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(document, true)}
                  <div className="ml-2 text-big col">Страховка</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(tshirt, true)}
                  <div className="ml-2 text-big col">Фирменная атрибутика <br /> (футболка+стикер пак)</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(map, true)}
                  <div className="ml-2 text-big col">Обзорная экскурсия <br /> в Н.Новгород</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(photo, true)}
                  <div className="ml-2 text-big col">Фотосопровождение</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(help, true)}
                  <div className="ml-2 text-big col">Сопровождение на <br /> всех этапах поездки</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(chat, true)}
                  <div className="ml-2 text-big col">Закрытый чат <br /> участников поездки</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(percent, true)}
                  <div className="ml-2 text-big col">Беспроцентная рассрочка</div>
                </div>

              </div>

              <div className="swiper-slide col-md-6 col-sm-8 col-10">
                <h2 className="lead text-center"><b>PRO 14599 РУБ</b></h2>

                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(afpTicket, true)}
                  <div className="ml-2 text-big col">Билет категории Стандарт <br /> (скидка 20%)</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(train, true)}
                  <div className="ml-2 text-big col">Поезд Екб-Нижний Новгород-Екб</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(bus, true)}
                  <div className="ml-2 text-big col">Трансфер с поезда до места</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(camping, true)}
                  <div className="ml-2 text-big col">Кемпинг «Гамма» (охрана, <br /> душ, туалет)</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(document, true)}
                  <div className="ml-2 text-big col">Страховка</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(tshirt, true)}
                  <div className="ml-2 text-big col">Фирменная атрибутика <br /> (футболка+стикер пак)</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(map, true)}
                  <div className="ml-2 text-big col">Обзорная экскурсия <br /> в Н.Новгород</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(photo, true)}
                  <div className="ml-2 text-big col">Фотосопровождение</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(help, true)}
                  <div className="ml-2 text-big col">Сопровождение на всех <br /> этапах поездки</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(chat, true)}
                  <div className="ml-2 text-big col">Закрытый чат <br /> участников поездки</div>
                </div>
                <div className="row no-gutters align-items-center mb-2" style={{ height: '60px' }}>
                  {bgIcon(percent, true)}
                  <div className="ml-2 text-big col">Беспроцентная рассрочка</div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="sbox">
        <div className="container">
          <div className='col-lg-10 col-md-9 col-12 mx-auto px-0'>
            <div className="text-center mb-4">
              {titleBg('Фотогалерея', true)}
            </div>

            <div ref={gallery} className="swiper-container gallery">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <img src="https://pp.userapi.com/c850016/v850016515/5849a/ou3aU14td8M.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="https://pp.userapi.com/c850016/v850016515/5868e/zAVmaSuZqlM.jpg" alt="" />
                </div>


              </div>
            </div>


            <div className="gallery-control-next"><img src={controlNext} alt="" /></div>
            <div className="gallery-control-prev"><img src={controlPrev} alt="" /></div>
          </div>
        </div>
      </section>

      {!isLoading &&
        <section className="sbox">
          <div className="container">
            <div className="row justify-content-center">

              {tariffs.map((tariff, index) =>
                <div key={index} className="col-lg-6 col-12 mb-3">
                  {
                    cardPrice(
                      tariff.id,
                      afpBanner,
                      tariff.name,
                      tariff.description,
                      tariff.price,
                      'https://vk.com/katadze_afp?w=app5708398_-165710236',
                      paymentHandler,
                      isLoggedIn && isActivated,
                      tariff.parts,
                    )}
                </div>)}

            </div>
          </div>
        </section>}
    </main>
  )
}
