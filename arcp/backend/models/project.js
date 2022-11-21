'use strict'

const mongoose = require('mongoose');
let schema = mongoose.Schema;

let ProjectSchema = new schema({
    name: String,
    date: String,
    center: String,
    description: String
});

module.exports = mongoose.model('Project', ProjectSchema);