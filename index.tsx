const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
// can not find error occured
// const { User } = require('./models/User');
const { User } = require('./models/User.tsx');
const config = require('./config/key.tsx');

// application/x-www-urlencoded data 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));
// application/json data 분석해서 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    // 에러방지 
    useNewUrlParrser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected!')).catch(err => console.log(err))

// router
// npm run backend로 nodemon으로 실행 시 코드 변화 바로 적용되어 결과 확인 가능
app.get('/', (req, res) => res.send('Hello World! 54321'))

// client에서 입력 된 signup data database에 넣어줌
// sign-up
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

// sign-in
app.post('/login', (req, res) => {
    // 요청된 이메일 데이터베이스에서 찾음
    User.findOne({ email:req.body.email}, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: 'false',
                message: '입력한 이메일로 가입된 계정이 없습니다.'
            })
        }
    })
    // 요청된 이메일 데이터베이스에 존재 시 비밀번호 확인
    User.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) return res.json({loginSuccess: 'false', message: '비밀번호가 틀렸습니다.'})
        // 비밀번호 맞으면 토큰 생성
        User.generateToken((err, user) => {
            
        })
    })

})

app.listen(port, () => console.log('Example app listening on port' + port + '!'))