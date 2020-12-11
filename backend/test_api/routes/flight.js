const express = require('express');
const router = express.Router();
const response = require('../utils/response');
const flightController = require('../controllers/flight');



router.get('/flights', list);
// router.post('/flight', flightController.newFlight);

async function list(req, res) {
  const origin = req.query.origin
  const destination = req.query.destination
  const departure = req.query.departure
  const arrival = req.query.arrival
  // console.log(departure)
  // console.log(location)
  await flightController.getAllFlights(origin, destination, departure, arrival)
    .then((flights) => response.success(req, res, flights, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
};

module.exports = router; //export to use in server.js
