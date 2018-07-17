import React from 'react';
import './index.css';
import FilmsSearch from '../FilmsSearch'

export default function Header() {
  return (
    <header>
      <h1>Kinofilms</h1>
      <FilmsSearch />
      <div className='twoButton'>
        <button>Sing in</button>
        <span> or </span>
        <button>Sing up</button>
      </div>
    </header>
  )
}
