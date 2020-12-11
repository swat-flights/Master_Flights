// import flight model
const Flight = require('../models/flight');

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
const filterFlights = (origin, destination, departure, arrival) => {
  return new Promise((resolve, reject) => {
    // return Flight.find(queryParams, (error, data) => {
    //   error ? 
    //   reject(error)
    //   :resolve(data)
    // })

    // query momentaneo, esperando modificaciones en DB
    return Flight.find({
      origin: origin,
      destination: destination, 
      departure: { $gte: departure },
      arrival: { $lte: arrival }
    }, (error, data) => {
      return error ? 
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
      :!data?
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
      //if not, let's create it
      const newFlight = new Flight({
        _id: flightData._id,
        price: `MX$${flightData.price}`,
        operator: flightData.operator,
        departure: flightData.departure,
        arrival: flightData.arrival,
        duration: flightData.duration,
        origin: flightData.origin,
        destination: flightData.destination,
        // departure_time: flightData.departure_time,
        // arrival_time: flightData.arrival_time,
        stopovers: [],
        prices: []
        // flight_url: flightData.flight_url,
      })
      newFlight.save((error, data) => {
        return error?
        reject('[Error on controller]: ' + error)
        :resolve(data)
      })
    })
  })
};

const updateFlight = (id, newData) => {
  return new Promise((resolve, reject) => {
    if(newData._id) {
      return reject('Is not possible to update an existent id')
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
    Flight.findOneAndDelete({_id: id}, (error, flight) => {
      if(!flight){
        console.error('Non-existent Document ' + error)
      }
      return error?
        reject('[Error on controller]: ' + error)
        :resolve(flight)
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
