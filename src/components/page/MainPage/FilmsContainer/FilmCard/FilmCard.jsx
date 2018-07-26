import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';

import styles from './FilmCard.css';

export default class FilmCard extends Component {

  render() {
    return (
      <NavLink className={styles.FilmCard}  to={`/film/${this.props.id}`}>
        <img src={this.props.img} alt={this.props.name}/>
        <div>
          <div className='nameFilm'>
            {this.props.name}
          </div>
          <div className='ScoreFilm'>
            {this.props.score}
          </div>
        </div>
      </NavLink>
    )
  }
}
