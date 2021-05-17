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
			});
		});
	};

	//Is call all the inner function
	startGame();
	playMatch();
	// updateScore();
};
//start the game function
game();