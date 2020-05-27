import React, { Component } from 'react'
import classNames from 'classnames'
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

  stop () {
    this.setState({
      showRoulette: false
    })
  }

  render () {
    const { showRoulette } = this.state
    return (
      <div className={classNames('container', {'orange-bg': !showRoulette })}>
        <div className='w1' onClick={this.stop.bind(this)} />
        <a className={showRoulette ? 'instagram-orange' : 'instagram'} href="https://www.instagram.com/wolko1/" target='_blank' />
        {showRoulette &&
          <Roulette stop={this.stop.bind(this)} />
        }
        {!showRoulette &&
          <div className='home-content'>
            <div className='title'>
              <h1>Conejo</h1>
              <p className='monospace'>Mamífero lagomorfo de la familia Leporidae</p>
            </div>
            <div className='hole-container'>
              <div className='ear ear-left'><div className='ear-line' /></div>
              <div className='ear ear-right'><div className='ear-line' /></div>
              <div className='hole' />
            </div>
            <div className='click-element' onClick={this.start.bind(this)}>Empezar</div>
          </div>
        }
        {!showRoulette &&
          <div className='footer'>
            <a href="https://github.com/marianomrph/random-image-roulette" target="_blank">
              <span className='github-icon' />
              <span>Disponible en Github.</span>
            </a>
            <p>Colaboración: Juan Manuel Vallejo.</p>
          </div>
        }
      </div>
    )
  }
}

export default App
