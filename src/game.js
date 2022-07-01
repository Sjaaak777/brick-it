'use strict'
import PhysicsEngine from './controllerPhysics.js'
import Menu from './menu.js'
import World from './world.js'
import ScoreBoard from './scoreBoard.js'
import Ball from './ball.js'
import Brick from './brick.js'
import Paddle from './paddle.js'
import Sound from './sound.js'
import InputController from './inputController.js'

const numberOfBricks = 12

export default class Game {
  constructor() {}

  init() {
    this.physicsEngine = new PhysicsEngine(this)
    this.gameObjects = []
    this.bricks = []
    this.paddles = []
    this.menu = new Menu(this)
    this.world = new World(this)
    this.scoreBoard = new ScoreBoard(this)
    this.inputController = new InputController(this)
    this.pong = new Audio('sounds/pong.mp3')
    this.sound = new Sound(this)
    this.ball = new Ball(this)
    this.ball.removeAllBalls()
    this.scoreBoard.resetScore()
    this.gameObjects.length = 0
    this.spawnPaddle()
    this.spawnBricks()
  }

  resetGame() {
    this.ball.removeAllBalls()
    this.scoreBoard.resetScore()
    this.gameObjects.length = 0
    this.gameObjects.push(new Ball(this))
    this.spawnBricks()
    this.paddle.resetPaddlePosition()
  }

  spawnBricks() {
    for (let bricks = 1; bricks < numberOfBricks; bricks++) {
      this.bricks.push(
        new Brick(this, (190 * bricks) / 2, 60, 'images/brick-green.png')
      )

      this.bricks.push(
        new Brick(this, (190 * bricks) / 2, 100, 'images/brick-purple.png')
      )
      this.bricks.push(
        new Brick(this, (190 * bricks) / 2, 140, 'images/brick-aqua.png')
      )
      this.bricks.push(
        new Brick(this, (190 * bricks) / 2, 180, 'images/brick-blue.png')
      )
      this.bricks.push(
        new Brick(this, (190 * bricks) / 2, 220, 'images/brick-green.png')
      )
      this.bricks.push(
        new Brick(this, (190 * bricks) / 2, 260, 'images/brick-purple.png')
      )
      this.bricks.push(
        new Brick(this, (190 * bricks) / 2, 300, 'images/brick-aqua.png')
      )
      this.bricks.push(
        new Brick(this, (190 * bricks) / 2, 340, 'images/brick-blue.png')
      )
      // console.log(bricks)
    }
  }

  spawnBall() {
    this.gameObjects.push(new Ball(this))
  }

  spawnPaddle() {
    this.paddle = new Paddle(this)
    this.paddles.push(this.paddle)
  }

  update(deltaTime) {
    ;[...this.gameObjects, ...this.paddles].forEach((object) =>
      object.update(deltaTime)
    )

    // GAME LOGIC HERE OR BETTER IN EVERY CLASS WITH METHODS?
  }
}
