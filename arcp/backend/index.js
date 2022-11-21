'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
/* const config = require('./config');
console.log(config);
const { appConfig, dbConfig} = config;
const { db, dbPort, dbHost, dbName } = dbConfig;
const { appPort, appHost } = appConfig; */
const port = 3900;
const app = express();
/* const url = `${db}://${dbHost}:${dbPort}/${dbName}`;
 */
const url = 'mongodb://localhost:27017/arcp';

mongoose.Promise = global.Promise;

let router = require('./routes/router');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/', router);

mongoose.connect(url, {useNewUrlParser: true}).then(() => {
    console.log('Conexión a la bbdd realizada con exito!!!!');
    app.listen(port, () => {
        console.log('Lanzando la aplicación en el puerto ' + port);
    });
});
