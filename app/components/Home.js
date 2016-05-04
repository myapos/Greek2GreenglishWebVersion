var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;
var boxStyle = require('../styles').box;
var Signature = require('../components/Signature');


var Home = React.createClass({
  render: function () {
    return (
    <div className="row">
      <div className="col-sm-2"> </div>
      <div className="col-sm-8 text-center" style={boxStyle}>
      	<h3>Some information</h3>
      	<p className="lead text-justify" >This application is for refactoring text from Greek language to greenglish as a web based application. Possible use cases could be in subtitle editing, 
      		in text entry between cross-platform applications and more. The program is
      		developed with ReactJS framework. The purpose of this implementation is the experimentation of ReactJS framework 
      		in 				  order to learn how to use it. A similar implementation of this 
      		program exists as a standalone Java application. You 				  
      		can visit it in the following  <a href="https://github.com/myapos/Greek2Greenglish"> url </a> . The source code of this 
      		application is available in the following <a href="https://github.com/myapos/Greek2GreenglishWebVersion"> Github </a> reposository.
      	</p>
      	<Link to='/greek2greenglishapp'>
       	 <button type='button' className='btn btn-lg btn-success'>Get Started</button>
     	   </Link>
      <Signature/>
     </div>
     <div className="col-sm-2"> </div>
   </div> 
    
    )
  }
});

module.exports = Home;
