import React, { Component } from 'react';

const divStyle = {
  color: 'blue',
  fontSize: '20px',
}

export default class Text extends Component {
  render() {
    return React.createElement('div', {style: divStyle}, this.props.someText);
  }
}