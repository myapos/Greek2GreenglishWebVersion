var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
	 <div className='text-center'>
		<h1>Welcome to Greek2GreenglishWebVersion!</h1>
     	 </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
