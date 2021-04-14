const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
// can not find error occured
// const { User } = require('./models/User');
const { User } = require('./models/User.tsx');

// application/x-www-urlencoded data 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));
// application/json data 분석해서 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jahyun12345:qlalfqjsgh12@jahyun12345.ijjvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // 에러방지 
    useNewUrlParrser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected!')).catch(err => console.log(err))

// router
// npm run backend로 nodemon으로 실행 시 코드 변화 바로 적용되어 결과 확인 가능
app.get('/', (req, res) => res.send('Hello World! 54321'))

// client에서 입력 된 signup data database에 넣어줌
app.post('/register', (req, res) => {

    // bodyParser로 받아올 수 있음
    const user = new User(req.body)
    // mognoDB method : save()
    user.save((err, userInfo) => {
        // 실패(에러 발생)
        if (err) return res.json({ success:false, err})
        // 성공 : .status(200)
        return res.status(200).json({
            success:true
        })
    })

})

app.listen(port, () => console.log('Example app listening on port' + port + '!'))