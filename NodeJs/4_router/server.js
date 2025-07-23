const express = require('express')
const app = express()

const mainRouter = require('./routes/mainRouter')
const subRouter = require('./routes/subRouter')

// 정적인 파일 경로 지정
app.use(express.static(__dirname+'/public'))

/* Router
    - 한 파일 안에서 모든 경로를 다루면 하나 파일에 의존적
    - 유지보수가 어려워지고, 코드의 볼륨이 비효율적
    - router를 이용해서 파일로 쪼개주는 작업
    - 메인 파일에는 서버 생성, 모듈 관리, 미들웨어를 관리 역할로만!
 */

//메인 경로
app.use('/',mainRouter)

// 서브경로
app.use('/esports',subRouter)

app.listen(3001,()=>{
    console.log('3001 port waiting...')
})
