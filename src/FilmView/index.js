import React, { Component } from 'react';

import Header from '../Header'

export default class FilmView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      film : []
    }
  }

  render() {
    console.log(this.props.match.params)
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
            <div className='infoo'>
              <div className='summary'></div>

            </div>
          </div>
        </main>
      </div>
    )
  }
}