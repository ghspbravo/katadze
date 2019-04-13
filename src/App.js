import React, { useEffect } from 'react'
import { Route, Switch } from "react-router-dom";

import demo from './pages/demo';
import header from './components/header/header';
import home from './pages/home';
import events from './pages/events';
import eventSingle from './pages/eventSingle';

import { useTransition, animated } from 'react-spring'
import footer from './components/footer/footer';
import about from './pages/about';
import faq from './pages/faq';
import contacts from './pages/contacts';
import isMobile from './detectMobileBrowser';
import empty from './pages/empty';

export default function App(router) {

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

            <Route exact path="/events/" component={events} />
            <Route exact path="/events/:id" render={props => eventSingle(props)} />

            <Route path="/about/" component={about} />
            <Route path="/faq/" component={faq} />
            <Route path="/contacts/" component={contacts} />
            <Route path="/demo/" component={demo} />

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