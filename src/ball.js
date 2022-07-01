'use strict'

export default class Ball {
  constructor(game) {
    this.game = game
    this.aRect
    this.bRect
    this.brick = document.getElementById('brick')
    const gameArea = document.getElementById('gameArea')
    this.positionX = this.game.world.gameRect.left + 600
    this.positionY = this.game.world.gameRect.top + 550
    this.speedX = 5
    this.speedY = -5
    this.width = 20
    this.height = 20
    this.color = 'wheat'
    this.element = document.createElement('div')
    this.ballRectangle = this.element.getBoundingClientRect()
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

  detectWorldCollision() {
    if (
      this.positionX + this.width > this.game.world.gameRect.right ||
      this.positionX < this.game.world.gameRect.left
    ) {
      this.speedX *= -1
      // this.game.scoreBoard.increaseScore(1)
      // this.game.sound.playPong()
    }

    if (
      this.positionY + this.height > this.game.world.gameRect.bottom ||
      this.positionY < this.game.world.gameRect.top
    ) {
      this.speedY *= -1
      // this.game.scoreBoard.increaseScore(-1)
      // this.game.sound.playPong()
    }
  }

  detectBrickCollision() {
    this.game.physicsEngine.brickCollisionDetection(
      this.game,
      this,
      this.game.bricks
    )
   
  }

  detectPaddleCollision() {
    if (
      this.game.physicsEngine.collisionDetection(
        this.element.getBoundingClientRect(),
        this.game.paddle.element.getBoundingClientRect()
      )
    ) {
      let paddleCenter =
        (this.element.getBoundingClientRect().left -
          this.game.paddle.element.offsetLeft -
          this.game.paddle.element.getBoundingClientRect().width / 2) /
        10 

      this.speedX = paddleCenter
      this.speedY *= -1
      this.game.paddle.element.style.backgroundColor = 'orange'
    }
  }

  update(deltaTime) {
    if (!deltaTime) {
      return
    }

    this.detectPaddleCollision()
    this.detectBrickCollision()

    this.moveBall()
    this.detectWorldCollision()

    if (this.element.style.backgroundColor == 'white') {
    }
  }
}
