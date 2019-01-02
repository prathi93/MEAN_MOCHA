var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pop2',function(error){
	if(error){
		console.log(error);
	}
	else{
		console.log("connected.....wait");
	}
});


var workSchema = mongoose.Schema({
   
   wname:String
   
});
var Worksheet = mongoose.model("Worksheet",workSchema,"workbook");


module.exports=Worksheet;
