import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import  Header from './Header';

const App = () => (
  <div>
    <Header />
  </div>
)

render (
  <BrowserRouter>
    <Route exact path='/' component={App} />
  </BrowserRouter>,
  document.getElementById('root')
)
