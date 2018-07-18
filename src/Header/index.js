import React, { Component } from 'react';

import './index.css';
import FilmsSearch from '../FilmsSearch'

export default class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      films : ''
    }
  }

  getFilms = (query) => {
    this.setState({
      films: query
    })
    this.props.onGetFilmsInHeader(query)
  }

  render () {
    return (
      <header>
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
