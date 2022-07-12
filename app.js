//1.
function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if( hrs >= 12){
        session.innerHTML = 'PM'
    } else{
        session.innerHTML = 'AM'
    }
    if(hrs > 12){
        hrs = hrs - 12;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);
//2.
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("co-slider")
    let dots = document.getElementsByClassName("dot")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}