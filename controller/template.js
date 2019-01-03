//var express=require('express');
var router=express.Router();
var Templete=require('../database/dataFile');
var mongoose=require("mongoose")



//to display ec1 contents

//to display all contents
/*var Create=function(req,resp,next){
     
    resp.render('k1');
};*/
var display=function(req,res){

  Templete.find(function(err, response){
      res.render('display',{user:response});

      });
}
var Front=function(req,resp,next){
      
    resp.render('k1');
}

var Fpost=function(req, res){
  console.log("hello")
  var personInfo  ={no:1,name:"Prashi",des:"Subhu"};
   
   if(!personInfo.no|| !personInfo.name|| !personInfo.des)  {
      res.render('k2', {
         message: "Sorry, you provided worng info", type: "error"});
    } else {
      var newPerson = new Templete({
         no: personInfo.no,
         name: personInfo.name,
         des: personInfo.des,
         });
        
      newPerson.save(function(err, Templete){
         if(err)
            res.render('k2', {message: "Database error", type: "error"});
         else{
              
            ///  res.redirect('/templete')
            //if not redirect to delete
            res.render('k2', {message: "New person added", type: "success", person: personInfo});
         }
      });
   }
}


var Del=function(req,res){
    q=req.params.no;
    Templete.findOne({"no" : q}, function(err, response){
    res.render('k6',{user:response});
      });
 }

var Edit=function(req,res){
    q=req.params.id;
  Templete.findOne({"_id": q}, function (err, product) {
      res.render('k5',{user:product});
    });
};
var Display1=function(req,res){
  console.log(req.body);
    var query={"_id": req.body.id}
    //console.log(req.body)
    var newq={ "no":req.body.no, "name":req.body.name,"des":req.body.des }
  Templete.updateOne(query, newq,function(err, response){
      //res.render('k5',{user:response});
      res.redirect('/templete')
  });  
}
var Rem=function (req, res) {
      Templete.remove({'no':req.body.no}, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.redirect('/templete')
    });
  }

module.exports.Rem=Rem,
module.exports.Display1=Display1,
module.exports.Del=Del,
module.exports.Edit=Edit,
module.exports.Front=Front,
module.exports.Fpost=Fpost,
module.exports.display=display
