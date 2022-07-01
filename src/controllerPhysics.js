export default class PhysicsEngine {
  constructor(game) {
    this.game = game
  }

  brickCollisionDetection(game, object, otherObject) {
    let topOfObject = object.element.top
    let rightOfObject = object.element.right
    let bottomOfObject = object.element.bottom
    let leftOfObject = object.element.left
    let ball = object

    let topOfOtherObject
    let rightOfOtherObject
    let leftOfOtherObject
    let bottomOfOtherObject

    let brick

    otherObject.forEach(function (otherArrayObject) {
      topOfOtherObject = otherArrayObject.element.getBoundingClientRect().top
      rightOfOtherObject =
        otherArrayObject.element.getBoundingClientRect().right
      leftOfOtherObject = otherArrayObject.element.getBoundingClientRect().left
      bottomOfOtherObject =
        otherArrayObject.element.getBoundingClientRect().bottom

      brick = otherArrayObject

      if (
        object.element.getBoundingClientRect().top <= bottomOfOtherObject &&
        object.element.getBoundingClientRect().right >= leftOfOtherObject &&
        object.element.getBoundingClientRect().left <= rightOfOtherObject &&
        object.element.getBoundingClientRect().bottom >= topOfOtherObject
      ) {
        object.element.style.backgroundColor = 'yellow'
        // object.element.style.width = 50 + 'px'
        object.element.style.left

        if (brick.color == 'images/brick-aqua.png') {
          game.scoreBoard.increaseScore(10)
        }
        if (brick.color == 'images/brick-green.png') {
          game.scoreBoard.increaseScore(20)
        }
        if (brick.color == 'images/brick-blue.png') {
          game.scoreBoard.increaseScore(30)
        }
        if (brick.color == 'images/brick-purple.png') {
          game.scoreBoard.increaseScore(100)
        }

        brick.element.remove()
        object.speedY *= -1
        game.sound.playPong()

        return true
      }
      return true
    })
  }

  collisionDetection(object, otherObject) {
    let topOfObject = object.top
    let rightOfObject = object.right
    let bottomOfObject = object.bottom
    let leftOfObject = object.left

    let topOfOtherObject = otherObject.top
    let rightOfOtherObject = otherObject.right
    let leftOfOtherObject = otherObject.left
    let bottomOfOtherObject = otherObject.bottom

    if (
      topOfObject <= bottomOfOtherObject &&
      rightOfObject >= leftOfOtherObject &&
      leftOfObject <= rightOfOtherObject &&
      bottomOfObject >= topOfOtherObject
    ) {
      return true
    }
  }
}
