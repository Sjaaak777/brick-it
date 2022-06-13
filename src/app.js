'use strict'

import Menu from './menu.js'
import ScoreBoard from './scoreBoard.js'
import World from './world.js'
import Ball from './ball.js'

export default class Game {
  constructor() {
    this.start()
  }
  start() {
    this.menu = new Menu(this)
    this.world = new World(this)
    this.scoreBoard = new ScoreBoard(this)
    this.ball = new Ball(this)
    this.ball.changeBallColor()
  }

  update() {
    window.requestAnimationFrame(game.update)
  }
}

const game = new Game()

game.ball.changeBallColor()
