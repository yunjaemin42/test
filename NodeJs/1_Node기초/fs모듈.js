// file system모듈을 활용해서 직접 작성한 글이 아니라 파일을 리턴해보기
const http = require('http');
const fs = require('fs').promises;  // 비동기 처리를 위한 데이터로 받아오겠다.

// async키워드를 사용할 시 => 비동기 함수를 사용하겠다 선언!
http.createServer(async(req,res)=>{
    // 1. 우리가 만든 리턴.html 파일을 전달하기
    let html = await fs.readFile('./리턴.html')
    res.writeHead(200,{"content-type": "text/html; charset=utf-8"})
    res.write(html)
    // HTTP응답을 종료하겠다.
    // res.end()를 호출하지 않으면, 브라우저는 응답이 아직 진행중이다라고 생각해서 계속 기다린다.
    res.end()
}).listen(3100)