var express=require("Express");
var bodyParser=require("body-parser");
var path=require('path');
var mongoose = require("mongoose");
// index and api object contain the path of routing  files for our application
var api=require('./routes/api');
var app=express();

 var config = require('./routes/config');

// //var worksheet=require('./controller/worksheet.js');

 mongoose.connect(config.mongoURI[app.settings.env], function(err, result) {
   if(err) {
 //    console.log('Error connecting to the database. ' + err);
   } else {
  //   console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
   }
 });

// define the view engine and set the path for views files
app.set('view engine', 'jade');
app.set('views',path.join(__dirname,'/client/views'));
//Register given template engine callback function as extension
app.engine('html',require('jade').renderFile);
// Defien the path for the static files like image, css and js files
app.use(express.static(path.join(__dirname,'/public')));
// Define the middleware to parse the data from URL request and requesy body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',api);

app.listen(8000);
module.exports = app;
