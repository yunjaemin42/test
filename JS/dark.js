// 실습 : 버튼을 클릭했을 때, 화면의 배경색은 검은색으로 글자색은 흰색으로 변경
        function change_mode(){
            // 대화 : 만약에 body태그가 class를 normal로 가지고 있다면 class를 dark로 바꿔라
            // 그렇지 않으면 class를 normal로 바꿔라
            if(document.getElementById("content").className == "normal"){
                document.getElementById("content").className = "dark"
                document.getElementById("btn").innerText = "일반모드 변경하기"
            }
            else{
                document.getElementById("content").className = "normal"
                document.getElementById("btn").innerText = "다크모드 변경하기"
                
            }
        }
        document.getElementById("btn").addEventListener("click",change_mode);