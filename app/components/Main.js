var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
	 <div className='main-container col-sm-12 text-center'>
		<h1>Welcome to Greek2Greenglish web version!!</h1>
     	 </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
