// 필요한 모듈 불러오기
const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
    // 1. 사용자가 넘긴 url 데이터를 조회 => form태그 안에서 method를 get방식으로
    // 지정하게 되면 url에 데이터를 동반해서 보내기 때문!
    console.log(req.url);

    // 2. 넘겨받은 String형태의 데이터를 조회할 수 있게 qs방식으로 변경
    // url모듈을 활용해서 분리를 진행 => true를 넣게 되면 String데이터 -> object데이터로 변환
    // .query => URL부분에서 쿼리 부분만 꺼낸다.
    let url_qr = url.parse(req.url,true).query;
    console.log('변형된 데이터 : ', url_qr);

    // 콘솔창에 num1과 num2의 더한 결과를 출력
    //console.log('정답 : ',Number(url_qr.num1) + Number(url_qr.num2));
    let num1 = Number(url_qr.num1);
    let num2 = Number(url_qr.num2);
    let opr = url_qr.opr;
    // 연산 기호에 맞게끔 조건문 처리 => 결과를 콘솔창에 출력
    if(opr == '+'){
        console.log('정답 : ',num1 + num2);
    }
    else if(opr == '-'){
        console.log('정답 : ',num1 - num2);
    }
    else if(opr == '*'){
        console.log('정답 : ',num1 * num2);
    }
    else {
        console.log('정답 : ',num1 / num2);
    }
}).listen(3100)