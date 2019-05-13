import React, { useEffect, useState, useCallback } from 'react'
import { parseSearchUri, filterPartnersByName, filterPartnersByCity } from './partnersSearch/partnersSearch';
import { useStore, useActions } from 'easy-peasy';
import cardPartner from '../../components/card/cardPartner';

import { useFormState } from 'react-use-form-state';
import Portal from '../../components/modal/modalTest'
import placeholder from './placeholder.svg'
import partnersSearch from './partnersSearch/partnersSearch.jsx';
/**
* Filter partners list by title and/or city
* @param {{title: string, city: string}} query 
* @param {Object[]} data 
* 
* @returns {Object[]} search result
*/
function filterPartners(query, data) {
  let filterResults = filterPartnersByName(query.title, data)
  if (query.city) filterResults = filterPartnersByCity(query.city, filterResults)

  return filterResults
}

export default function partnersSearchList(router) {

  const getPartners = useActions(actions => actions.partners.getPartners)
  const partners = useStore(store => store.partners.partnerList)

  const SubsciptionLoading = useStore(store => store.partners.isSubsciptionLoading)

  useEffect(() => {
    !partners.length && getPartners()
    !Object.keys(coupons).length && getCouponsAuth()
  }, [])

  const [partnersResult, setPartnersResult] = useState(undefined)

  useEffect(() => {
    if (Object.values(partners).length === 0) return

    const parsedUri = parseSearchUri(router.location.search),
      query = parsedUri[0],
      filterCity = parsedUri[1]

    setPartnersResult(filterPartners({
      title: query,
      city: filterCity
    }, partners))

  }, [partners.length])



  const handleActivateCoupon = useCallback(id => {
    activateCoupon(id).then(isSuccess => {
      setCurrentPartner(id)
      setFeedbackOpen(isSuccess)
      setFeedbackStatus(undefined)
    })
  })
  const isMember = useStore(store => store.membership.expiredAt)
  const getCouponsAuth = useActions(actions => actions.partners.getCouponsAuth)
  const coupons = useStore(store => store.partners.coupons)
  const activateCoupon = useActions(actions => actions.partners.activateCoupon)
  const complain = useActions(actions => actions.tickets.partner)

  const positiveFeedback = useCallback((e) => {
    setFeedbackStatus(true)
  })

  const negativeFeedback = useCallback((e) => {
    setFeedbackStatus(false)
  })

  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [feedbackStatus, setFeedbackStatus] = useState(undefined)
  const [feedbackSended, setFeedbackSended] = useState(false)
  const [currentPartner, setCurrentPartner] = useState(false)

  const [formState, { textarea }] = useFormState();

  const submitHandler = async (e) => {
    e.preventDefault()
    const result = await complain({
      couponId: currentPartner,
      success: 0,
      complain: formState.values.complain
    })

    setFeedbackSended(result)
  }

  // thumbs
  const [partnersState, setPartnersState] = useState([])

  useEffect(() => {

    if (partnersResult === undefined || !partnersResult.length) return
    setPartnersState(prevState => {
      prevState = []
      partnersResult.forEach((item, index) => {

        prevState.push(false)

        const buffer = new Image();
        buffer.onload = () => setPartnersState(prevState => {
          prevState[index] = true
          return { ...prevState }
        })
        buffer.src = item.img;
      })

      return prevState
    })

  }, [partnersResult])

  return (
    <div className="container">
      {/* Partner's search */}
      <div className="col-lg-10 px-0 mb-4">
        {partnersSearch(router)}
      </div>

      <Portal isOpen={feedbackOpen} id='modals-root' closeModal={() => setFeedbackOpen(false)}>
        <div className="col-lg-6 col-sm-8 col-12 px-0 mx-auto">
          <h4 className="text-center">Активировано</h4>
          {feedbackStatus === true
            ? <div>
              <i className="partners-feedback-icon fas fa-check-circle"></i>
              <h5>Ура!</h5>
              <p>Мы рады создавать возможности для тебя</p>
            </div>
            : feedbackStatus === false
              ? <div>
                <i className="partners-feedback-icon fas fa-times-circle"></i>
                <h5>Сожалеем :(</h5>
                {feedbackSended
                  ? <p>Благодарим за отзыв! В ближайшее время свяжемся с парнером и уточним детали</p>
                  : <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="complain">Напиши нам в чем причина</label>
                      <textarea {...textarea('complain')} name="complain" id="complain" cols="30" rows="4"></textarea>
                      {!formState.validity.complain &&
                        <div className="form-error col-12 px-0">{formState.errors.complain}</div>}
                    </div>
                    <button>Отправить</button>
                  </form>}
              </div>
              : null
          }
          {feedbackStatus === undefined
            ? <div>
              <p>Получил ли ты скидку?</p>

              <div className="row no-gutters">
                <button className="partners-feedback-button no-style" onClick={positiveFeedback}><i className="fas fa-thumbs-up"></i></button>

                <button className="partners-feedback-button no-style ml-auto" onClick={negativeFeedback}><i className="fas fa-thumbs-down"></i></button>
              </div>
            </div>
            : null}
        </div>
      </Portal>
      {partnersResult === undefined
        ? <p>loading...</p>
        : partnersResult.length
          ? <div className="row justify-content-center">
            {partnersResult.map((partner, index) => <div key={index} className="col-md-6 col-12 mb-3">
              {cardPartner(
                partner.id,
                { original: partner.img, placeholder, originalReady: partnersState[index] },
                partner.title,
                partner.description,
                coupons[partner.id],
                isMember,
                handleActivateCoupon,
                SubsciptionLoading,
              )}
            </div>)}
          </div>
          : <p>Поиск не дал результатов</p>}
    </div>
  )
}
