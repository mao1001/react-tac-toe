var React = require('react');
var FlatButton = require('material-ui/lib/flat-button');

var exports = module.exports = {};

exports.Board = React.createClass ({

    render : function() {

        var labels = this.props.labels;
        var controller = this.props.controller;

        return  <div id="board">
                    {this.props.labels.map(function(item, i) {
                      return (
                        <FlatButton id = {labels[i].toString()} label = {labels[i].toString()} 
                            className = 'tile' onClick={this.handleClick.bind(this, i)} key={i}/>
                      );
                    }, this)}
                </div>;
    },

    handleClick : function(id) {
        this.props.controller.handleClick(id);
    },

    propTypes : {
        labels : React.PropTypes.array,
    }
});