// create slideshow
const myCarousel = document.querySelector(".carousel");

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let carouselSlides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < carouselSlides.length; i++) {
        carouselSlides[i].style.display = 'none';
    }

    slideIndex++;
    if(slideIndex > carouselSlides.length) {
        slideIndex = 1;
    }
    carouselSlides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
    
}