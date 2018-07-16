import React from 'react';
import { render } from 'react-dom';
import Text from './Text';

render(
  React.createElement(
    "div",
    null,
    React.createElement(Text, { someText: 'text' }),
    React.createElement("img", { src: "http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png", alt: "react" })
  ), document.getElementById('root')
);
