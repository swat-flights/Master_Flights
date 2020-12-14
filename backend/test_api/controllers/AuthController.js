const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if (err) {
            res.json({
                error: err
            });
        } 

        let user = new User ({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        });
    
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