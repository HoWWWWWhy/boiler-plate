// backend server entry point

require("dotenv").config({
    path: process.env.NODE_ENV === 'production' ? '.env' : '.env.dev'
});

const express = require('express')
const app = express()
const port = 3000
const { User } = require('./models/User')

//application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
//application/json
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@boiler-plate.bj2wk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(() => console.log('MongoDB connected!'))
.catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.post('/register', (req, res) => {
    //회원가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body);

    user.save((err, doc) => {
        if(err) {
            return res.json({ success: false, err})
        } else {
            return res.status(200).json({ success: true})
        }

    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

