import React, { Component } from 'react';
import style from './index.css'

import Header from '../Header'


export default class FilmView extends Component {

  state = {
    filmId : this.props.match.params.id,
    filmInfo : {}
  }

  componentWillMount() {
    fetch(`http://api.tvmaze.com/shows/${this.state.filmId}`)
    .then(res => res.json())
    .then(data => this.setState({ filmInfo : data }))

  }

  render() {
   console.log(this.state.filmInfo)
    return(
      <div className={style.wrapper}>
        <Header />
        <main>
            <h2>{this.state.filmInfo.name}</h2>
         <div className={style.infoWrapper}>
           <div className={style.imageWrapper}>
             <img src={
               this.state.filmInfo.image ? this.state.filmInfo.image.medium : 'img/avatar.jpg'
             } alt=""/>
           </div>
           <div>
             <div className={style.info}>
               <div className='summary' dangerouslySetInnerHTML={{__html : this.state.filmInfo.summary}} />
               <p><strong>Show Type: </strong> {this.state.filmInfo.type}</p>
               <p><strong>Premiered: </strong> {this.state.filmInfo.premiered}</p>
               <p><strong>OfficialSite: </strong> {this.state.filmInfo.officialSite}</p>
             </div>
           </div>
         </div>
        </main>
      </div>
    )
  }
}
