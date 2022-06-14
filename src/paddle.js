'use strict'
let speed = 1

export default class Paddle {
  constructor(game) {
    this.game = game

    const gameArea = document.getElementById('gameArea')

    this.positionX = this.game.world.gameRect.left + 1050
    this.positionY = this.game.world.gameRect.bottom - 40

    this.speedX = 2

    this.width = 100
    this.height = 20
    this.color = '#58afea'
    this.element = document.createElement('div')
    this.element.style.left = this.positionX + 'px'
    this.element.style.top = this.positionY + 'px'
    this.element.style.width = this.width
    this.element.style.height = this.height
    this.element.style.backgroundColor = this.color
    this.element.style.position = 'absolute'
    this.element.style.borderRadius = '50px'
    this.element.style.border = 'solid #555 2px'

    this.element.setAttribute('id', 'paddle')
    gameArea.append(this.element)
  }

  displayPaddle() {
    console.log('the paddle moves')
  }

  resizePaddle(width) {}

  movePaddle() {

  }

  update(deltaTime) {
    if (!deltaTime) {
      return
    }
    let paddleCurrent = this.element.offsetLeft
    paddleCurrent -= speed
    this.game.paddle.element.style.left = paddleCurrent + 'px'

    if(this.game.paddle.element.style.left <= gameArea.getBoundingClientRect().left){
      paddleCurrent = 0
    }
    // console.log('padlles:',paddleCurrent, this.game.paddle)
    console.dir (gameArea.getBoundingClientRect())
    // console.log(paddleCurrent)
  }
}
