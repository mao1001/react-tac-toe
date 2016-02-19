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


var controller = {

    handleClick : function(id) {
        console.log("Clicked: " + id);
        game.move(id);
        this.update();
    },

    startGame : function() {
        game.start();

        this.update();
    },

    setStyle : function() {
        var tiles = document.getElementsByClassName("tile");
        
        for (var i = 0; i < tiles.length; i++) {
            var button = tiles[i].firstChild
            button.classList.add('button');
            var children = tiles[i].getElementsByTagName('span');
            children[0].classList.add("label");
        }
    },

    update : function() {
        ReactDOM.render(<components.Board labels={game.boardData} controller={this}/>, document.getElementById('content'));
    }
}

controller.startGame();
controller.setStyle();