export default class PhysicsEngine {
  constructor(game) {
    this.game = game
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

        console.log('boem')
        return true
        // object.markedForDeletion = true
        // otherArrayObject.markedForDeletion = true
        // return true
      }
  }


//   detectCollision(object, otherObject) {
//     let topOfObject = object.position.y
//     let rightOfObject = object.position.x
//     let bottomOfObject = object.position.y + object.height
//     let leftOfObject = object.position.x + object.width

//     otherObject.forEach(function (otherArrayObject) {
//       let topOfOtherObject = otherArrayObject.position.y
//       let rightOfOtherObject =
//         otherArrayObject.position.x + otherArrayObject.width
//       let leftOfOtherObject = otherArrayObject.position.x
//       let bottomOfOtherObject =
//         otherArrayObject.position.y + otherArrayObject.height

//       if (
//         topOfObject <= bottomOfOtherObject &&
//         rightOfObject >= leftOfOtherObject &&
//         leftOfObject <= rightOfOtherObject &&
//         bottomOfObject >= topOfOtherObject
//       ) {
//         object.markedForDeletion = true
//         otherArrayObject.markedForDeletion = true
//         return true
//       }
//     })
//     return false
//   }
}
