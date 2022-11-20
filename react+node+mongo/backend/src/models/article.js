'use-strict'

const mongoose = require('mongoose');
let schema = mongoose.Schema;

let ArticleSchema = new schema({
    title: String,
    date: {type: Date, default: Date.now},
    content: String,
    author: String
});

module.exports = mongoose.model('Article', ArticleSchema);