import React, { Component } from 'react'
import Roulette from './Roulette'
import './App.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showRoulette: false
    }
  }

  start () {
    this.setState({
      showRoulette: true
    })
  }

  render () {
    const { showRoulette } = this.state
    if (showRoulette) {
      return <Roulette />
    } else {
      return (
        <div className='start-screen'>
          <div className='click-element' onClick={this.start.bind(this)}>
            Click to start roulette
          </div>
        </div>
      )
    }
  }
}

export default App