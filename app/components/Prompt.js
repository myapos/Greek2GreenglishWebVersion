var React = require('react');
var InputArea = require('../components/InputArea');
var OutputArea = require('../components/OutputArea');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;



var Prompt = React.createClass({

   render: function () {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}> 
		<InputArea/>
		<div className="col-sm-2" > 
			<Link to='/convert'>
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
