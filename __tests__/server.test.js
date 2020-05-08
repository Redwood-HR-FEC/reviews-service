
const request = require('supertest');
// const server = require('./server');

describe('Setting up Express server', () => {

  let server;
  beforeEach(() => {
    server = require('../server/ReviewApp');
  });
  afterEach((done) => {
    server.close(done);
  });

  test('Responds to /006', () => {
    request(server)
      .get('/006')
      .expect(200, done);
  });

  // test('404 everything else', function testPath(done) {
  //   request(server)
  //     .get('/foo/bar')
  //     .expect(404, done);
  // });

});
