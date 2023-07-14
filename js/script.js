let slides = document.querySelectorAll("#slides > img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  slides[n].style.display = "block";
};
function prevSlide() {
  if(current > 0) {
    current -= 1;
  }
  else {
    current = slides.length - 1;
  }
  showSlides(current)
}
function nextSlide() {
  if(current < slides.length - 1) {
    current += 1;
  }
  else {
    current = 0;
  }
  showSlides(current)
}
// 탭메뉴
// html 요소 선택
let topMenu = document.getElementById("topMenu");
let menuItems = document.getElementsByTagName("li");
// 이벤트 핸들러 함수 정의
function toggleSubMenu() {
  let subMenu = this.getElementsByTagName("ul")[0];
  if(subMenu.style.display === "block") {
    subMenu.style.display = "none";
  }
  else {
    subMenu.style.display = "block";
  }
};
// 메뉴 아이템에 이벤트 핸들러 추가
for(let i = 0; i < menuItems.length; i++) {
  if(menuItems[i].getElementsByTagName("ul").length > 0) {
    menuItems[i].addEventListener("click", toggleSubMenu)
  }
}