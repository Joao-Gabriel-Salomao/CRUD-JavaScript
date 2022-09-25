const assert = require('assert');
const requestTime = require('../request-time')


describe('requestTime middleware', function () {
   it('should add a `requestTime` property to the `req` parameter', function () {
   //chama a função
   // faz o assert
   const req = {};
   requestTime(req);

   assert.ok(req.requestTime > 0);

   // se o tempo de requisição for maior que 0 = PIMBA
   });
});


