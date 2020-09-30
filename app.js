const myCarousel = document.querySelector(".carousel");
const hamburgerBtn = document.querySelector(".navMenu-btn");
const mainNav = document.querySelector(".main-nav");
const navLink = document.querySelectorAll(".nav-item");

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
    setTimeout(showSlides, 4000);
    
}

// make nav
hamburgerBtn.addEventListener('click', ()=> {
    mainNav.classList.toggle('change');
})


navLink.forEach( function(link){
    link.addEventListener('click', () => {
        mainNav.classList.toggle('change');
    })
})




// create slideshow
