var React = require('react');
var InputArea = require('../components/InputArea');
var OutputArea = require('../components/OutputArea');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;



var Prompt = React.createClass({

    getInitialState: function() {
        return {
         inputtextvalue: 'Hello from input text!'
        };
    },
   handleChange: function(event) {
     this.setState({inputtextvalue: event.target.value});
   },
   
   render: function () {
   	console.log(this);
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}> 
		<h3>Please enter input text to get output</h3>
		<div className="form-group col-sm-5">
  			<label>Input:</label>
  			<textarea className="form-control" rows="5" value={this.state.inputtextvalue}
			          onChange={this.handleChange}>
			</textarea>
		</div>
		<div className="col-sm-2" > 
			<Link to={'convert/'+this.state.inputtextvalue}>
			      <button
             			className="btn btn-block btn-success"
              			type="submit">
                		Convert
               </button>
			</Link>
		</div>
		<OutputArea/>

	</div>
    )
  }
});





module.exports = Prompt;
