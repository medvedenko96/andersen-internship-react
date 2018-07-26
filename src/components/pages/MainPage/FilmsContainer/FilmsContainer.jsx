import React, { Component } from 'react';
import { connect } from 'react-redux'

import styles from './FilmsContainer.css';
import FilmCard from './FilmCard/index'

class FilmsContainer extends Component {

  render () {

    return (
      <div className={styles.FilmsContainer}>
        {
          this.props.films.map(({ show, score }) => <FilmCard key={show.id}
            img={
              show.image ? show.image.medium : 'img/avatar.jpg'
            }
            name={show.name}
            score={score}
            id={show.id}
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

export default connect(mapStateToProps)(FilmsContainer);
