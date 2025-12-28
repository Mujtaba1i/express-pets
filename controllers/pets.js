const Pet = require('../models/pet')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const allPets = await Pet.find()
        res.status(200).json(allPets)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({err: 'Failed to Fetch Data'})        
    }
})


router.post('/', async (req, res) => {
    try {
        const creatdPet = await Pet.create(req.body)
        res.status(201).json(creatdPet)        
    } catch (err) {
        console.log(err.message)
        res.status(422).json({err: 'Failed to Create'})
    }

})

module.exports = router;