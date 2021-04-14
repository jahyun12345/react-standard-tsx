const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jahyun12345:qlalfqjsgh12@jahyun12345.ijjvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // 에러방지 
    useNewUrlParrser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected!')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app listening on port' + port + '!'))