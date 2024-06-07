let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let pdfEmbed = document.querySelector('.pdf-view embed');
        if (pdfEmbed) {
            pdfEmbed.src = pdfEmbed.src + "#zoom=64";
            setTimeout(function() {
                pdfEmbed.scrollLeft = (pdfEmbed.scrollWidth - pdfEmbed.clientWidth) / 2;
            }, 1000);
        }
    }, 3000);
});


