'use strict'
import Game from './game.js'
let game = new Game()

game.init()

let lastTime = 0

function gameLoop(timeStamp) {
  let deltaTime = lastTime - timeStamp
  lastTime = timeStamp
  game.update(deltaTime)
  requestAnimationFrame(gameLoop)
}

gameLoop()
