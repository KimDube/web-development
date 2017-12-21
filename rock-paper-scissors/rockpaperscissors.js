var userPlay = document.getElementById("your-play");
var compPlay = document.getElementById("computer-play");
var roundResult = document.getElementById("game-result");
var userScore = document.getElementById("your-score");
var compScore = document.getElementById("computer-score");

var buttons = document.querySelectorAll('INPUT');

function computer_play() {
	var options = ['rock', 'paper', 'scissors'];
	var randomNum = Math.floor(Math.random() * 3);
	return options[randomNum];
};

function round(user_str) {
	user_str = user_str.toLowerCase();
	if ((user_str != 'rock') && (user_str != 'paper') && (user_str != 'scissors')) {
		return "Invalid input"
	};
	userPlay.innerHTML = "You played "+user_str+".";
	var comp_str = computer_play();
	compPlay.innerHTML = "Your opponent played "+comp_str+".";
	
	switch (user_str) {
		case 'rock':
			if (comp_str == 'scissors'){
				return "You Win! Rock beats Scissors."
			}
			else if (comp_str == 'paper') {
				return "You Lose! Paper beats Rock."
			}
			else {
				return 'Draw.'
			};
			break;
		case 'paper':
			if (comp_str == 'scissors'){
				return "You Lose! Scissors beat Paper."
			}
			else if (comp_str == 'paper') {
				return "Draw."
			}
			else {
				return "You Win! Paper beats Rock."
			};
			break;
		case 'scissors':
			if (comp_str == 'scissors'){
				return "Draw."
			}
			else if (comp_str == 'paper') {
				return "You Win! Scissors beat Paper."
			}
			else {
				return "You Lose! Rock beats Scissors."
			};
	}
};

var computer_score = 0;
var user_score = 0;
var result = [];

buttons.forEach((button) => {
	button.addEventListener("click", function() {
		roundResult.innerHTML = " ";
		if (button.id == 'rock')
			result = round('rock');
		else if (button.id == 'paper')
			result = round('paper');
		else if (button.id == 'scissors')
			result = round('scissors');
			
		if (result.indexOf("Lose") != -1) {
			computer_score += 1;
		}
		else if (result.indexOf("Win") != -1) {
			user_score += 1;
		};
		compScore.innerHTML = computer_score;
		userScore.innerHTML = user_score;
		if (user_score >= 5) {
			roundResult.innerHTML = "You win the game!";
			computer_score = 0;
			user_score = 0;
		}
		else if (computer_score >= 5) {
			roundResult.innerHTML = "You lose the game!";
			computer_score = 0;
			user_score = 0;
		}
	});
});



	