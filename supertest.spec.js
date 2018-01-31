const request = require('supertest');
const express = require('express');
const app = express();

describe('GET /user', function() {
  it('user.name should be an case-insensitive match for "tobi"', function(done) {
    request('http://localhost:8000')
      .get('/')
      .expect(200, done);
  });
});
