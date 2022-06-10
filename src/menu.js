'use strict'
const { ipcRenderer } = require('electron')

export default class Menu {
  constructor(game) {
    this.game = game
    this.svgns = 'http://www.w3.org/2000/svg'
    this.div = document.createElement('div')
    document.body.append(this.div)
    this.div.setAttribute('id', 'navBar')
    this.div.style.width = '100px'
    this.div.style.height = '40px'
    this.div.style.borderRadius = '10px'
    this.buttonWidth = '30'
    this.buttonHeight = '30'

    this.createCloseButton()
    this.createSettingsButton()
    this.createrestartButton()
  }
  createCloseButton() {
    const svg = document.createElementNS(this.svgns, 'svg')
    const circle = document.createElementNS(this.svgns, 'circle')
    this.div.appendChild(svg)
    svg.appendChild(circle)
    svg.style.width = this.buttonWidth
    svg.style.height = this.buttonHeight
    circle.setAttribute('id', 'closeButton')
    circle.setAttribute('cx', '20')
    circle.setAttribute('cy', '20')
    circle.setAttribute('r', '10')
    circle.setAttribute('fill', 'red')
    circle.style.cursor = 'pointer'
    circle.addEventListener('click', (event) => {
      console.log('close clicked', event)
      ipcRenderer.send('menu-options', 'quit')
    })
  }
  createSettingsButton() {
    const svg = document.createElementNS(this.svgns, 'svg')
    const circle = document.createElementNS(this.svgns, 'circle')
    this.div.appendChild(svg)
    svg.appendChild(circle)
    svg.style.width = this.buttonWidth
    svg.style.height = this.buttonHeight
    circle.setAttribute('id', 'settingsButton')
    circle.setAttribute('cx', '20')
    circle.setAttribute('cy', '20')
    circle.setAttribute('r', '10')
    circle.setAttribute('fill', 'orange')
    circle.style.cursor = 'pointer'
    circle.addEventListener('click', (event) => {
      // console.log('settings clicked', event)
      this.game.spawnBall()
    })
  }
  createrestartButton() {
    const svg = document.createElementNS(this.svgns, 'svg')
    const circle = document.createElementNS(this.svgns, 'circle')
    this.div.appendChild(svg)
    svg.appendChild(circle)
    svg.style.width = this.buttonWidth
    svg.style.height = this.buttonHeight
    circle.setAttribute('id', 'restartButton')
    circle.setAttribute('cx', '20')
    circle.setAttribute('cy', '20')
    circle.setAttribute('r', '10')
    circle.setAttribute('fill', 'green')
    circle.style.cursor = 'pointer'
    circle.addEventListener('click', (event) => {
      this.game.resetGame()
    })
  }
}
