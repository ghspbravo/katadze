import React, { useEffect } from 'react'
import { Route, Switch } from "react-router-dom";

import demo from './pages/demo';
import header from './components/header/header';
import home from './pages/home';
import events from './pages/events/events';

import { useTransition, animated } from 'react-spring'
import footer from './components/footer/footer';
import about from './pages/about/about';
import faq from './pages/faq/faq';
import contacts from './pages/contacts/contacts';
import isMobile from './detectMobileBrowser';
import empty from './pages/empty';
import camp from './pages/events/camp/camp';
import partners from './pages/partners/partners';
import partnersSingle from './pages/partners/partnersSingle';
import profile from './pages/profile/profile';
import login from './pages/auth/login';

import { useStore, useActions } from 'easy-peasy';
import register from './pages/auth/register';
import activate from './pages/auth/activate';
import acquiring from './pages/orderSuccess';


export default function App(router) {
  const refreshTokens = useActions(actions => actions.auth.refreshTokens)
  const getUserInfo = useActions(actions => actions.profile.getUserInfo)
  const getStatus = useActions(actions => actions.membership.getStatus)
  const hasRefreshToken = useStore(store => store.auth.refresh)

  useEffect(() => {
    hasRefreshToken && refreshTokens().then(() => 
      getUserInfo().then(() => {
        getStatus()
      }))
  }, [])

  const pageTransitions = useTransition(router.location, router.location.key, {
    from: { opacity: 0 },
    enter: [
      { life: '100%' },
      { opacity: 1 },
    ],
    leave: [
      { opacity: 0 },
      { life: '0%' },
    ],
    config: {
      duration: 300
    },
  })

  useEffect(() => {
    window.scroll(0, 0)
  }, [router.location.pathname])

  // Disable hover on mobile
  useEffect(() => {
    if (isMobile()) document.body.classList.add('touch')
  }, [])

  return (
    <div id="body">
      <header>
        <Switch>
          <Route exact path='/' />
          <Route component={header} />
        </Switch>
      </header>
      {pageTransitions.map(({ item, props, key }) => (
        <animated.div className="wrapper" key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={home} />

            <Route exact path="/login" component={login} />
            <Route exact path="/register" component={register} />

            <Route path="/partners/" component={partners} />
            <Route exact path="/partner/:id" component={partnersSingle} />

            <Route exact path="/events/" component={events} />
            <Route exact path="/events/camp" component={camp} />

            <Route path="/profile/" component={profile} />

            <Route exact path="/about/" component={about} />
            <Route exact path="/faq/" component={faq} />
            <Route exact path="/contacts/" component={contacts} />
            <Route exact path="/demo/" component={demo} />
            
            <Route exact path="/payment/success" component={acquiring} />

            <Route exact path="/activate/:uidb64/:token" component={activate} />

            <Route component={empty} />
          </Switch>

          <footer>
            <Switch>
              <Route exact path='/' />
              <Route component={footer} />
            </Switch>
          </footer>
        </animated.div>
      ))}
    </div>
  )
}