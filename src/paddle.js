'use strict'

export default class Paddle {
  constructor(game) {
    this.game = game
    this.speed = 9
    this.move = false
    this.left = false
    this.right = false

    const gameArea = document.getElementById('gameArea')

    this.positionX = this.game.world.gameRect.left + 550
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

  resetPaddlePosition() {
    this.game.paddle.element.style.left = 850 + 'px'
  }

  resizePaddle(width) {}
  removePaddle() {
    let paddle = document.querySelector('#paddle')
    paddle.remove()
  }

  movePaddle() {
    let paddleCurrent = this.element.offsetLeft
    if (
      this.left &&
      this.element.offsetLeft > gameArea.getBoundingClientRect().left +5
    ) {
      paddleCurrent -= this.speed

      this.game.paddle.element.style.left = paddleCurrent + 'px'
    }

    if (
      this.right &&
      this.element.offsetLeft + this.width <
        gameArea.getBoundingClientRect().right -10
    ) {
      paddleCurrent += this.speed
      this.game.paddle.element.style.left = paddleCurrent + 'px'
    }
  }

  update(deltaTime) {
    if (!deltaTime) {
      return
    }

    this.movePaddle()
  }
}
