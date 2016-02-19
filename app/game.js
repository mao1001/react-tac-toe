var exports = module.exports = {};

var boardData = []


exports.boardData = boardData;


exports.start = (function () {

	for (var i = 0; i < 9; i++) {
		boardData[i] = i;
	}

});

exports.move = (function(index) {

});