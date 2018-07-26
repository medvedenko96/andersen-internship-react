import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apiGetFilms } from '../../../../actions/apiFilmActions';
import './FilmsSearch.css';

class FilmsSearch extends Component {
  state = {
    value : ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loadDataFilms(this.state.value);
  }

  componentDidMount(){
    this.nameInput.focus();
  }

  render () {

    return (
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          ref={(input) => { this.nameInput = input; }}
          value={ this.state.value }
          onChange={ this.handleChange } />
      </form>
    )
  }
}

const mapDispatchToProps = {
  loadDataFilms: apiGetFilms
}

export default connect(null, mapDispatchToProps)(FilmsSearch);
