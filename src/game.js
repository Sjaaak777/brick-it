'use strict'

import Menu from './menu.js'
import World from './world.js'
import ScoreBoard from './scoreBoard.js'
import Ball from './ball.js'
import Brick from './brick.js'
import Paddle from './paddle.js'
import Sound from './sound.js'
import InputController from './inputController.js'

export default class Game {
  constructor() {}

  init() {
    this.gameObjects = []
    this.bricks = []
    this.menu = new Menu(this)
    this.world = new World(this)
    this.scoreBoard = new ScoreBoard(this)
    // this.gameObjects.push(new Paddle(this))
    this.inputController = new InputController(this)

    this.pong = new Audio('sounds/pong.mp3')

    this.sound = new Sound(this)

    this.brick = new Brick(this, 600, 30, 'images/brick-green.png')
    this.brick = new Brick(this, 290, 30, 'images/brick-purple.png')
    this.brick = new Brick(this, 380, 30, 'images/brick-blue.png')
    this.brick = new Brick(this, 470, 30, 'images/brick-aqua.png')

    this.ball = new Ball(this)
    // this.paddle = new Paddle(this)

    this.ball.removeAllBalls()

    this.scoreBoard.resetScore()
    this.gameObjects.length = 0
    this.spawnPaddle()
  }

  resetGame() {
    this.ball.removeAllBalls()
    this.brick.removeAllBricks()
    this.scoreBoard.resetScore()
    this.gameObjects.length = 0
    this.gameObjects.push(new Ball(this))
    this.spawnBricks()
  }

  spawnBricks() {
    this.brick = new Brick(this, 200, 30, 'images/brick-green.png')
    // this.brick = new Brick(this, 290, 30, 'images/brick-purple.png')
    this.brick = new Brick(this, 380, 30, 'images/brick-blue.png')
    this.brick = new Brick(this, 470, 30, 'images/brick-aqua.png')
  }

  spawnBall() {
    this.gameObjects.push(new Ball(this))
  }

  spawnPaddle() {
    this.paddle = new Paddle(this)
    this.gameObjects.push(this.paddle)
  }

  update(deltaTime) {
    ;[...this.gameObjects].forEach((object) => object.update(deltaTime))

    // GAME LOGIC HERE OR BETTER IN EVERY CLASS WITH METHODS?
  }
}
