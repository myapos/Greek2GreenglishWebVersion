var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Prompt = React.createClass({

    getInitialState: function() {
        return {
         inputtextvalue: 'Hello!'
        };
    },
   handleChange: function(event) {
     this.setState({inputtextvalue: event.target.value});
   },
   render: function () {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}> 
	<h3> Hello from prompt! Please enter input text to get output</h3>

		<div className="form-group col-sm-5">
  			<label>Input:</label>
  			<textarea className="form-control" rows="5" value={this.state.inputtextvalue}
			onChange={this.handleChange}></textarea>
		</div>
		<div className="col-sm-2" > 
			<Link to='/convert'>
			      <button
             			className="btn btn-block btn-success"
              			type="submit">
                			Convert
            		      </button>
			</Link>
		</div>

		<div className="form-group col-sm-5">
  			<label>Output:</label>
  			<textarea className="form-control" rows="5" value="Output.This is a description."></textarea>
		</div>
	</div>
    )
  }
});



module.exports = Prompt;
