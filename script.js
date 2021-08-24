let slideIndex = 1;
let imgs = ["images/desktop-image-hero-1.jpg", "images/desktop-image-hero-2.jpg", "images/desktop-image-hero-3.jpg"]
let slideImg = document.getElementsByClassName('banner-img')

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("banner");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "grid";
    slideImg[slideIndex-1].src = imgs[slideIndex-1]
    // slideImg[slideIndex-1].style.backgroundImage = `url(${imgs[slideIndex-1]})`
 }

 showSlides(slideIndex);
