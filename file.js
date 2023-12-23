
// Slide scripit //  

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


// dropdown script //

function dropdown(n) {

    let index = n;
    let drpdowncontent = document.getElementsByClassName("dropdown-content");
    if (drpdowncontent[index].style.display === 'none') {
        drpdowncontent[index].style.display = 'block';
    } else {
        drpdowncontent[index].style.display = 'none';
    }
}


// slidesshow dot //


let dotIndex = 0;
dotSlides(dotIndex);

function dotSlides(n)
{
    let slides = document.getElementsByClassName("dotslides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Show the current slide and set the corresponding dot as active
    slides[n].style.display = "block";
    dots[n].classList.add("active");
}
function currentSlide(n) {
    dotSlides(n);
}
// slidesshow1 dot //


let dotIndex1 = 0;
dotSlides1(dotIndex1);

function dotSlides1(n)
{
    let slides1 = document.getElementsByClassName("dotslides1");
    let dots1 = document.getElementsByClassName("dot1");
    

    // Hide all slides
    for (let i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }

    // Remove the "active" class from all dots
    for (let i = 0; i < dots1.length; i++) {
        dots1[i].classList.remove("active");
    }

    // Show the current slide and set the corresponding dot as active
    slides1[n].style.display = "block";
    dots1[n].classList.add("active");
}
function currentSlide1(n) {
    dotSlides1(n);
}

    








