var React = require('react');

var InputArea = React.createClass({
    
    
    getInitialState: function() {
        return {
         inputtextvalue: 'Hello from input text!'
        };
    },
   handleChange: function(event) {
     this.setState({inputtextvalue: event.target.value});
   },

render: function () {
    return (
	<div>
	<h3>Please enter input text to get output</h3>
		<div className="form-group col-sm-5">
  			<label>Input:</label>
  			<textarea className="form-control" rows="5" value={this.state.inputtextvalue}
			          onChange={this.handleChange}>
			</textarea>
		</div>
	</div>
    )
  }

});

module.exports = InputArea;

