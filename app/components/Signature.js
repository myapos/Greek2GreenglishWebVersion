var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Signature = React.createClass({
  render: function () {
    return (
    <div className="jumbotron col-sm-12 text-right" style={transparentBg}>
      <h5>Contact Info: <a href="mailto:myapos@yahoo.com">myapos@yahoo.com</a></h5>
		<h5>v: 1.0 @ 2016</h5>
    </div>
    )
  }
});

module.exports = Signature;
