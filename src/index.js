import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import 'normalize.css';
import './bootstrap-grid.css'
import './index.scss';
import 'swiper/dist/css/swiper.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

import { StoreProvider, createStore } from 'easy-peasy';
import { model } from './model';

const logger = store => next => action => {
  console.log(action)
  return next(action)
}

const store = createStore(model, {
	initialState: {
		auth: {
			// access: localStorage.getItem('access'),
			refresh: localStorage.getItem('refresh'),
		},
		profile: {
			id: localStorage.getItem('user'),
		}
	},
	middleware: [logger]
})

ReactDOM.render((
	<BrowserRouter>
	 <StoreProvider store={store}>
		 <Route component={App} />
	 </StoreProvider>
	</BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
