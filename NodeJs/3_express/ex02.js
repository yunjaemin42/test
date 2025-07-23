const express = require('express')
const app = express()

// 정적인 파일의 경로를 지정
app.use(express.static(__dirname +'/public'))

// post 방식으로 데이터를 전송 시 데이터를 파싱해주는 미들웨어
app.use(express.urlencoded({extended : true}))

// 메인 페이지
app.get('/', (req,res)=>{
    console.log('메인페이지')
    res.redirect('/login.html')

    // sendFile(택배아저씨) vs redirect(택시아저씨) 차이점?
    // - sendFile : 서버에 있는 파일을 브라우저로 직접 전송
    //              주소 값이 바뀌지 않음
    //              ex) 웹페이지(HTML), CSS, JS, 이미지 파일 등 정적인 파일 제공
    // - redirect : 브라우저에게 다른 주소로 가달라고 요청
    //              주소 값이 바뀜
    //              ex) 로그인 후 페이지 이동, 게시글 작성 완료 후 페이지 이동..
})

// get 방식으로 데이터 처리
// ★ express에서 get 데이터를 꺼내는 메소드 : req.query
app.get("/getLogin",(req,res)=>{
    console.log('get 요청',req.url)
    // url.parse(req.url,true).query => req.query
    console.log('변환 데이터',req.query)
    // 실습
    // 입력한 닉네임이 '관리자'라면, loginS 페이지로
    // 그 외라면 loginF 페이지로 이동(redirect 사용!)
    // -> 로그인 성공페이지 나오면 캡쳐해서 단톡방에
    nick = req.query.nick
    if(nick=='관리자'){
        res.redirect('/loginS.html')
    }
    else {
        res.redirect('/loginF.html')
    }

    // 위의 코드를 짧게 쓰는 방법! 조건 ? 실행문1 : 실행문2
    // req.query.nick === "관리자" ? res.redirect('/lognS.html') : res.redirect('/loginF.html')
})

// post 방식으로 데이터 처리
app.post("/postLogin",(req,res)=>{
    console.log("post방식 접근",req.body)

    // id가 admin 이고 비밀번호가 123인 회원 -> 로그인 성공
    // 그 외 -> 로그인 실패
    if(req.body.id==='admin' && req.body.pw == 123){
        res.redirect('/loginS.html')
    }
    else {
        res.redirect('/loginF.html')
    }
})
app.listen(3001,()=>{
    console.log('3001 port waiting...')
})