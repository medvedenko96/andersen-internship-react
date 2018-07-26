import React from 'react';
import { NavLink } from 'react-router-dom'

import style from './Header.css';
import FilmsSearch from './FilmsSearch/FilmsSearch'

export default function Header () {

  return (
    <header className={style.Header}>
      <NavLink to='/'>
        <h1>Kinofilms</h1>
      </NavLink>
      <FilmsSearch />
    </header>
  )
}
