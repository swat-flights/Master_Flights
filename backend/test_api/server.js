const express = require("express");
const routes = require('./routes/flight'); // import the routes
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

//express
const app = express();

// db conection
const DB = require('./db/mongoDB.js')
DB(process.env.MONGODB_URI)

//middlewares
app.use(express.json());
app.use(helmet());
app.use(compression());

// routes
app.use('/', routes); 
// Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
});
