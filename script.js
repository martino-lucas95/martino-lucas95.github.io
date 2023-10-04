document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos a la brevedad.');
});

var amountScrolled = 300;

window.addEventListener('scroll', function() {
    var backToTop = document.getElementById('back-to-top');
    
    if (window.pageYOffset > amountScrolled) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
