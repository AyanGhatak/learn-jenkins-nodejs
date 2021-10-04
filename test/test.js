var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with Hello Soumita', function(done) {
  //navigate to root and check the response is "hello world"
  request(app).get('/').expect('Hello Soumita', done);
 });
});