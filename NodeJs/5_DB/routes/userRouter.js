const express =  require('express')
const router = express.Router()

// DB 연결
const conn = require('../config/db')

// 회원가입의 기능 라우팅
router.post('/join',(req,res)=>{
    console.log('접근 확인')
    console.log('user join',req.body)
    let {id, pw, name, mbti, song} = req.body
    // console.log('id',id)

    // 사용자의 정보를 DB에 넣어야한다!
    // mySQL 사용, 사유는? 무료

    let sql = "INSERT INTO NODEJS_MEMBER VALUES (?,?,?,?,?)"
    conn.query(sql,[id, pw, name, mbti, song],(err,rows)=>{
        console.log('rows',rows)
        if(rows.affectedRows > 0) {
            // res.redirect('/')
            // 응답을 json 형태로 하겠습니다.
            res.json(1)
        } else {
            res.send('<script>alert("회원가입 실패!");window.location.href="http://localhost:3001/join"</script>')
            res.json(0)
        }
    })

})

// 로그인 기능 라우팅
router.post('/login',(req,res)=>{
    console.log('user login',req.body)
    let {id, pw} = req.body
    let sql = "SELECT ID FROM NODEJS_MEMBER WHERE ID=? AND PW =?;"
    conn.query(sql, [id, pw], (err,rows)=>{
        console.log('rows:',rows)
        console.log('length:',rows.length)
        // row(DB 응답 내용) --> 배열
        
        if(rows.length > 0){
            res.json(1)
            // res.redirect('/')
        }else {
            // res.send('<script>alert("아이디 혹은 비밀번호를 다시 입력해주세요.!");window.location.href="/login"</script>')
            res.json(0)
        }
    })

})

// 삭제 기능 라우팅
router.post('/delete',(req,res)=>{
    console.log('user delete',req.body)
    let {id, pw, mbti} = req.body
    let sql = "DELETE FROM NODEJS_MEMBER WHERE ID = ? AND PW = ? AND MBTI = ?; "
    conn.query(sql, [id,pw,mbti], (err,rows)=>{
        console.log('rows:',rows)
        console.log('affectedRows:',rows.affectedRows)

        if(rows.affectedRows > 0){
            res.redirect('/')
        }else {     
            res.send('<script>alert("정보를 다시 확인하세요.!");window.location.href="/delete"</script>')
        }
        })

})

// 업데이트 기능 라우팅
router.post('/update',(req,res)=>{
    console.log('user update',req.body)
    let {id, newSong} = req.body
    let sql = "UPDATE NODEJS_MEMBER SET SONG = ? WHERE ID = ? "
    conn.query(sql, [newSong,id], (err,rows)=>{
        console.log('rows:',rows)

        if(rows.affectedRows > 0){
            // res.redirect('/')
            res.send('<script>alert("노래를 변경되었습니다.!");window.location.href="/"</script>')
        }else {
            res.send('<script>alert("다시 확인해주세요.!");window.location.href="/update"</script>')
        }
        })
})

module.exports = router;