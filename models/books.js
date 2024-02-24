const mongoose = require('./connection')

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    read: Boolean,
})

const Books = mongoose.model('Books', BookSchema)

module.exports = Books;