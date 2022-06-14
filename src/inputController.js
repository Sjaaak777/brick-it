'use strict'

export default class InputController {
	constructor(game) {
		document.addEventListener("keydown", event => {
			switch (event.keyCode) {
				//DOWN: LEFT ARROW
				case 37:
					console.log(this.game, 'paddle moves left')
					this.game.paddle.style.left = 999+'px'
					break;
				//DOWN: ARROW UP
				case 38:
					break;
				//DOWN: RIGHT ARROW
				case 39:
					console.log('paddle moves right')
					this.game.paddle.style.left = 99+'px'
					break;
				//DOWN: ARROW DOWN
				case 40:
					break;
				//DOWN: SPACE
				case 32:
					//DOWN SPACE
					break;
				case 13:
					game.sound = null;
					window.location.reload();
					default:
					//No default set on purpose
			}
		});

		document.addEventListener("keyup", event => {
			switch (event.keyCode) {
				//UP: LEFT ARROW
				case 37:
					console.log('Left arrow released.')
					break;
				//UP: RIGHT ARROW
				case 39:
					console.log('Right arrow released.')
					break;
			}
		});
	}
}
