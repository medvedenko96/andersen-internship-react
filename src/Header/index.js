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

  getFilms = (json) => {
    this.setState({
      films: this.props.onGetFilms(json)
    })
  }

  render () {
    return (
      <header>
        <h1>Kinofilms</h1>
        <FilmsSearch onGetFilms={this.getFilms}/>
        <div className='twoButton'>
          <button>Sing in</button>
          <span> or </span>
          <button>Sing up</button>
        </div>
      </header>
    )
  }
}
