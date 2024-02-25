//import dependencies
const express = require("express")

//create the router
const router = express.Router()

//create variable for cat API KEY
const apiKey = process.env.CAT_API_KEY

router.get('/catapi', async (req, res) => {
    try {
        //request to the catapi
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&api_key=${apiKey}`)

        //confirm request was successful
        if (!response.ok) {
            throw new Error('Failed to load cat')
        }
        //pull image url from the response
        const data = await response.json()
        const catImageUrl = data[0].url
        //return the image URL to the frontend
        res.json({ catImageUrl })
        console.log( catImageUrl )
        console.log( data ) 

    } catch (err) {
        res.status(400).json(err)
    }
})

//export the router
module.exports = router