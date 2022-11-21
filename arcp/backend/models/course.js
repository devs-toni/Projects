'use strict';

const mongoose = require('mongoose');

let schema = mongoose.Schema;

let CourseSchema = new schema({
    name: String,
    center: String,
    hours: Number,
    link: String,
    image: String,
    hidden: String
});

CourseSchema.methods.setImage = function setImage () {
    this.image = `http://localhost:3900/public/${this.hidden}.png`;
}

module.exports = mongoose.model('Course', CourseSchema);