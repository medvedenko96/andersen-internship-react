import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import MainPage from './components/page/MainPage';
import FilmView from './components/page/FilmView';
import Header from  './components/common/Header';
import style from './components/page/MainPage/MainPage.css';

render (
  <Provider store={store}>
    <BrowserRouter>
      <div className={style.Wrapper}>
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/film/:id' component={FilmView} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
