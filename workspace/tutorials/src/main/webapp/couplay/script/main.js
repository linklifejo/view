// ID중복확인 버튼 : #check_btn
// 아이디 입력 폼 : #user_id
// 이벤트(event) : 사용자가 클릭, 더블클릭, 엔터, 스페이스바를 누르거나 조작하는 행위
// ID중복확인 버튼을 선택(DOM : Document Object Model)

document.querySelector("#check_btn").addEventListener("click", function(){
    if(document.querySelector("#user_id").value === '') {
        alert("아이디를 입력하세요!");
    } else {
        alert("사용이 가능합니다.");
    }    
});