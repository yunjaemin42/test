const express  = require('express')
const router = express.Router()
const path = require('path')
const file_path = path.join(__dirname,'..','public')

// esports 서브라우터
// 여기에 적는 경로들은 앞에 /esports가 붙음

router.get('/',(req,res)=>{
    console.log('E스포츠 페이지입니다.')
    res.sendFile(file_path+'/esports.html')
})

router.get('/lol',(req,res)=>{
    res.sendFile(file_path+'/lol.html')
})

router.get('/fc',(req,res)=>{
    res.sendFile(file_path+'/fc.html')
})
module.exports = router;