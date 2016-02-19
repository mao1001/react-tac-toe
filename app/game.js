var exports = module.exports = {};


var gameData = {
	playerScores : [],
	boardData : [],
	player1 : true
}
exports.gameData = gameData;


exports.start = (function () {

	for (var i = 0; i < 9; i++) {
		gameData.boardData[i] = " ";
	}

	gameData.playerScores = [3,3];
});

exports.move = (function(index) {
	if (gameData.player1) {
		gameData.boardData[index] = "X";
	} else {
		gameData.boardData[index] = "O";
	}

	gameData.player1 = !gameData.player1;
});

exports.resetScores = ( function() {
	gameData.playerScores = [0,0];
});