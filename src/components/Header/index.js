import React from 'react';
import { NavLink } from 'react-router-dom'

import style from './index.css';
import FilmsSearch from '../FilmsSearch'

export default function Header () {
  return (
    <header className={style.Header}>
      <NavLink to='/'>
        <h1>Kinofilms</h1>
      </NavLink>
      <FilmsSearch />
      <div className='twoButton'>
        <button>Sing in</button>
        <span> or </span>
        <button>Sing up</button>
      </div>
    </header>
  )
}
