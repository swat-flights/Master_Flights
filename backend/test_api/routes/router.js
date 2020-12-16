//Mofule Router to handle and redirect all request
const flight = require('./flight')
const auth = require('./auth')

const routes = function (server) {
  const PATH = '/api/v1'
  server.use(PATH + '/flight', flight);
  server.use(PATH + '/', auth);
}

module.exports = routes;