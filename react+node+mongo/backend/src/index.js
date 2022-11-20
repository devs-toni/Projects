'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = 3900;

const url = 'mongodb://localhost:27017/api-restnotas';

mongoose.Promise = global.Promise;

let article_routes = require('./routes/article');

// Cargamos body-parser, que es un middleware para analizar cuerpos a través de la URL
app.use(bodyParser.urlencoded({extended: false}));
// Cualquier petición la convertimos a formato JSON
app.use(bodyParser.json());

// Activamos el CORS para permitir las peticiones asíncronas AJAX y HTTP desde el frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', article_routes);


mongoose.connect(url, {useNewUrlParser: true}).then(() => {
    console.log('Conexión a la bbdd realizada con exito!!!!');
    app.listen(port, () => {
        console.log('Lanzando la aplicación en el puerto ' + port);
    });
});