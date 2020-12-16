const express = require('express');
const router = express.Router();
const response = require('../utils/response');
const flightController = require('../controllers/flight');

//routes
router.get('/', list);
router.get('/:id', getOne)
router.post('/', create);
router.patch('/:id', update)
router.delete('/:id', remove)

//routes handlers

// list flights
async function list(req, res) {
  //if not query params, get all documents
  !req.query?
  await flightController.getAllFlights()
    .then((flights) => response.success(req, res, flights, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
  
  // if yes, filter them.
  :await flightController.filterFlights(req.query)
    .then((flights) => response.success(req, res, flights, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
};

// get one flight
async function getOne(req, res) {
  const flightId = req.params.id
  await flightController.getOneFlight(flightId)
    .then((flight) => response.success(req, res, flight, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
}

// create one
async function create(req, res) {
  const data = req.body
  await flightController.newFlight(data)
    .then((flight) => response.success(req, res, flight, 201))
    .catch((error) => response.error(req, res, 'Error on flight creation', 500, error))
}

// update by id
async function update(req, res) {
  const id = req.params.id
  const newData = req.body
  await flightController.updateFlight(id, newData)
    .then((updatedFlight) => response.success(req, res, updatedFlight, 200))
    .catch((error) => response.error(req, res, 'Error updating', 500, error))
}

// delete by id
async function remove(req, res) {
  const id = req.params.id
  await flightController.removeFlight(id)
    .then((flighDeleted) => response.success(req, res, `Flight with id [${flighDeleted._id}]: correctly removed`, 200))
    .catch((error) => response.error(req, res, 'Internal Server Error', 500, error))
}

module.exports = router;
