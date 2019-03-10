import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import demo from './pages/demo';
import header from './components/header/header';

export default function App() {
  return (
    <Router>
      <div>
        <header>
          {header()}
        </header>
        <div className="wrapper">
          <Route path="/demo/" component={demo} />
        </div>
        <footer></footer>
      </div>
    </Router>
  )
}