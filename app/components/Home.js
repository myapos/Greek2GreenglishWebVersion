var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
  render: function () {
    return (
       <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h3>Welcome to Greek2Greenglish web version</h3>
      <p className='lead'>This application is for refactoring text from Greek language to greenglish as a web based application. Possible use 				  cases could be in subtitle editing, in text entry between cross-platform applications and more. The program is 				  developed with ReactJS framework. The purpose of this implementation is the experimentation of ReactJS framework in 				  order to learn how to use it. A similar implementation of this program exists as a standalone Java application. You 				  can visit it in the following  <a href="https://github.com/myapos/Greek2Greenglish"> url </a> .</p>
      <Link to='/greek2greenglishapp'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </div>
    )
  }
});

module.exports = Home;
