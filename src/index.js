import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import  App from './App';
import FilmView from './FilmView'


render (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/film/:id' component={FilmView} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
