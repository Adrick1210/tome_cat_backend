//Dependencies
const express = require('express')
const Books = require('../models/books')

const router = express.Router()


router.get('/', async (req, res) => {
    try{
        res.json(await Books.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})


router.post ('/', async (req, res) => {
    try{
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

router.get('/:id', async (req, res) => {
    try{
        res.json(await Books.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
})


router.put('/:id', async (req, res) => {
    try{
        res.json(await Books.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})



module.exports = router