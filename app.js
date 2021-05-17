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
		const hands = document.querySelectorAll(".hands img");
		
		//ending animation
		hands.forEach(hand => {
			hand.addEventListener("animationend", function () {
				this.style.animation = "";
			});
		});
		//Computer Options
		const computerOptions = ['rock','paper','scissors'];

		//Select Options
		options.forEach(option => {
			option.addEventListener("click", function () {
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];
				
				//Time out
				setTimeout(() => {
					//Here is where we call compare hands
					compareHands(this.textContent, computerChoice);
					//Update Images
					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;				
				}, 2000);
				//Animation
				playerHand.style.animation = "shakePlayer 2s ease";
				computerHand.style.animation = "shakeComputer 2s ease";
			});
		});
		//Updating score
		const playerscore = document.querySelectorAll(".player-score p");
		const computerscore = document.querySelectorAll(".computer-score p");
		playerscore.textContent = pScore;
		computercore.textContent = cScore;

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
				updateScore();
				return;				
			} else {
				winner.textContent = "Computer wins";
				cScore++;
				updateScore();
				return;
			}
		}
		//Check for Paper
		if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = "Computer wins";
				cScore++;
				updateScore();
				return;				
			} else {
				winner.textContent = "Player wins";
				pScore++;
				updateScore();
				return;
			}
		}
		//Check for Rock
		if (playerChoice === 'scissors') {
			if (computerChoice === 'rock') {
				winner.textContent = "Computer wins";
				cScore++;
				updateScore();
				return;				
			} else {
				winner.textContent = "Player wins";
				pScore++;
				updateScore();
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