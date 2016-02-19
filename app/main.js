'use strict';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var React = require('react');
var ReactDOM = require('react-dom');
var components = require('./components.js');
var game = require('./game.js');

//Handles the logic between the interface and the game logic.
var controller = {

    handleClick : function(id) {
        game.move(id);

        this.updateBoard();
        this.updateGameInfo();

        this.updateMessage(game.gameData.message);
    },

    startGame : function() {
        game.start();
        this.updateBoard();

        this.updateGameInfo();
        this.updateMessage(game.gameData.message);
    },

    updateBoard : function() {
        ReactDOM.render(<components.Board gameData={game.gameData} controller={this}/>, document.getElementById('div2'));
    },

    updateGameInfo : function() {
        ReactDOM.render(<components.GameInfo gameData={game.gameData} controller={this} />, document.getElementById('div1'));
    },

    updateMessage : function() {
        ReactDOM.render(<components.Message gameData={game.gameData} controller={this} />, document.getElementById('div3'));
    },

    resetScores : function() {
        game.resetScores();
        this.updateGameInfo();
        this.updateMessage(game.gameData.message);

    },

    resetBoard : function() {
        game.resetBoard();
        this.updateBoard();
        this.updateMessage(game.gameData.message);
    }
}

controller.startGame();