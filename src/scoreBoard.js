export default class ScoreBoard {
  constructor(game) {
    this.game = game
    this.score = 0
    this.element = document.createElement('div')
    this.element.setAttribute('id', 'ScoreBoard')
    this.element.style.top = '0px'
    this.element.style.right = '0px'
    this.element.style.margin = '15px'
    this.element.style.position = 'absolute'
    this.element.style.fontFamily = 'Arial'
    this.element.style.fontSize = '25px'
    this.element.style.color = 'wheat'
    this.element.style.userSelect = 'none'
    this.element.innerHTML = `Score: ${this.score}`
    this.createScoreBoard()
  }
  createScoreBoard() {
    const navBar = document.getElementById('navBar')
    navBar.append(this.element)
  }

  multiplyScore(score) {
    this.score = this.score * score
    this.element.innerHTML = `Score: ${this.score}`
  }
  increaseScore(score) {
    this.score += score
      this.element.innerHTML = `Score: ${this.score}`
  }

  resetScore(){
    this.score =0
    this.element.innerHTML = `Score: ${this.score}`
  }

  update(deltaTime) {
    if (!deltaTime) {
      return
    }
  console.log('update van score class?')
  }
}
