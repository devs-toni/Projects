'use strict';

const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const myConnection = require('express-myconnection');
let router = require('./routes/router');
const mysql = require('mysql');

// settings 
//app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// static
app.use('/public', express.static(`${__dirname}/storage`));

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

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname,'cert', 'cert.pem'))
}, app);


// Starting SSL server
 sslServer.listen(3900, () => {
    console.log('Secure server is listening on port 3900')
}); 
/*
// Starting normal server
 app.listen(3900, () => {
    console.log('Server listening on port 3900');
 });
 */