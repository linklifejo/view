// 더보기 버튼 클릭하면, 포트폴리오 페이지로 이동!
//            click (event) : 사건, 사용자가 조작하는 키보드나 마우스의 움직임,동작
//        엔터키를 누르면,  : 감지하고 종류에 따라 나눈것
//            keyUp (event)
// HTML : 웹문서의 구조
// CSS : 웹문서의 스타일(=UI, 디자인)
// JS : HTML, CSS를 조작, 제어

//                           과거          vs       최근(jQuery의 영향)
// +더보기 : 대상을 선택(.getElementById(),... vs .querySelector())
// 과거 : var
// 최근 : (modern) let, const [immutable, 불변]
const moreBT = document.getElementById("more");

moreBT.addEventListener("click",function(){
	// 클릭 이벤트 발생시, 실행할 js 코드를 작성
	location.href="portfolio.html";
});
// 선택된 대상을 조작, 제어 (이벤트)

// 왼쪽 또는 오른쪽 버튼을 클릭하면
// 왼쪽으로 또는 오른쪽으로 '이동합니다' 라는 메세지창 띄우기
// alert('메세지내용');

let history = document.getElementsByClassName("history")[0];

let leftBtn = document.getElementsByClassName("circle")[0]; // left
leftBtn.addEventListener("click", function(){
	//console.log("왼쪽으로 이동합니다");
	history.style.marginLeft = "-333px";
});

let rightBtn = document.getElementsByClassName("circle")[1]; // right
rightBtn.addEventListener("click", function(){
	//console.log("오른쪽으로 이동합니다");
	history.style.marginRight = "-333px";
});














