//import dependencies
const express = require('express')
const Creators = require('../models/Creators')

//create the router
const router = express.Router()

//Index route
router.get('/about', async (req, res) => {
    try {
        res.json(await Creators.find( {} ))
    } catch (err) {
        res.status(400).json(err)
    }
})

//export the router
module.exports = router