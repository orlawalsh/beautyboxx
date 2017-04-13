import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductApp from './App'; 
import About from './about.js'; 
import Contact from './App'; 
import  './App.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
 
ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={ProductApp}>
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      </Route>
  </Router>
), document.getElementById('root')) ;
