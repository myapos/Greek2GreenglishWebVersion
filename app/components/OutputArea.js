var React = require('react');

var OutputArea = React.createClass({
    getInitialState: function() {
        return {
         outputtextvalue: 'Hello from output text!'
        };
    },
   handleChange: function(event) {
     this.setState({outputtextvalue: event.target.value});
   },
render: function () {
    return (
	<div>
			<div className="form-group col-sm-5">
  				<label>Output:</label>
  				<textarea className="form-control" rows="5" value={this.state.outputtextvalue}
			             onChange={this.handleChange}>
			   </textarea>
			</div>
	</div>
    )
  }

});

module.exports = OutputArea;

