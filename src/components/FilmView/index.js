import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import style from './index.css';
import Header from '../Header/index';
import loadDataFilm from '../../actions/film';


class FilmView extends Component {

  state = {
    filmId : this.props.match.params.id
  }

  componentWillMount() {
    this.props.loadDataFilm(this.state.filmId)
  }

  render() {
    const film = this.props.film;
    return(
      <div className={style.wrapper}>
        <Header />
        <main>
            <h2>{film.name}</h2>
         <div className={style.infoWrapper}>
           <div className={style.imageWrapper}>
             <img src={
               film.image ? film.image.medium : 'img/avatar.jpg'
             } alt={film.name}/>
           </div>
           <div>
             <div className={style.info}>
               <div className='summary' dangerouslySetInnerHTML={{__html : film.summary}} />
               <p><strong>Show Type: </strong> {film.type}</p>
               <p><strong>Premiered: </strong> {film.premiered}</p>
               <p><strong>OfficialSite: </strong> {film.officialSite}</p>
             </div>
           </div>
         </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    film : state.film
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDataFilm: bindActionCreators(loadDataFilm, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmView)
