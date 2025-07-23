       function print(){
            alert("기능이 실행됐습니다!");
        }
        // 실행 위치 : js를 작성하는 위치는 3가지 존재
        // 1) 인라인 방식 : 태그 안에 직접 js코드를 작성하는 기법
        // 2) 내부 방식 : HTML파일 안에 <script> 태그를 통해서 작성하는 기법
        // 단점 : 개발자도구에 코드가 노출 -> 로컬개발에만 사용
        // 3) 외부 방식 : HTML과 JS를 분리해서 작업
        // <script src="파일.js"> 파일을 호출해서 사용한다.
        // 장점 : 유지보수가 용이하다, 코드가 노출 x, 한줄의 코드를 가지고 많은 양의 코드를 호출 가능
        
        document.getElementById("btn2").addEventListener("click",print);