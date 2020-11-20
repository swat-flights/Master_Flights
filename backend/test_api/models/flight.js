const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema(
  {
    departure: {type:String, required:true},
    departure_time: String,
    arrival: {type:String, required:true},
    arrival_time: String,
    flight_duration: Number,
    flight_url: String,
    stopovers: [
      {
      stopover_departure: {type:String, required:true},
      stopover_departure_time: String,
      stopover_arrival: {type:String, required:true},
      stopover_arrival_time: String,
      stopover_flight_duration: Number,
      stopover_flight_number: String,
      stopover_flight_airplane_model: String,
      stopover_airline_image: String,
      stopover_duration: Number
      }
    ],
    prices: [
      {
      category: {type:String, required:true},
      currency: String,
      price: Number
      }
    ]
  }
);

const Flight = mongoose.model('Flight', FlightSchema); // convert to model named Flight

module.exports = Flight; // export for controller use

/*
EXAMPLE

{
  departure: "EZE",
  departure_time: "18:35",
  arrival: "MAD",
  arrival_time: "13:10",
  flight_duration: 875,
  flight_url: "an flight website url",
  stopovers: [
    {
    stopover_departure: "EZE",
    stopover_departure_time: "18:35",
    stopover_arrival: "GRU",
    stopover_arrival_time: "21:20",
    stopover_flight_duration: 165,
    stopover_flight_number: "LA8011",
    stopover_flight_airplane_model: "Airbus 320-200",
    stopover_airline_image: "an image file url",
    stopover_duration: 95,
    },
    {
    stopover_departure: "GRU",
    stopover_departure_time: "22:55",
    stopover_arrival: "MAD",
    stopover_arrival_time: "13:10+1",
    stopover_flight_duration: 615,
    stopover_flight_number: "LA8064",
    stopover_flight_airplane_model: "Boeing 777-300",
    stopover_airline_image: "an image file url",
    stopover_duration: 0,
    },
  ],
  prices: [
    {
    category: "LIGHT",
    currency: "US$",
    price: 551
    },
    {
    category: "PLUS",
    currency: "US$",
    price: 624
    },
    {
    category: "TOP",
    currency: "US$",
    price: 707
    },
  ]
}

*/
