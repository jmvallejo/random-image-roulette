import React, { Component } from 'react';
import './Roulette.scss'
import fs from 'fs'

const image1 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/01.jpg', { encoding: 'base64' })
const image2 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/02.jpg', { encoding: 'base64' })
const image3 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/03.jpg', { encoding: 'base64' })
const image4 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/04.jpg', { encoding: 'base64' })
const image5 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/05.jpg', { encoding: 'base64' })
const image6 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/06.jpg', { encoding: 'base64' })
const image7 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/07.jpg', { encoding: 'base64' })
const image8 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/08.jpg', { encoding: 'base64' })
const image9 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/09.jpg', { encoding: 'base64' })
const image10 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/10.jpg', { encoding: 'base64' })
const image11 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/11.jpg', { encoding: 'base64' })
const image12 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/12.jpg', { encoding: 'base64' })
const image13 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/13.jpg', { encoding: 'base64' })
const image14 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/14.jpg', { encoding: 'base64' })
const image15 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/15.jpg', { encoding: 'base64' })
const image16 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/16.jpg', { encoding: 'base64' })
const image17 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/17.jpg', { encoding: 'base64' })
const image18 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/18.jpg', { encoding: 'base64' })
const image19 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/19.jpg', { encoding: 'base64' })
const image20 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/20.jpg', { encoding: 'base64' })
const image21 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/21.jpg', { encoding: 'base64' })
const image22 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/22.jpg', { encoding: 'base64' })
const image23 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/23.jpg', { encoding: 'base64' })
const image24 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/24.jpg', { encoding: 'base64' })
const image25 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/25.jpg', { encoding: 'base64' })
const image26 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/26.jpg', { encoding: 'base64' })
const image27 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/27.jpg', { encoding: 'base64' })
const image28 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/28.jpg', { encoding: 'base64' })
const image29 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/29.jpg', { encoding: 'base64' })
const image30 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/30.jpg', { encoding: 'base64' })
const image31 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/31.jpg', { encoding: 'base64' })
const image32 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/32.jpg', { encoding: 'base64' })
const image33 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/33.jpg', { encoding: 'base64' })
const image34 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/34.jpg', { encoding: 'base64' })
const image35 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/35.jpg', { encoding: 'base64' })
const image36 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/36.jpg', { encoding: 'base64' })
const image37 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/37.jpg', { encoding: 'base64' })
const image38 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/38.jpg', { encoding: 'base64' })
const image39 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/39.jpg', { encoding: 'base64' })
const image40 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/40.jpg', { encoding: 'base64' })
const image41 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/41.jpg', { encoding: 'base64' })
const image42 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/42.jpg', { encoding: 'base64' })
const image43 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/43.jpg', { encoding: 'base64' })
const image44 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/44.jpg', { encoding: 'base64' })
const image45 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/45.jpg', { encoding: 'base64' })
const image46 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/46.jpg', { encoding: 'base64' })
const image47 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/47.jpg', { encoding: 'base64' })
const image48 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/48.jpg', { encoding: 'base64' })
const image49 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/49.jpg', { encoding: 'base64' })
const image50 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/50.jpg', { encoding: 'base64' })
const image51 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/51.jpg', { encoding: 'base64' })
const image52 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/52.jpg', { encoding: 'base64' })
const image53 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/53.jpg', { encoding: 'base64' })
const image54 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/54.jpg', { encoding: 'base64' })
const image55 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/55.jpg', { encoding: 'base64' })
const image56 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/56.jpg', { encoding: 'base64' })
const image57 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/57.jpg', { encoding: 'base64' })
const image58 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/58.jpg', { encoding: 'base64' })
const image59 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/59.jpg', { encoding: 'base64' })
const image60 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/60.jpg', { encoding: 'base64' })
const image61 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/61.jpg', { encoding: 'base64' })
const image62 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/62.jpg', { encoding: 'base64' })
const image63 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/63.jpg', { encoding: 'base64' })
const image64 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/64.jpg', { encoding: 'base64' })
const image65 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/65.jpg', { encoding: 'base64' })
const image66 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/66.jpg', { encoding: 'base64' })
const image67 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/67.jpg', { encoding: 'base64' })
const image68 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/68.jpg', { encoding: 'base64' })
const image69 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/69.jpg', { encoding: 'base64' })
const image70 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/70.jpg', { encoding: 'base64' })
const image71 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/71.jpg', { encoding: 'base64' })
const image72 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/72.jpg', { encoding: 'base64' })
const image73 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/73.jpg', { encoding: 'base64' })
const image74 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/74.jpg', { encoding: 'base64' })
const image75 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/75.jpg', { encoding: 'base64' })
const image76 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/76.jpg', { encoding: 'base64' })
const image77 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/77.jpg', { encoding: 'base64' })
const image78 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/78.jpg', { encoding: 'base64' })
const image79 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/79.jpg', { encoding: 'base64' })
const image80 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/80.jpg', { encoding: 'base64' })
const image81 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/81.jpg', { encoding: 'base64' })
const image82 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/82.jpg', { encoding: 'base64' })
const image83 = 'data:image/jpg;base64,' + fs.readFileSync(__dirname + '/../img/rabbits/83.jpg', { encoding: 'base64' })

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
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20,
      image21,
      image22,
      image23,
      image24,
      image25,
      image26,
      image27,
      image28,
      image29,
      image30,
      image31,
      image32,
      image33,
      image34,
      image35,
      image36,
      image37,
      image38,
      image39,
      image40,
      image41,
      image42,
      image43,
      image44,
      image45,
      image46,
      image47,
      image48,
      image49,
      image50,
      image51,
      image52,
      image53,
      image54,
      image55,
      image56,
      image57,
      image58,
      image59,
      image60,
      image61,
      image62,
      image63,
      image64,
      image65,
      image66,
      image67,
      image68,
      image69,
      image70,
      image71,
      image72,
      image73,
      image74,
      image75,
      image76,
      image77,
      image78,
      image79,
      image80,
      image81,
      image82,
      image83,
    ]

    this._questionsArray = [
      'Estamos locos, Lucas?',
      'Si los gatos arañan, las arañas gatean?',
      'Y si uno va a China, en los juguetes dice "Hecho aquí"?',
      'Si el rey se tira un pedo, es un gas noble?',
      'Si los zombies llegan a tu casa, Zombienvenidos?',
      'Un terapeuta son 1024 gigapeutas?'
    ]

    this.state = {
      running: true,
      currentImage: this._imageSrcArray[0],
      currentQuestion: null
    }
  }

  componentDidMount () {
    this.setupInterval()
  }

  componentWillUnmount () {
    if (this._changeImageInterval) {
      clearInterval(this._changeImageInterval)
    }
  }

  setupInterval () {
    this._changeImageInterval = setInterval(
      this.setRandomImage.bind(this),
      IMG_ROTATION_INTERVAL_MS
    )
    this.setState({
      running: true
    })
  }

  setRandomImage () {
    const newIndex = Math.floor(Math.random() * this._imageSrcArray.length)
    const currentImage = this._imageSrcArray[newIndex]
    this.setState({
      currentImage
    })
  }

  setRandomQuestion () {
    const newIndex = Math.floor(Math.random() * this._questionsArray.length)
    const currentQuestion = this._questionsArray[newIndex]
    this.setState({
      currentQuestion
    })
  }

  toggleInterval () {
    if (this._changeImageInterval) {
      clearInterval(this._changeImageInterval)
      this._changeImageInterval = null
      this.setState({
        running: false
      }, this.setRandomQuestion.bind(this))
    } else {
      this.setupInterval()
    }
  }

  render () {
    const { currentImage, running, currentQuestion } = this.state
    return (
      <div className='roulette'>
        <div className='btn' onClick={this.toggleInterval.bind(this)}><span /></div>
        <img src={currentImage} onClick={this.toggleInterval.bind(this)} />
        {!running && <div className='question'>{currentQuestion}</div>}
      </div>
    )
  }
}

export default Roulette
