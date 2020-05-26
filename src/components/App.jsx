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
          <div className='w1' />
          <a className='instagram' href="https://www.instagram.com/wolko1/" target='_blank' />
          <h1>Conejo</h1>
          <p className='monospace'>Mamífero lagomorfo de la familia Leporidae.</p>
          <div className='hole'/>
          <p>Corre, conejo corre! Cava ese hoyo!</p>
          <div className='click-element' onClick={this.start.bind(this)}>
            <div className='arrow' />
          </div>
        </div>
      )
    }
  }
}

export default App
