import React, { Component } from 'react';
import './Roulette.scss'
import image1 from '../img/01.jpg'
import image2 from '../img/02.jpg'
import image3 from '../img/03.jpg'
import image4 from '../img/04.jpg'
import image5 from '../img/05.jpg'
import image6 from '../img/06.jpg'
import image7 from '../img/07.jpg'
import image8 from '../img/08.jpg'
import image9 from '../img/09.jpg'
import image10 from '../img/10.jpg'

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