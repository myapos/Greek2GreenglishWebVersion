var React = require('react');
var ReactSimpleAlert = require('react-simple-alert');

var Convert = React.createClass({

    getInitialState: function() {
        return {
            alert: false,
            inputtext:'' 
        };
    },
    componentDidMount: function(){
        this.setState({
        	alert: true,
         inputtext:this.props.params.inputtext
        });
    },
    render: function() {
    	console.log(this);
        var rsaOptions = {
            title: "Alert title",
            message: "This is an alert!",
            alert: this.state.alert,
            confirmButton: {
                text: "Save", 
                action: function(){
                    //Click action for the "Save" button
                }
            }
        };
	        
        return (
            <div>
                <ReactSimpleAlert options={rsaOptions} />
            </div>
        );
    }

});




module.exports = Convert;


