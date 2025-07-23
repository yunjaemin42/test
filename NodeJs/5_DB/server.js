const express = require('express')
const app = express()

const mainRouter = require('./routes/mainRouter')
const userRouter = require('./routes/userRouter')

const cors = require('cors')
app.use(cors())

// 정적인 파일 경로 지정
app.use(express.static(__dirname+'/public'))

// post방식 시 데이터 변환 미들웨어
app.use(express.urlencoded({extended : true}))
app.use(express.json())

//메인 경로
app.use('/',mainRouter)
app.use('/user',userRouter)

app.listen(3001,()=>{
    console.log('3001 port waiting...')
})
