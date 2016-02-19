/*
This file contains all the react components used in the tic tac toe game.
*/

//All required files and classes.
var React = require('react');
var FlatButton = require('material-ui/lib/flat-button');
var RaisedButton = require('material-ui/lib/raised-button');
var Paper = require('material-ui/lib/paper');
var Snackbar = require('material-ui/lib/snackbar');

//Prepares the react classes for exporting.
var exports = module.exports = {};

//Creates the game board react class. Contains 9 tiles inside as well.
exports.Board = React.createClass ({
    render : function() {
        var boardData = this.props.gameData.boardData;

        var style = {
            height: 100,
            width: 100
        }

        return  <div id="board">
                    <Paper zDepth={2} children=
                        {boardData.map(function(item, i) {
                          return (
                            <FlatButton
                                style = {style}
                                id = {i.toString()} 
                                label = {boardData[i].toString()} 
                                className = 'tile' 
                                onClick={this.handleClick.bind(this, i)} 
                                disabled={this.disable(i)}
                                key={i}/>
                          );
                        }, this)}/>
                </div>;
    },

    handleClick : function(id) {
        this.props.controller.handleClick(id);
    },

    disable : function(index) {
        var label = this.props.gameData.boardData[index];
        if (label === 'X' || label === 'O' || label === '-') {
            return true;
        }

        return false;
    },

    propTypes : {
        labels : React.PropTypes.array,
    }
});

//Creates the game info react class. This contains the score board and the title of the game.
exports.GameInfo = React.createClass ({

    render : function() {

        var style = {
            margin: 20,
        }

        return  <Paper className = 'gameInfo' zDepth={2} children=
                    {<div id = 'gameInfoContainer' >     
                        <p id='title'>Tic Tac Toe!</p>
                        <p>Player 1: {this.props.gameData.playerScores[0]}</p>
                        <p>Player 2: {this.props.gameData.playerScores[1]}</p>
                        <RaisedButton style={style} onClick={this.resetScores} label="Reset Player Scores" secondary={true} />
                        <RaisedButton style={style} onClick={this.resetBoard} label="Reset Board" primary={true} />

                    </div>}/>;
    },

    resetScores : function() {
        this.props.controller.resetScores();
    },

    resetBoard : function() {
        this.props.controller.resetBoard();
    }
});

//Creates a react class to which a message can be displayed to the user.
exports.Message = React.createClass ({

    render : function() {
        //console.log("About to send this message: " + this.props.gameData.message);
        return  <Snackbar
                  open={true}
                  message={this.props.gameData.message}
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose}/>;
    },

    handleRequestClose : function(reason) {
    }
});
