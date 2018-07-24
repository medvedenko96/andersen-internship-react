import React, { Component } from 'react';
import { connect } from 'react-redux'

import styles from './index.css';
import FilmCard from '../FilmCard'

class FilmsContainer extends Component {

  render () {
    return (
      <div className={styles.FilmsContainer}>
        {
          this.props.films.map((film) => <FilmCard key={film.show.id}
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

function mapStateToProps (state) {
  return  {
    films : state.films
  }
}

export default connect(mapStateToProps)(FilmsContainer)