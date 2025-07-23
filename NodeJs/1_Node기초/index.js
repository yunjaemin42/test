// Node를 실행하는 방법
// 1. Ctrl + ` -> 실행할 수 있는 터미널을 오픈하는 단축키
// 2. 상단 좌측 탭 -> Terminal -> New Terminal
// 3. 가장 중요한 점 ! -> 반드시 실행할 파일의 경로를 확인하기!

let {odd, even} = require('./var');

console.log(odd);
console.log(even);
// 파일 실행 -> node 파일명
// 실행되고 있는 터미널을 종료하는 단축키 -> Ctrl + C
// 파일 경로 설정 -> cd ../ -> 상위폴더로 나가겠다 | cd 내가 이동하고 싶은 경로

let num = 4;

// 삼항연산자(React에서도 사용)
// 조건식? '실행문장1' : '실행문장2'
let result = num%2 ===0 ? even : odd
console.log(result);