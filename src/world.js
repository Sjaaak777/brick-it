'use strict'
export default class World {
  constructor(game) {
    this.gameRect
    this.game = game
    this.gameAreaWidth = 900
    this.gameAreaHeigth = 400
    this.backgroundColor = '#333'
    this.setBackgroundColor()
    this.createGameArea()
  }
  setBackgroundColor() {
    document.body.style.backgroundColor = this.backgroundColor
  }
  createGameArea() {
    const gameArea = document.createElement('div')
    gameArea.style.width = this.gameAreaWidth
    gameArea.style.height = this.gameAreaHeigth
    gameArea.setAttribute('id', 'gameArea')
    document.body.append(gameArea)
    gameArea.style.margin = 'auto'
    gameArea.style.width = this.gameAreaWidth + 'px'
    gameArea.style.height = this.gameAreaHeigth + 'px'
    gameArea.style.backgroundColor = '#777'

    this.gameRect = gameArea.getBoundingClientRect()
  }
  removeGameArea() {
    gameArea.remove()
  }

  update(deltaTime) {
    if (!deltaTime) {
      return
    }
  }
}
