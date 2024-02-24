// Import Dependencies
const express = require('express')
const Books = require('../models/books')

//Create the Router
const router = express.Router()

//Index Route
router.get('/', async (req, res) => {
    try{
        res.json(await Books.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})

//Create Route
router.post ('/', async (req, res) => {
    try{
        
        req.body.read = req.body.read === "on" ? true : false;
        
        res.json(await Books.create(req.body))

    } catch (err) {
        res.status(400).json(err)
    }
})

//Delete Route
router.delete('/:id', async (req, res) => {
    try{
        res.json(await Books.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
})

//Show Route
router.get('/:id', async (req, res) => {
    try{
        res.json(await Books.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
})

//Update Route
router.put('/:id', async (req, res) => {
    try{  
        
        req.body.read = req.body.read === "on" ? true : false;

        res.json(await Books.findByIdAndUpdate(req.params.id, req.body))

    } catch (err) {
        res.status(400).json(err)
    }
})


//Export the Router
module.exports = router