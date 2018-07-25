import React from 'react';

import Header from '../Header';
import FilmsContainer from '../FilmsContainer';
import style from './MainPage.css';

export default function (){
  return(
    <div className={style.Wrapper}>
      <Header/>
      <FilmsContainer />
    </div>
  )
}

