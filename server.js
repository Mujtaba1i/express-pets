const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const petCtrl = require('./controllers/pets')

try{
    mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on('connected', () => console.log(`Connected to MongoDB ${mongoose.connection.name}`));
}
catch(err){
    console.log('Ran into an error: ' +err)
}

// Middleware
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());


// Routes go here
app.use('/pets', petCtrl);




app.listen(3000, () => {
  console.log('Listing on port 3000');
});
