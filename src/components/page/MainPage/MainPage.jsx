import React from 'react';

import FilmsContainer from './FilmsContainer/index';
import style from './MainPage.css';

export default function (){
  return(
    <div className={style.Wrapper}>
      <FilmsContainer />
    </div>
  )
}

