$(document).ready(function() {
    const rightSide = document.querySelector('.r');
    rightSide.classList.add('t');

    $('.link').each(function(fadeInDiv) {
        $(this).delay(fadeInDiv * 500).addClass('f');
    }).delay(1000);


})