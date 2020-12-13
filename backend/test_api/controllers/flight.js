// import flight model
const Flight = require('../models/flight');

const { handleFlightData }= require('../utils/flightsHandlers/handleFlightData');

// GET all flights
const getAllFlights = () => {
  return new Promise((resolve, reject) => {
    return Flight.find({}, (error, data) => {
      return error ? 
      reject(error)
      :resolve(data)
    })
  })
}

//filter by query params
const filterFlights = (queryParams) => {
  return new Promise((resolve, reject) => {
    return Flight.find(queryParams, (error, data) => {
      error ? 
      reject(error)
      :resolve(data)
    })
  })
};

const getOneFlight = (id) => {
  return new Promise((resolve, reject) => {
    return Flight.find({_id: id}, (error, data) => {
      return error ? 
      reject('[Controller Error]: ' + error)
      // flight document exist?
      :data.length === 0?
      reject('Non-existent Document ' + error)
      :resolve(data)
    })
  })
}

// POST flight
const newFlight = (flightData) => {
  return new Promise((resolve, reject) => {
    if(!flightData._id) {
      return reject('[Controller Error:] Missing a valid ID')
    }
    // check if the flight already exists in db
    Flight.findOne({_id:flightData._id}, (error, data) => {
      if (data) {
        return reject('This file currently exists. Edition is possible')
      }

      // handler to build all flight schema with data recived on request body
      const myFlight = handleFlightData(flightData)

      //if not, let's create it
      const newFlight = new Flight(myFlight)
      newFlight.save((error, data) => {
        return error?
        reject('[Error on controller]: ' + error)
        :resolve(data)
      })
    })
  })
};

// PATCH flight
const updateFlight = (id, newData) => {
  return new Promise((resolve, reject) => {
    if(newData._id) {
      return reject('Is not possible to update id value')
    }
    Flight.findOneAndUpdate({_id: id}, newData, {new: true} ,(error, updatedFlight) => {
      return error?
        reject('[Error on controller]: ' + error)
        :!updatedFlight?
        reject('Non-existent Document ' + error)
        :resolve(updatedFlight)
    })
  })
}

const removeFlight = (id) => {
  return new Promise((resolve, reject) => {
    if(!id) {
      return reject('Bad Request')
    }
    Flight.findOneAndDelete({_id: id}, (error, flightDeleted) => {
      return error?
        reject('[Error on controller]: ' + error)
        :!flightDeleted?
        reject('Non-existent Document ' + error)
        :resolve(flightDeleted)
    })
  })
}

module.exports = {
  getAllFlights,
  filterFlights,
  getOneFlight,
  newFlight,
  updateFlight,
  removeFlight,
};
