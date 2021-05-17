const game = () => {
	let pScore = 0;
	let cScore = 0;

	//Start the Game
	const startGame = () => {
		const introScreen = document.querySelector(".intro");
		const match = document.querySelector(".match");
		const playBtn = document.querySelector(".intro button");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};
	//Is call all the inner function
	startGame();
	updateScore();
};
//start the game function
game();