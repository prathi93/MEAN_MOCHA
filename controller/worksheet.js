var express=require('express');
var router=express.Router();
var Worksheet=require('../database/worksheetdb');
var mongoose=require("mongoose")


var create=function(req,resp,next){
     
    resp.render('work');
};
var creatp=function(req, res){
  var workInfo = req.body; //Get the parsed information
  console.log(req.body);
   if(!workInfo.wname)  {
      res.render('workdisp', {
         message: "Sorry, you provided worng info", type: "error"});
    } else {
      var newPerson = new Worksheet({
         wname: workInfo.wname

         });
        
      newPerson.save(function(err, Worksheet){
         if(err){
              console.log(err)
         
          res.render('workdisp', {message: "Database error", type: "error"});
        } else
          console.log(Worksheet)
          res.redirect('/worksheet/display');      
          // res.render('workdisp', {message: "New worksheet is added", type: "success", person: workInfo});
      });   
   }
}   
var display=function(req,res){

  Worksheet.find(function(err, response){
      res.render('dis',{user:response});
      });
}

module.exports.creatp=creatp;
module.exports.create=create;
module.exports.display=display;
