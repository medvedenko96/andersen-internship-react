import React, { Component } from 'react';
import queryFilms from './queryFilms'
import './index.css';

export default class FilmsSearch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value : ''
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    queryFilms(this.state.value).then(json => console.log(json))
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" value={ this.state.value } onChange={ this.handleChange} />
      </form>
    )
  }
}
