var expect = require("chai").expect;
var request = require('supertest');
var router = require("../routes/api.js");
var app = require("../routes/index.js")
describe("my rest api server",function(){
	var id;
it("respond with json and 200 status",function(){
	request(app)
	.get('/templete')
	.set('Accept','application/json')
	.expect(200)
	.expect('Content-Type',/json/)
	.end(function(err,res){
	//expect(res.body).to.eql({});
	if(err) return err;
});
});	

it("creats an island",function(){
	request(router)
	.post('/k1')
	.send({no:1,name:"Prashi",des:"Subhu"})
	.set('Accept','application/json')
	.end(function(err,res){
	expect(err).to.be.null;
	expect(res.body).to.have.property('message', "New person added");

	var island = res.body['newPerson'];
	expect(island).to.contain.keys('_id','no','name','des');


id = island['_id'];
expect(id).to.not.be.null;

});
});

it("retrieves all islands",function(done){
request(router)
.get('/create')
.set('Accept','application/json')
.end(function(err,res){

expect(err).to.be.null;
expect(res.body).to.be.instanceOf(Array);
expect(res.body.length).to.be.at.least(1);

});
});
/*
it("updates an island",function(done){
	request(router)
	.post('/edit/${id}')
	.send({name:"test",des:"test123"})
	.set('Accept','application/json')
	.end(function(err,res){
	expect(err).to.be.null;
	expect(res.body).to.have.property('message','employee updated');
done();
});
});

it("delets an island",function(done){
superagent.post('http://localhost:8000/templete/delete/'+no)
	//.set('x-api-key','123456')
	.set('Accept','application/json')
	.end(function(res){
	expect(res.body).to.have.property('message','Island deleted');
done();
});
});
*/
});