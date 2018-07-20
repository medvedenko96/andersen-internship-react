import React, { Component } from 'react';

import Header from '../Header'

export default class FilmView extends Component {

  state = {
    film : ''
  }

  componentWillMount() {
    fetch()
      this.setState({
        film : this.props.match.params.id
      })
  }

  render() {
    console.log(this.state.film)
    return(
      <div>
        <Header />
        <main>
          <div className='name'>

          </div>
          <div>
            <img src="" alt=""/>
          </div>
          <div>
            <div className='info'>
              <div className='summary'></div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
