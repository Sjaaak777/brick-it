'use strict'

export default class Ball {
  constructor(game) {
    this.game = game

    const gameArea = document.getElementById('gameArea')

    this.positionX = this.game.world.gameRect.left + 600
    this.positionY = this.game.world.gameRect.top + 200
    this.speedX = 4
    this.speedY = 4
    this.width = 20
    this.height = 20
    this.color = 'orange'
    this.element = document.createElement('div')
    this.element.style.left = this.positionX + 'px'
    this.element.style.top = this.positionY + 'px'
    this.element.style.width = this.width
    this.element.style.height = this.height
    this.element.style.backgroundColor = this.color
    this.element.style.position = 'absolute'
    this.element.style.borderRadius = '50px'

    this.element.setAttribute('id', 'ball')
    gameArea.append(this.element)
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
      this.changeBallColor(this.createRandomColor())
      this.game.scoreBoard.increaseScore(1)
    }

    if (
      this.positionY + this.height > this.game.world.gameRect.bottom ||
      this.positionY < this.game.world.gameRect.top
    ) {
      this.speedY *= -1
      this.changeBallColor(this.createRandomColor())
          this.game.scoreBoard.increaseScore(1)
    }


  }

  update(deltaTime) {
    if (!deltaTime) {
      return
    }

    this.moveBall()
    this.detectCollision()

    if (this.element.style.backgroundColor == 'white') {
    }
  }
}
