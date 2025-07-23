// 경로 : 실제 스포츠 경로 페이지

const express = require('express')
const router = express.Router()

const path = require('path') // 경로 수정 시 사용
const file_path = path.join(__dirname, '..', 'public')

// 메인페이지
router.get('/',(req,res)=>{
    // res.sendFile()
    console.log('메인에 접속했습니다.')
    res.sendFile(file_path+'/main.html')

    // ERROR Case
    // 현재 작업 중인 파일이 routes 폴더 안에 있기 때문에
    // 전에 했던 것과 달리 한 번 상위폴더로 올라가줘야함
    // => path 모듈을 이용해서 절대경로를 만들어보자!

})

// 회원가입 페이지로 이동
router.get('/join',(req,res)=>{
    res.sendFile(file_path+'/join.html')
})

// 로그인페이지로 이동
router.get('/login',(req,res)=>{
    res.sendFile(file_path+'/login.html')
})

// 회원삭제페이지로 이동
router.get('/delete',(req,res)=>{
    res.sendFile(file_path+'/delete.html')
})

// 회원정보수정페이지로 이동
router.get('/update',(req,res)=>{
    res.sendFile(file_path+'/update.html')
})

// 이 라우터 모듈을 외부에서 사용해야하기 때문에 exports 작업 필요
module.exports = router;
