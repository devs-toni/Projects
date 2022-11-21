'use strict'

const mongoose = require('mongoose');
/* const { appConfig } = require('../config');

 */
let schema = mongoose.Schema;

let CvSchema = new schema({
    name: String,
    center: String,
    date: String,
    topic: String,
    description: String
});

module.exports = mongoose.model('Curriculum', CvSchema);