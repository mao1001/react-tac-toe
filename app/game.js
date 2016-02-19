var exports = module.exports = {};


var gameData = {
	playerScores : [],
	boardData : [],
	player1 : true,
	message : "Welcome! Player 1, you are X's!"
}
exports.gameData = gameData;

function fillRestOfBoard(filler) {
	for (var i = 0; i < 9; i++) {
		if (gameData.boardData[i] === " ") {
			gameData.boardData[i] = filler;
		}
	}
}

function newBoard() {
	for (var i = 0; i < 9; i++) {
		gameData.boardData[i] = " ";
	}
}

function findRow(index) {
	if (index < 3) {
		return 1;
	} else if (index < 6) {
		return 2;
	} else {
		return 3;
	}
}

function findCol(index) {
	if (index % 3 == 0) {
		return 1;
	} else if (index % 3 == 1) {
		return 2;
	} else {
		return 3;
	}
}

function checkColumn(colNumber) {
	var firstValue = (colNumber - 1);
	var secondValue = firstValue + 3;
	var thirdValue = secondValue + 3;

	var firstThing = gameData.boardData[firstValue];
	var secondThing = gameData.boardData[secondValue];
	var thirdThing = gameData.boardData[thirdValue];

	//console.log(firstThing, secondThing, thirdThing);

	if (firstThing === thirdThing && firstThing === secondThing && (thirdThing ==='X' || thirdThing === 'O')) {
		return true;
	}

	return false;
}

function checkRow(rowNumber) {
	var firstValue = (rowNumber - 1) * 3;
	var secondValue = firstValue + 1;
	var thirdValue = secondValue + 1;

	var firstThing = gameData.boardData[firstValue];
	var secondThing = gameData.boardData[secondValue];
	var thirdThing = gameData.boardData[thirdValue];

	//console.log(firstThing, secondThing, thirdThing);

	var firstValue = (rowNumber * 1) - 1; 

	if (firstThing === thirdThing && firstThing === secondThing && (thirdThing ==='X' || thirdThing === 'O')) {
		return true;
	}

	return false;
}

//[0, 1, 2, 
// 3, 4, 5, 
// 6, 7, 8]

function checkDiagonals() {
	var firstThing = gameData.boardData[0];
	var secondThing = gameData.boardData[4];
	var thirdThing = gameData.boardData[8];
	var fourthThing = gameData.boardData[6];
	var fifthThing = gameData.boardData[2];

	if (firstThing === thirdThing && firstThing === secondThing && (thirdThing ==='X' || thirdThing === 'O')) {
		return true;
	} else if (fourthThing === secondThing && secondThing === fifthThing && (fourthThing === 'X' || fourthThing === 'O')) {
		return true;
	}

	return false;
}

function endGame() {
	//console.log("game ended");
	if (gameData.player1) {
		gameData.playerScores[0] = gameData.playerScores[0] + 1;
		gameData.message = "Player 1 won!" 
	} else {
		gameData.playerScores[1] = gameData.playerScores[1] + 1;
		gameData.message = "Player 2 won!" 
	}

	fillRestOfBoard("-");
}

var resetScores = function resetScores() {
	gameData.playerScores = [0,0];
}

exports.resetScores = resetScores;


exports.start = (function () {
	newBoard();
	resetScores();
});

exports.move = (function(index) {
	if (gameData.player1) {
		gameData.boardData[index] = "X";
		gameData.message = "Player 2 (O's)! You are up!"
	} else {
		gameData.boardData[index] = "O";
		gameData.message = "Player 1 (X's)! You are up!"
	}

	var row = findRow(index);
	var col = findCol(index);

	if (checkRow(row) || checkColumn(col) || checkDiagonals()) {
		endGame();
	}

	gameData.player1 = !gameData.player1;
});


exports.resetBoard = ( function() {
	newBoard();
});