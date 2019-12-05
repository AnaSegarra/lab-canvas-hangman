class HangmanCanvas {
	constructor(secretWord) {
		this.ctx = document.getElementById('hangman').getContext('2d');
		this.secretWord = secretWord;
		this.letterPosition = [];
	}

	createBoard() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.drawLines();
	}

	drawLines() {
		let x = 300;
		for (let i = 0; i < this.secretWord.length; i++) {
			if (this.secretWord[i] === ' ') {
				this.ctx.fillStyle = 'white';
				this.ctx.fillRect(x, 400, 30, 2);
			} else {
				this.ctx.fillStyle = 'black';
				this.ctx.fillRect(x, 400, 25, 2);
			}
			this.letterPosition.push(x);
			x += 40;
		}
	}
	writeCorrectLetter(index) {
		let instances = [];
		for (let i = 0; i < this.secretWord.length; i++) {
			if (this.secretWord[index] === this.secretWord[i]) {
				instances.push(i);
				// console.log(i, this.secretWord[i]);
			}
		}
		instances.forEach(el => {
			this.ctx.font = '25px Arial';
			this.ctx.fillText(this.secretWord[el].toUpperCase(), this.letterPosition[el] + 3, 398);
		});
	}

	writeWrongLetter(letter, errorsLeft) {
		this.ctx.font = '25px Arial';
		this.ctx.fillText(letter.toUpperCase(), firstPosition, 50);
		this.drawHangman(errorsLeft);
	}

	drawHangman(shape) {
		switch (shape) {
			case 9:
				this.ctx.moveTo(180, 360);
				this.ctx.lineTo(260, 400);
				this.ctx.lineTo(100, 400);
				this.ctx.lineTo(180, 360);
				break;
			case 8:
				this.ctx.lineTo(180, 10);
				break;
			case 7:
				this.ctx.lineTo(390, 10);
				break;
			case 6:
				this.ctx.lineTo(390, 30);
				break;
			case 5:
				this.ctx.beginPath();
				this.ctx.arc(390, 60, 30, Math.PI * 2, 0);
				break;
			case 4:
				this.ctx.moveTo(390, 90);
				this.ctx.lineTo(390, 240);
				break;
			case 3:
				this.ctx.lineTo(440, 270);
				break;
			case 2:
				this.ctx.moveTo(390, 240);
				this.ctx.lineTo(340, 270);
				break;
			case 1:
				this.ctx.moveTo(390, 160);
				this.ctx.lineTo(340, 120);
				break;
			case 0:
				this.ctx.moveTo(390, 160);
				this.ctx.lineTo(440, 120);
		}
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
	}

	gameOver() {}

	winner() {}
}
