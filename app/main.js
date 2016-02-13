'use strict';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var React = require('react');
var ReactDOM = require('react-dom');
var FlatButton = require('material-ui/lib/flat-button');

var Board = React.createClass ({
    render : function() {
        return  <div id="board">
                    <FlatButton className = 'tile' label="X" />
                    <FlatButton className = 'tile' label="O" />
                    <FlatButton className = 'tile' label="X" />
                    <FlatButton className = 'tile' label="X" />
                    <FlatButton className = 'tile' label="O" />
                    <FlatButton className = 'tile' label="X" />
                    <FlatButton className = 'tile' label="X" />
                    <FlatButton className = 'tile' label="O" />
                    <FlatButton className = 'tile' label="X" />
                </div>;
    } 
});

ReactDOM.render(<Board />, document.getElementById('content'));

(function setStyle() {
    var tiles = document.getElementsByClassName("tile");
    
    for (var i = 0; i < tiles.length; i++) {
        var divs = tiles[i].firstChild.classList.add('button');
        var children = tiles[i].getElementsByTagName('span');
        children[0].classList.add("test");
        console.log(children);
    }
})();