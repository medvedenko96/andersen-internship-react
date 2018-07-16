import React from 'react';

const divStyle = {
  color: 'blue',
  fontSize: '20px',
}

export const Text = ({someText}) => <div style={divStyle}>{someText}</div> ;
