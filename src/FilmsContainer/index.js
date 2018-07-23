import React, { Component } from 'react';

import styles from './index.css';
import FilmCard from '../FilmCard'

export default class FilmsContainer extends Component {

  render () {
    console.log(this.props.dataFilms)
    return (
      <div className={styles.FilmsContainer}>
        {
          this.props.dataFilms.map((film) => <FilmCard key={film.show.id}
            img={
              film.show.image ? film.show.image.medium : 'img/avatar.jpg'
            }
            name={film.show.name}
            score={film.score} 
            id={film.show.id}
            />
          )
        }
      </div>
    )
  }
}
