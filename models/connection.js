require('dotenv').config()
const mongoose = require('mongoos')

mongoose.connect(process.env.DATABASE_URL)

module.exports = mongoose