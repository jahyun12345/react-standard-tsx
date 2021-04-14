const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// saltRounds : 암호화 비밀번호인 salt가 몇 글자인지
const saltRounds = 10;


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    mail: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    // auth 구분 위해
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// User Model 호출하여 save() 메소드 실행 전에 먼저 실행되도록 설정
// arrow function 사용시 this 사용 불가능하므로 function()로 설정
userSchema.pre('save', function(next) {
    var user = this;
    
    // 암호 변경시에만 호출되도록 설정
    if (user.isModified('password')) {
        // salt 생성 => salt 이용하여 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err)
                user.password = hash
                // index에서 호출되도록 next() 호출
                next()
            });
        });
    // 암호 변경이 아닌 경우에 넘어가도록 설정 
    } else {
        next()
    }
})

// 입력 비밀번호 일치 확인 메소드
// index comparePassword method와 바인딩되어 있으므로 이름 일치
userSchema.methods.comparePassword = function(plainPassword, cb) {
    // plainPassword : 암호화된 입력 비밀번호
    // this.password : 암호화된 db에 저장된 비밀번호
    // 암호화 값 비교위해 bcrypt.compare 사용
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) return cb(err),
        // 두 비밀번호 일치 시 isMatch true 값 반환
        cb(null, isMatch)
    })
}

const User = mongoose.model('User', userSchema)

module.exports = { User }