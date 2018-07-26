import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './FilmView.css';
import { apiGetFilm } from '../../../actions/apiFilmActions';

class FilmView extends Component {
  componentDidMount() {
    this.props.loadDataFilm(this.props.match.params.id);
  }

  render() {
    const film = this.props.film;

    return(
      <div className={style.wrapper}>
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

const mapStateToProps = state => ({ film : state.film });

const mapDispatchToProps =  {
  loadDataFilm: apiGetFilm
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmView);
