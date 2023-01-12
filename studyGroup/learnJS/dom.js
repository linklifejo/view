// 웹브라우저에 내장된 자바스크립트 해석엔진이 해석한 HTML
// const h1 = document.getElementById("title");
// console.log(h1.textContent);
// h1.innerHTML = "<a href=\"#\">Dom 조작완료</a>";
// const h1 = document.querySelector("#title");
// console.log(h1.textContent);
// h1.innerHTML = '<a href="#">Dom 조작완료</a>';
// h1.classList.add("gold_bg");
const h1 = document.querySelector("#title");
const showBt = document.querySelector("#show");
const hideBt = document.querySelector("#hide");
showBt.addEventListener("click",function(){
    h1.style.display = "block";
});
hideBt.addEventListener("click",function(){
    h1.style.display = "none";
})
