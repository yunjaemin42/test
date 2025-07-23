const http = require('http')
const m_url = require('url')
const qs = require('querystring')
// 문자열을 querystring 형태로 변환 (name, value 값으로 분석)

http.createServer((req,res)=>{
    console.log('누군가가 서버에 접근했습니다!')

    // 사용자가 입력한 값을 어딘가에 누적 : on
    var body = ""
    req.on('data', (data)=>{
        body += data
        console.log('body : ', body)
    })

    // 사용자가 입력한 데이터 수신이 끝났을 때 데이터를 출력 : end
    req.on('end',()=>{
        var post =qs.parse(body)
        console.log('post ID:',post.id)
        console.log('post PW:', post.pw)

        // 사용자에게 응답
        // 환영합니다 000(ID)님, 당신의 비밀번호는 0000(PW)입니다.
        res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'})
        res.write('<html><body>')
        res.write(`환영합니다 ${post.id}님, 당신의 비밀번호는 ${post.pw}입니다.`)

        res.write('<body></html>')
        res.end()
    })
}).listen(3001)