import React from 'react';

import Header from './Header/index';
import FilmsContainer from './FilmsContainer/index';
import style from './App.css';

export default function (){
  return(
    <div className={style.Wrapper}>
      <Header/>
      <FilmsContainer />
    </div>
  )
}

