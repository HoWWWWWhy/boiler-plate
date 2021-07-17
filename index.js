// backend server entry point

require("dotenv").config();

const express = require('express')
const app = express()
const port = process.env.PORT

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@boiler-plate.bj2wk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(() => console.log('MongoDB connected!'))
.catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

