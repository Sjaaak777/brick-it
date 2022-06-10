'use strict'

import Menu from './menu.js'
import World from './world.js'
import ScoreBoard from './scoreBoard.js'
import Ball from './ball.js'

export default class Game {
  constructor() {}

  init() {
    this.gameObjects = []
    this.menu = new Menu(this)
    this.world = new World(this)
    this.scoreBoard = new ScoreBoard(this)
    this.ball = new Ball(this)

    this.ball.removeAllBalls()
    this.scoreBoard.resetScore()
    this.gameObjects.length = 0
  }

  resetGame() {
    this.ball.removeAllBalls()
    this.scoreBoard.resetScore()
    this.gameObjects.length = 0
  }

  spawnBall() {
    this.gameObjects.push(new Ball(this))
  }

  update(deltaTime) {
    ;[...this.gameObjects].forEach((object) => object.update(deltaTime))
    if (this.scoreBoard.score > 2) {
    }

    // GAME LOGIC HERE OR BETTER IN EVERY CLASS WITH METHODS?
  }
}
