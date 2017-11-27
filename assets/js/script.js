$(document).ready(function() {
    const rightSide = document.querySelector('.r');
    rightSide.classList.add('t');

    const fadeInLinks = function() {
    	$('.link').addClass('f');
        // $('.link').each(function(fadeInDiv) {
        //     $(this).delay(fadeInDiv * 1500).addClass('f');
        //     // console.log("going");
        // }).delay(2000);
    }


    $(".link").on('click', function(event) {
    	console.log($(this).data().link);

        // if (this.hash !== "") {
        //     // Prevent default anchor click behavior
        //     event.preventDefault();

        //     // Store hash
        //     var hash = this.hash;

        //     $('html, body').animate({
        //         scrollTop: $(hash).offset().top
        //     }, 800, function() {

        //         window.location.hash = hash;
        //     });
        // }

    });

    // setTimeout(fadeInLinks,4000);

})