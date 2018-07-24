import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import loadDataFilms from '../../actions/films';
import './index.css';

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

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" value={ this.state.value } onChange={ this.handleChange } />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDataFilms: bindActionCreators(loadDataFilms, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(FilmsSearch);
