var exports = module.exports = {};


var player1 = true;
var boardData = []
exports.boardData = boardData;


exports.start = (function () {

	for (var i = 0; i < 9; i++) {
		boardData[i] = i;
	}

});

exports.move = (function(index) {
	if (player1) {
		boardData[index] = "X";
	} else {
		boardData[index] = "O";
	}

	player1 = !player1;
});