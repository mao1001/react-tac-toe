var exports = module.exports = {};

//Game data object that can be passed through to whoever needs the data.
var gameData = {
	playerScores : [],
	boardData : [],
	player1 : true,
	movesLeft : 0,
	message : "Welcome! Player 1, you are X's!"
}
exports.gameData = gameData;

//Resets the players scores.
var resetScores = function resetScores() {
	gameData.playerScores = [0,0];
}

exports.resetScores = resetScores;

//Fills the rest of the blank tiles with the indicated filler.
function fillRestOfBoard(filler) {
	for (var i = 0; i < 9; i++) {
		if (gameData.boardData[i] === " ") {
			gameData.boardData[i] = filler;
		}
	}
}

//Wipes the board clean.
function newBoard() {
	for (var i = 0; i < 9; i++) {
		gameData.boardData[i] = " ";
	}
}

//Finds the row with the given index.
function findRow(index) {
	if (index < 3) {
		return 1;
	} else if (index < 6) {
		return 2;
	} else {
		return 3;
	}
}

//Finds the column with the given index.
function findCol(index) {
	if (index % 3 == 0) {
		return 1;
	} else if (index % 3 == 1) {
		return 2;
	} else {
		return 3;
	}
}

//Checks the column to see if it completed. Returns true if so.
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

//checks the row to see if it completed. Returns true if so.
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

//Checks to see if either diagonals are completed.
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

//Ends the game and disables the rest of the board.
function endGame(tie) {
	//console.log("game ended");
	if (tie) {
		gameData.message = "It's a tie! Reset to settle the score!";
	} else if (gameData.player1) {
		gameData.playerScores[0] = gameData.playerScores[0] + 1;
		gameData.message = "Player 1 won! Reset for a rematch!";
	} else {
		gameData.playerScores[1] = gameData.playerScores[1] + 1;
		gameData.message = "Player 2 won! Reset for a rematch!"; 
	}

	fillRestOfBoard("-");
}

//Starts the game.
exports.start = (function () {
	newBoard();
	resetScores();
});

//Makes a move on the board and places the appropriate marker. Will end the game if 
//there are no more move to be made or someone has won.
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

	gameData.movesLeft = gameData.movesLeft - 1;

	if (checkRow(row) || checkColumn(col) || checkDiagonals()) {
		endGame(false);
	} else if (gameData.movesLeft == 0) {
		endGame(true);
	}

	gameData.player1 = !gameData.player1;
});

//Resets the board.
exports.resetBoard = ( function() {
	if (!gameData.player1) {
		gameData.message = "Player 2 (O's)! You are up!"
	} else {
		gameData.message = "Player 1 (X's)! You are up!"
	}

	gameData.movesLeft = 9;

	newBoard();
});