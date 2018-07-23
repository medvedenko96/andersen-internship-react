import React, { Component } from 'react';

import queryFilms from './queryFilms'
import './index.css';

export default class FilmsSearch extends Component {

  state = {
    value : ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
     this.props.onGetFilmsInFilmsSearch(queryFilms(this.state.value))
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" value={ this.state.value } onChange={ this.handleChange} />
      </form>
    )
  }
}
