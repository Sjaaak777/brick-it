'use strict'

export default class Brick {
  constructor(game, posX, posY, color) {
    this.game = game

    const gameArea = document.getElementById('gameArea')

    this.positionX = this.game.world.gameRect.left + posX
    this.positionY = this.game.world.gameRect.top + posY
    this.width = '80px'
    this.height = '25px'
    this.color = color
    this.element = document.createElement('img')
    this.element.style.left = this.positionX + 'px'
    this.element.style.top = this.positionY + 'px'
    this.element.style.width = this.width
    this.element.style.backgroundColor = this.color
    this.element.style.position = 'absolute'
    this.element.style.userSelect = 'none'

    this.element.setAttribute('id', 'brick')
    this.element.setAttribute('src', this.color)
    gameArea.append(this.element)
  }

  removeAllBricks() {
    let bricks = document.querySelectorAll('#brick')
    bricks.forEach((brick) => {
      brick.remove()
    })
  }
}
