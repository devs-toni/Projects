'use strict'

const mongoose = require('mongoose');
/* const { appConfig } = require('../config');

 */
let schema = mongoose.Schema;

let ProjectSchema = new schema({
    name: String,
    description: String,
    image: String,
});

ProjectSchema.methods.setImage = function setImage () {
/*     const { host, port } = appConfig; */
     this.image = `http://localhost:3900/public/${this.name}.png`;
 }

module.exports = mongoose.model('Project', ProjectSchema);