require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/usuario', function (req,res){
    res.json('Hola mundo');
});

app.post('/usuario', function (req,res){

    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok: false, 
            mensaje: 'el nombre es necesario'
        })
    }else{
        res.json({
            usuario: body
        });
    }
});

app.put('/usuario/:id', function (req,res){
    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function (req,res){
    res.json('Hola mundo');
});

app.listen(process.env.port, () =>{
    console.log('Escuchando en el purto:', process.env.PORT)
});