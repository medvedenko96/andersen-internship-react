import React, { Component } from 'react';

import style from './index.css';
import FilmsSearch from '../FilmsSearch'

export default class Header extends Component {

  getFilms = (query) => {
    this.setState({
      films: query
    })
    this.props.onGetFilmsInHeader(query)
  }

  render () {
    return (
      <header className={style.Header}>
        <h1>Kinofilms</h1>
        <FilmsSearch onGetFilmsInFilmsSearch={this.getFilms}/>
        <div className='twoButton'>
          <button>Sing in</button>
          <span> or </span>
          <button>Sing up</button>
        </div>
      </header>
    )
  }
}
