import React, { Component } from 'react';

import Header from './Header';
import FilmsContainer from  './FilmsContainer'
import style from './App.css'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data : []
    }
  }

  getFilms = (query) => {
    query.then(data => this.setState({ data }));
  }

  render () {
    return(
      <div className={style.Wrapper}>
        <Header onGetFilmsInHeader={this.getFilms} />
        <FilmsContainer dataFilms={this.state.data}/>
      </div>
    )
  }

}
