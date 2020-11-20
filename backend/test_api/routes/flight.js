const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flight');

router.get('/flights', flightController.getAllFlights);
router.post('/flight', flightController.newFlight);

module.exports = router; //export to use in server.js
