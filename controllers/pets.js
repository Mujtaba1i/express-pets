const Pet = require('../models/pet')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    await Pet.create(req.body)
    res.status(201).send()
})

module.exports = router;