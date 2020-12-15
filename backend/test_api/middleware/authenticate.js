const jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
    try{
      console.log(req)
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token,'secretValue');

        req.user = decode
        next()
    }
    catch(error){
        res.json({
            message: 'Error en la autenticación!!'
        });
    }
}

module.exports = authenticate;