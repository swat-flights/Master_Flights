const express = require("express");
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors')
require('dotenv').config();
const router = require('./routes/router.js');

//express
const app = express();

// db conection
const DB = require('./db/mongoDB.js');
DB(process.env.MONGODB_URI);

//middlewares
app.use(cors())
app.use(express.json());
app.use(helmet());
app.use(compression());

// routes
router(app); 

//static files
app.use('/', express.static('public'));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
});
