// 필요한 모듈을 불러와야 한다. => fs
const fs = require('fs');

// HTML 파일 읽기
fs.readFile('index.html','utf-8',(err,data)=>{
    if(err){
        console.error('파일 읽기 오류:',err)
        return;
    }

    console.log('원본 파일 읽기 완료');

    // 문서안 내용을 수정
    let modifiedData = data.replace('Original Document','Modified Document')
    modifiedData = modifiedData.replace('Welcome to the Original Page','Welcome to the Modified Page')
    modifiedData = modifiedData.replace('This is the content of the Original HTML file.','This content has been modified')

    // 수정된 내용을 새로운 파일에 쓰기
    // fs.writeFile('파일 이름(경로)','수정데이터',콜백함수)
    fs.writeFile('output.html', modifiedData, (err)=>{
        if(err){
            console.error('파일 쓰기 오류 :',err);
            return;
        }
        console.log('수정된 파일이 저장되었습니다.');
    })
})