
// sliderFons - section 1
let fontSlide = ["url(img/img1-1.jpg)", "url(img/img1-2.jpg)", "url(img/img1-3.jpg)", "url(img/img1-4.jpg)", "url(img/img1-5.jpg)", "url(img/img1-6.jpg)", "url(img/img1-7.jpg)", "url(img/img1-8.jpg)"];
let i = 0;
let section1 = document.querySelector("#section-1");
let buttonNext = document.querySelector("#btn-switch-right");
let buttonBack = document.querySelector("#btn-switch-left");
let textNumber1 = document.querySelector("#text-number-switching-panel1");
let textNumber2 = document.querySelector("#text-number-switching-panel2");
buttonNext.addEventListener("click", function() {
    i++;
    if( i == -1) { i = 7; }
    if( i == 8) { i = 0; }
    section1.style.backgroundImage = "linear-gradient(to bottom, rgb(40, 39, 42, 0) 0%, rgb(40, 39, 42, 0.99) 100%), " + fontSlide[i];
    textNumber1.textContent = i + 1;
    textNumber2.textContent = i + 1;
});
buttonBack.addEventListener("click", function() {
    i--;
    if( i == -1) { i = 7; };
    if( i == 8) { i = 0; };
    section1.style.backgroundImage = "linear-gradient(to bottom, rgb(40, 39, 42, 0) 0%, rgb(40, 39, 42, 0.99) 100%), " + fontSlide[i];
    textNumber1.textContent = i + 1;
    textNumber2.textContent = i + 1;
});


// nav-menu-activ - section 1
let homeText1 = document.querySelector("#home-text1");
let homeText2 = document.querySelector("#home-text2");
let homeText3 = document.querySelector("#home-text3");
let homeText4 = document.querySelector("#home-text4");
let homeText5 = document.querySelector("#home-text5");

function deliteClassActive() {
    homeText1.classList.remove("active");
    homeText2.classList.remove("active");
    homeText3.classList.remove("active");
    homeText4.classList.remove("active");
    homeText5.classList.remove("active");
}
homeText1.addEventListener("click", function() { 
    deliteClassActive();
    homeText1.classList.add("active");
});
homeText2.addEventListener("click", function() {
    deliteClassActive(); 
    homeText2.classList.add("active");
});
homeText3.addEventListener("click", function() { 
    deliteClassActive();
    homeText3.classList.add("active");
});
homeText4.addEventListener("click", function() { 
    deliteClassActive();
    homeText4.classList.add("active");
});
homeText5.addEventListener("click", function() { 
    deliteClassActive();
    homeText5.classList.add("active");
});


// sliderFons - section 4
let j = 0;
let buttonNext2 = document.querySelector("#btn-switch-right-section-4");
let buttonBack2 = document.querySelector("#btn-switch-left-section-4");
let textNumber3 = document.querySelector("#text1-number-switching-panel-section-4");
buttonNext2.addEventListener("click", function() {
    j++;
    if( j == -1) { j = 2; }
    if( j == 3) { j = 0; }
    textNumber3.textContent = j + 1;
    console.log(1);
});
buttonBack2.addEventListener("click", function() {
    j--;
    if( j == -1) { j = 2; }
    if( j == 3) { j = 0; }
    textNumber3.textContent = j + 1;
    console.log(1);
});


// dropdown - section 4
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}