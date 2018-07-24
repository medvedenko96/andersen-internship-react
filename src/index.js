import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/App';
import FilmView from './components/FilmView';

render (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/film/:id' component={FilmView} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
