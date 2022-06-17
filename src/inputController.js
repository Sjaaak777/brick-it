'use strict'

export default class InputController {
  constructor(game) {
    this.game = game
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        // DOWN: LEFT ARROW
        case 37:
        // DOWN: A
        case 65:
          this.game.paddle.left = true
          break
        // DOWN: ARROW UP
        case 38:
          break
        // DOWN: RIGHT ARROW
        case 39:
        // DOWN D
        case 68:
          this.game.paddle.right = true
          break
        //DOWN: ARROW DOWN
        case 40:
          break
        // DOWN: SPACE
        case 32:
          break
        case 13:
          game.sound = null
          window.location.reload()
        default:
        //No default set on purpose
      }
    })

    document.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        // UP: LEFT ARROW
        case 37:
        // UP: A
        case 65:
          this.game.paddle.left = false
          break
        // UP: RIGHT ARROW
        case 39:
        // UP: D
        case 68:
          this.game.paddle.right = false
          break
      }
    })
  }
}
