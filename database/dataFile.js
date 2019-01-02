var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
   no:{type: Number, required: true },
   name: {type: String, required: true},
   des: {type: String, required: true},
});
var Templete = mongoose.model("Templete", personSchema);
module.exports=Templete;
