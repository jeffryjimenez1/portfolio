const myCarousel = document.querySelector(".carousel");
const hamburgerBtn = document.querySelector(".navMenu-btn");
const mainNav = document.querySelector(".main-nav");
const navLink = document.querySelectorAll(".nav-item");
const titlePortfolio = document.querySelector(".titlePortfolio");
const subtitleSite = document.querySelector(".subtitleSite");
const mainPic = document.querySelector(".showcase-pic");

let slideIndex = 0;
showSlides();



// create slideshow
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

gsap.from(titlePortfolio,{duration: 2, y: '-400%', opacity: 0});
gsap.from(subtitleSite,{duration: 2, x: '-500%', delay: 1});
gsap.from(mainNav,{duration: 2, x: '-100%', opacity: 0, delay: 1.2});
gsap.from(mainPic,{duration: 2, x: '100%', delay: 1.3});
