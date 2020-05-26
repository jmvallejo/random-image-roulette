import React, { Component } from 'react';
import './Roulette.scss'
import fs from 'fs'

const image1 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/01.jpg', { encoding: 'base64' })
const image2 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/02.jpg', { encoding: 'base64' })
const image3 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/03.jpg', { encoding: 'base64' })
const image4 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/04.jpg', { encoding: 'base64' })
const image5 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/05.jpg', { encoding: 'base64' })
const image6 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/06.jpg', { encoding: 'base64' })
const image7 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/07.jpg', { encoding: 'base64' })
const image8 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/08.jpg', { encoding: 'base64' })
const image9 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/09.jpg', { encoding: 'base64' })
const image10 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/10.jpg', { encoding: 'base64' })

const IMG_ROTATION_INTERVAL_MS = 100

class Roulette extends Component {
  constructor (props) {
    super(props)
    this._imageSrcArray =  [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
    ]

    this.state = {
      currentImage: this._imageSrcArray[0]
    }
  }

  componentDidMount () {
    this.setupInterval()
    document.addEventListener('click', this.toggleInterval.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.toggleInterval.bind(this))
    if (this._changeImageInterval) {
      clearInterval(this._changeImageInterval)
    }
  }

  setupInterval () {
    this._changeImageInterval = setInterval(
      this.setRandomImage.bind(this),
      IMG_ROTATION_INTERVAL_MS
    )
  }

  setRandomImage () {
    const newIndex = Math.floor(Math.random() * this._imageSrcArray.length)
    const currentImage = this._imageSrcArray[newIndex]
    this.setState({
      currentImage
    })
  }

  toggleInterval () {
    if (this._changeImageInterval) {
      clearInterval(this._changeImageInterval)
      this._changeImageInterval = null
    } else {
      this.setupInterval()
    }
  }

  render () {
    const { currentImage } = this.state
    return (
      <div className='roulette'>
        <img src={currentImage} />
      </div>
    )
  }
}

export default Roulette