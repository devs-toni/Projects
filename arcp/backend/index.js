'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const myConnection = require('express-myconnection');
let router = require('./routes/router');
const mysql = require('mysql');
var databaseName = "arcp";

// settings 
app.set('port', 3900);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// static
app.use('/public', express.static(`${__dirname}/storage/imgs`))

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'arcp'
 }, 'single'));
 
 // router
app.use('/', router);

 // starting server
 app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'));
 })