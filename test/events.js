var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

describe("Events",function(){

  it("list",function(done){

    server
    .get("/events")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.clientError.should.equal(false);

      res.body[0].id.should.be.Number()

      done();
    });
  });

});