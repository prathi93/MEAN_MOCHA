/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = mongoose.Schema({
   no:{type: Number, required: true },
   name: {type: String, required: true},
   des: {type: String, required: true},
});


module.exports = mongoose.model('blobs', personSchema);
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blobSchema = mongoose.Schema({
   no:{type: Number, required: true },
   name: {type: String, required: true},
   des: {type: String, required: true},
});


module.exports = mongoose.model('blobs', blobSchema);
