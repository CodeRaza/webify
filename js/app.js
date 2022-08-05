const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

if(btn){
    btn.addEventListener('click', () => {
        btn.classList.toggle('open')
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
    })
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("on-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


function showSlide2(n) {
    var i;
    var slides = document.getElementsByClassName("sc-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function plusSlides2(n) {
    showSlide2(slideIndex += n);
}
function currentSlide2(n) {
    showSlide2(slideIndex = n);
}

var slideIndex = 1;
showSlides(slideIndex);


var slideIndex2 = 1;
showSlide2(slideIndex2);

// Dialog box logic

function toggleDialogBox(){
    const elm = document.getElementById("dia-box");

    if(elm){
        elm.classList.toggle("hidden")
        console.log(2);
    }
}