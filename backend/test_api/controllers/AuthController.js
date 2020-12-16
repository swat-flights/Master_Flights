const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    // validamos que el usuario no exista
    User.exists({email: req.body.email}, (error, data) => {
      if(error) {
        return console.error("[controller ERROR]: " + error)
      }
      else {
        if(data) {
          return res.json({
            message: "Usuario existente"
          });
        }
        //si no existe lo creamos
        if(!data) {
          //encriptacion de contraseña
          bcrypt.hash(req.body.password, 10, function(err, hashedPass){
            if (err) {
                res.json({
                    error: err
                });
            } 
    
            //modelos del usuario
            let user = new User ({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                password: hashedPass
            });
            
            //almacenamiendo en db
            user.save()
            .then(user =>{
                res.json({
                    message: "Usuario creado satisfactoriamente!"
                })
            })
            .catch(error => {
                res.json({
                    message: "Se presentaron problemas al crear el usuario!"
                })
            });
          });   
        }
      }
    })
}

const login = (req, res, next)=>{
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({$or: [{email:username}, {phone: username}]})
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({name: username}, 'secretValue', {expiresIn: '1h'});
                    res.json({
                        message: 'Inicio de sesión realizado',
                        token
                    });
                }else{
                    res.json({
                        message: 'Contraseña incorrecta!!'
                    })
                }
            })
        }else{
            res.json({
                message: "El usuario no existe."
            })
        }
    })
}

const list = (req, res, next)=>{
    User.find()
    .then(response => {
        res.json({
            response
        });
    })
    .catch(error =>{
        res.json({
            message: "Se presentó un error al mostrar los usuarios."
        })
    });
}

module.exports = {register, login, list};