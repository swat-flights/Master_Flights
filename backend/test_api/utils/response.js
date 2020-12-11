const statusMessages = {
    '200': 'Valid request',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
  }
  
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
      body: '',
    });
  }