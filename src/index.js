       import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connexion from './Components/Connexion.js'
import * as serviceWorker from './serviceWorker'
import NotFound from './Components/NotFound.js';
// React ROOTER
import {BrowserRouter, Route, Switch} from 'react-router-dom'
const Root = () => (
  <BrowserRouter> 
    <Switch>
      //Nos routes
      <Route exact path='/' component={Connexion} />
      <Route path='/pseudo/:pseudo' component={App} /> 
      <Route component={NotFound} /> 
      <Route path='/pseudo/NotFound' component={NotFound} /> 
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
