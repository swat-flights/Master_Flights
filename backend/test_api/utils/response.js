// This module help us to handle the responses we give to client and the logs that help us to debbug the code.
// This way we give error and responses with more consitency

const statusMessages = {
    '200': 'Valid request',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
  }
  
  //handler succes requests
  exports.success = function (req, res, data, status) {
    let statusCode = status;
    let result = data;
    
    if (!status) {
      statusCode = 200;
    }
  
    if (!data) {
      result = statusMessages[statusCode];
    }
  
    res.status(statusCode).send({ 
      error: '',
      body: result
    });
  }
  
  //handle error request
  exports.error = function (req, res, data, status, details) {
    console.error('[response error] ' + details);
  
    let statusCode = status;
    let result = data;
    
    if (!status) {
      statusCode = 500;
    }
  
    if (!data) {
      result = statusMessages[statusCode];
    }
  
    res.status(statusCode).send({ 
      error: result,
      details: details, //this is not a god practice, client shouldn't get error details
      body: '',
    });
  }