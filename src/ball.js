'use strict'

export default class Ball {
  constructor(game) {
    this.game = game

    this.aRect
    this.bRect
    this.brick = document.getElementById('brick')

    const gameArea = document.getElementById('gameArea')

    this.positionX = this.game.world.gameRect.left + 600
    this.positionY = this.game.world.gameRect.top + 200
    this.speedX = 5
    this.speedY = 5
    this.width = 20
    this.height = 20
    this.color = 'wheat'
    this.element = document.createElement('div')
    this.element.style.left = this.positionX + 'px'
    this.element.style.top = this.positionY + 'px'
    this.element.style.width = this.width
    this.element.style.height = this.height
    this.element.style.backgroundColor = this.color
    this.element.style.position = 'absolute'
    this.element.style.borderRadius = '50px'
    this.element.style.border = 'solid #555 2px'

    this.element.setAttribute('id', 'ball')
    gameArea.append(this.element)

    let bricks = document.querySelectorAll('#brick')

  }

  showGameProperties() {}

  removeAllBalls() {
    let balls = document.querySelectorAll('#ball')
    balls.forEach((ball) => {
      ball.remove()
    })
  }

  changeBallColor(color) {
    this.element.style.backgroundColor = color
  }

  createRandomColor() {
    let maxVal = 0xffffff // 16777215
    let randomNumber = Math.random() * maxVal
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randColor = randomNumber.padStart(6, 0)
    return `#${randColor.toUpperCase()}`
  }

  moveBall() {
    this.positionX += this.speedX
    this.positionY += this.speedY

    this.element.style.left = `${this.positionX}px`
    this.element.style.top = `${this.positionY}px`
  }

  detectCollision() {
    if (
      this.positionX + this.width > this.game.world.gameRect.right ||
      this.positionX < this.game.world.gameRect.left
    ) {
      this.speedX *= -1
      this.game.scoreBoard.increaseScore(1)
      // this.game.sound.playPong()
    }

    if (
      this.positionY + this.height > this.game.world.gameRect.bottom ||
      this.positionY < this.game.world.gameRect.top
    ) {
      this.speedY *= -1
      this.game.scoreBoard.increaseScore(1)
      // this.game.sound.playPong()
    }
  }

  detectBrickCollision(ball, brick) {
    this.aRect = this.element.getBoundingClientRect()
    this.bRect = this.brick.getBoundingClientRect()

    let temp = this.aRect.top < this.brick.bottom

    if (this.aRect.top < this.bRect.bottom) {
      this.brick.remove()
    }

    let bricks = document.querySelectorAll('#brick')
    bricks.forEach((brick) => {})
  }

  update(deltaTime) {
    if (!deltaTime) {
      return
    }

    this.moveBall()
    this.detectCollision()

    if (this.game.gameObjects.length > 0 && this.brick) {
      this.detectBrickCollision(this, this.brick)
    }

    if (this.element.style.backgroundColor == 'white') {
    }
  }
}
