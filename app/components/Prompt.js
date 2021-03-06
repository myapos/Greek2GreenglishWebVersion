var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Signature = require('../components/Signature');



var Prompt = React.createClass({

    getInitialState: function() {
        return {
         inputtextvalue: '',
         outputtextvalue: ''
        };
    },
   handleChange: function(event) {
     var out;
     out = GetInput(event.target.value);
     this.setState({inputtextvalue: event.target.value,
     					  outputtextvalue: out});
     //this.followinput();
   }, 
   handleClick: function(event) {
    var out;
    out = GetInput(this.state.inputtextvalue);
    this.setState({outputtextvalue: out});
  	},
   render: function () {
   	console.log(this);
    return (
    
   <div className="text-center"> 
     
		<h3>Please enter input text to get output</h3>
		<div className="row">
		<div className="col-sm-1"> </div>
		<div className="form-group col-sm-5">
  			<label>Input in greek:</label>
  			<textarea className="form-control" rows="5" value={this.state.inputtextvalue}
			          onChange={this.handleChange}>
			</textarea>
		</div>

			<div className="form-group col-sm-5">
  				<label>Output in greenglish:</label>
  				<textarea className="form-control" rows="5" value={this.state.outputtextvalue}
			             onChange={this.handleChange}>
			   </textarea>
			   <Signature/>
			</div>
			<div className="col-sm-1"> </div>
			</div> {/* End of row*/}
			
	</div>
    )
  }
});


function GetInput (props) {
//alert(props);
//console.log(props);	


var myinput = props;
var outputstring="";
var i=0;

for (i = 0; i < myinput.length; i++) { 

    outputstring=outputstring+String.fromCharCode(Map(myinput.charCodeAt(i)));

}

  //alert("Conversion done. Check output textarea!");
  return outputstring;
}

function Map(charvalue){
//c = "s";
//alert("current char:"+c);
//console.log(charvalue);

if (charvalue == 945) {
charvalue = 97;
} else if (charvalue == 940) {
charvalue = 97;
} else if (charvalue == 946) {
 charvalue = 98;
} else if (charvalue == 947) {
charvalue = 103;
} else if (charvalue == 948) {
charvalue = 100;
} else if (charvalue == 949) {
charvalue = 101;
} else if (charvalue == 941) {
 charvalue = 101;
} else if (charvalue == 950) {
 charvalue = 122;
} else if (charvalue == 951) {
charvalue = 104;
} else if (charvalue == 942) {
  charvalue = 104;
 } else if (charvalue == 952) {
  charvalue = 56;
 } else if (charvalue == 953) {
 charvalue = 105;
} else if (charvalue == 943) {
charvalue = 105;
} else if (charvalue == 970) {
charvalue = 105;
} else if (charvalue == 912) {
charvalue = 105;
} else if (charvalue == 954) {
charvalue = 107;
} else if (charvalue == 955) {
charvalue = 108;
} else if (charvalue == 956) {
charvalue = 109;
} else if (charvalue == 957) {
charvalue = 110;
} else if (charvalue == 958) {
charvalue = 51;
} else if (charvalue == 959) {
charvalue = 111;
} else if (charvalue == 972) {
charvalue = 111;
} else if (charvalue == 960) {
charvalue = 112;
} else if (charvalue == 961) {
charvalue = 114;
} else if (charvalue == 962) {
charvalue = 115;
} else if (charvalue == 963) {
charvalue = 115;
} else if (charvalue == 964) {
charvalue = 116;
} else if (charvalue == 965) {
charvalue = 117;
} else if (charvalue == 973) {
charvalue = 117;
} else if (charvalue == 971) {
charvalue = 117;
}else if (charvalue == 944) {
charvalue = 117;
} else if (charvalue == 966) {
charvalue = 102;
} else if (charvalue == 967) {
charvalue = 120;
} else if (charvalue == 968) {
charvalue = 121;
} else if (charvalue == 969) {
charvalue = 119;
} else if (charvalue == 974) {
charvalue = 119;
} else if (charvalue == 913) {
charvalue = 65;
} else if (charvalue == 914) {
charvalue = 66;
} else if (charvalue == 915) {
charvalue = 71;
} else if (charvalue == 916) {
charvalue = 68;
} else if (charvalue == 917) {
charvalue = 69;
} else if (charvalue == 904) {
charvalue = 69;
} else if (charvalue == 918) {
charvalue = 90;
} else if (charvalue == 919) {
charvalue = 72;
} else if (charvalue == 905) {
charvalue = 72;
} else if (charvalue == 920) {
charvalue = 56;
} else if (charvalue == 921) {
charvalue = 73;
} else if (charvalue == 906) {
charvalue = 73;
} else if (charvalue == 938) {
charvalue = 921;
} else if (charvalue == 922) {
charvalue = 75;
} else if (charvalue == 923) {
charvalue = 76;
} else if (charvalue == 924) {
charvalue = 77;
} else if (charvalue == 925) {
charvalue = 78;
} else if (charvalue == 926) {
charvalue = 51;
} else if (charvalue == 927) {
charvalue = 79;
} else if (charvalue == 908) {
charvalue = 79;
} else if (charvalue == 928) {
charvalue = 80;
} else if (charvalue == 929) {
charvalue = 82;
} else if (charvalue == 931) {
charvalue = 83;
} else if (charvalue == 932) {
charvalue = 84;
} else if (charvalue == 933) {
charvalue = 85;
} else if (charvalue == 910) {
charvalue = 89;
} else if (charvalue == 939) {
charvalue = 933;
} else if (charvalue == 934) {
charvalue = 70;
} else if (charvalue == 935) {
charvalue = 88;
} else if (charvalue == 936) {
charvalue = 89;
} else if (charvalue == 949) {
charvalue = 89;
} else if (charvalue == 937) {
charvalue = 87;
} else if (charvalue == 911) {
charvalue = 87;
} else if (charvalue == 902) {
charvalue = 65;
}

return charvalue;


}

module.exports = Prompt;
