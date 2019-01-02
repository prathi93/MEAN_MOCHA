process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../server.js');
var Blob = require("../database/dataFile");

var should = chai.should();
chai.use(chaiHttp);


describe('Employees', function() {

  Blob.collection.drop();

 // beforeEach(function(done){
 //    var newPerson = new Blob({
 //         no: 1,
 //         name:"Prashi",
 //         des: "Subhu",
 //      });
      
 //    newPerson.save(function(err) {
 //    done();
 //    });
 //  });
 //  afterEach(function(){
 //    Blob.collection.drop();
 //    //done();
 //  });

  it('should list ALL  /templete GET', function() {
    chai.request(server)
      .get('/templete')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('no');
        res.body[0].should.have.property('name');
        res.body[0].should.have.property('des');
        res.body[0].no.should.equal(1);
        res.body[0].name.should.equal('Prashanth');
        res.body[0].des.should.equal('Subhu');
       
      });
  });

  it('should  POST', function() {
    chai.request(server)
      .post('/k2')
      .send({'no':3,'name': 'Java', 'des': 'Script'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.be.a('object');
        res.body.message.should.have.property('no');
        res.body.message.should.have.property('name');
        res.body.message.should.have.property('des');
        res.body.message.should.have.property('_id');
        res.body.message.no.should.equal(1);
        res.body.message.name.should.equal('Prashi');
        res.body.message.des.should.equal('Subhu');
        //done();
      });
  });

  it('should list a /edit/:id  GET', function() {
      var  newBlob = new Blob({
        no:3,
        name: 'Java',
        des: 'Programing'
      });
      newBlob.save(function(err, data) {
        var id = data.id
        console.log(id);
        chai.request(server)
          .post('/display1')
          .send({_id:id,no:3,name:"Prashi",des:"Subhu"})        
          .end(function(err, res){
        //console.log(res);
            res.should.have.status(200);
            res.should.be.json;
            // res.body.should.be.a('object');
            // res.body.should.have.property('ok');
            //res.body[0].ok.should.be.equal(1)
            
          });
      });
  });

});
