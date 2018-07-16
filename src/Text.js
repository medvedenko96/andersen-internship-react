import React from 'react';

const divStyle = {
  color: 'blue',
  fontSize: '20px',
}

export default function Text (props){
    return React.createElement('div', { style: divStyle }, props.someText); 
}
