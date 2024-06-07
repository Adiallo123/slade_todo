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


document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById('imageMB');
    
    iframe.addEventListener('load', function() {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const img = iframeDocument.getElementById('zoomMB');
        
        img.addEventListener('click', function() {
            if (iframe.classList.contains('fullscreen')) {
                iframe.classList.remove('fullscreen');
                iframeDocument.body.style.overflow = 'hidden';
            } else {
                iframe.classList.add('fullscreen');
                iframeDocument.body.style.overflow = 'scroll';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById('imageBrain');
    
    iframe.addEventListener('load', function() {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const img = iframeDocument.getElementById('zoomBrain');
        
        img.addEventListener('click', function() {
            if (iframe.classList.contains('fullscreen')) {
                iframe.classList.remove('fullscreen');
                iframeDocument.body.style.overflow = 'hidden';
            } else {
                iframe.classList.add('fullscreen');
                iframeDocument.body.style.overflow = 'scroll';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById('imageMob');
    
    iframe.addEventListener('load', function() {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const img = iframeDocument.getElementById('zoomMob');
        
        img.addEventListener('click', function() {
            if (iframe.classList.contains('fullscreen')) {
                iframe.classList.remove('fullscreen');
                iframeDocument.body.style.overflow = 'hidden';
            } else {
                iframe.classList.add('fullscreen');
                iframeDocument.body.style.overflow = 'scroll';
            }
        });
    });
});




