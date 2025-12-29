const Pet = require('../models/pet')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const allPets = await Pet.find()
        res.status(200).json({allPets})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({err: 'Failed to Fetch Data'})        
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const onePet = await Pet.findById(id)
        if (!onePet) {
            res.status(404).json({err: 'Pet Not Found'})
        } else {
            res.status(200).json({onePet})
        }
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

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const onePet = await Pet.findByIdAndUpdate(id, req.body, {new:true})
        res.status(202).json(onePet)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({err: 'Failed to Fetch Data'})        
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        await Pet.findByIdAndDelete(id)
        res.status(410).json({msg: 'Deleted'})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({err: 'Failed to Delete'})
    }
})

module.exports = router;