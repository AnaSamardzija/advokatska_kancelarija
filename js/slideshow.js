//slideshow efekat za slike
let slideIndex = 0;

function Slides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }   
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(Slides, 3000);
}

if(screen.width < 768){
    Slides();
}