var express=require('express');
var router=express.Router();
var Templete=require('../models/blob');
var mongoose=require("mongoose")



//template realetd api's

router.get('/templete',display );
router.get('/edit/:id',dispupd );
router.post('/display1',dispost );
router.post('/delete',deletePost );
router.get('/delete/:no',deletes );

router.post('/k2',creatp );
router.get('/create',create);

function create(req,resp,next){
      
    resp.render('k1');
}

function creatp(req, res){
  console.log("hello")
  
  var personInfo  =req.body;
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
              
             // res.redirect('/templete')
            //if not redirect to delete
           // res.json(Templete);
            res.render('k2', {message: "New person added", type: "success", person: personInfo});
         }
      });
   }
}
function display(req,res){

  Templete.find(function(err, response){
      res.send(response);
    //  res.render('display',{user:response});

      });
}

function dispupd(req,res){
    q=req.params.id;
  Templete.findOne({"_id": q}, function (err, product) {
    //res.send(product);
      res.render('k5',{user:product});
    });
}

function deletes(req,res){
    q=req.params.no;
    Templete.findOne({"no" : q}, function(err, response){
    res.render('k6',{user:response});
      });
 }
function dispost(req,res){
  console.log(req.body);

    var query={"_id": req.body.id}
   
    var newq={ "no":req.body.no, "name":req.body.name,"des":req.body.des }
  Templete.updateOne(query, newq,function(err, response){
      //res.render('k5',{user:response});
     
      res.send(response);
      //res.redirect('/templete')
  });  
}

function deletePost(req, res) {
      Templete.remove({'no':req.body.no}, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.redirect('/templete')
    });
  }

module.exports=router;
