const express = require("express");
const routes = require('./routes/flight'); // import the routes
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

// import mongoose
const mongoose = require('mongoose');

const app = express();
app.use(helmet());
app.use(compression());

app.use(express.json());

app.use('/', routes); // to use the routes
// Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
    function (err) {
      if (err) return console.log("Error: ", err);
      console.log(
        "MongoDB connection -- Ready state is:",
        mongoose.connection.readyState
      );
    }
);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
});
