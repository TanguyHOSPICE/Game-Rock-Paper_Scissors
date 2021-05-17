const game = () => {
	let pScore = 0;
	let cScore = 0;

	//Start the Game
	const startGame = () => {
		const playBtn = document.querySelector(".intro button");
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};
	//Play Match
	const playMatch = () => {
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".player-hand");
		const computerHand = document.querySelector(".computer-hand");
		//Computer Options
		const computerOptions = ['rock','paper','scissors'];

		//Select Options
		options.forEach(option => {
			option.addEventListener("click", function () {
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];
				//Here is where we call compare hands
				compareHands(this.textContent, computerChoice);
				//Update Images
				playerHand.src = `./assets/${this.textContent}.png`;
				computerHand.src = `./assets/${computerChoice}.png`;
			});
		});
	};
	//Compare Hands
	const compareHands = (playerChoice, computerChoice) => {
		//Update text
		const winner = document.querySelector('.winner');
		//Checking for tie
		if (playerChoice === computerChoice) {
			winner.textContent = 'It is a tie';
		};
		//Check for Rock
		if (playerChoice === 'rock') {
			if (computerChoice === 'scissors') {
				winner.textContent = "Player wins";
				pScore++;
				return;				
			} else {
				winner.textContent = "Computer wins";
				cScore++;
				return;
			}
		}
		//Check for Paper
		if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = "Computer wins";
				cScore++;
				return;				
			} else {
				winner.textContent = "Player wins";
				pScore++;
				return;
			}
		}
		//Check for Rock
		if (playerChoice === 'scissors') {
			if (computerChoice === 'rock') {
				winner.textContent = "Computer wins";
				cScore++;
				return;				
			} else {
				winner.textContent = "Player wins";
				pScore++;
				return;
			}
		}
	};
	//Is call all the inner function
	startGame();
	playMatch();
	// updateScore();
};
//start the game function
game();