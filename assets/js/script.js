let mainSection = $('.main');
let rightSection = $('.r');
let leftSection = $('.l');

$(document).ready(function() {
    let state = 0;
  

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
        // console.log($(this).data());

        switch ($(this).data().link) {
            case "about":
                state = 1;
                console.log(state);
                showAbout();
                break;
            case "projects":
                state = 2;
                console.log(state);
                showProjects();
                break;
            case "resume":
                state = 3;
                console.log(state);
                showResume();
                break;
            default:

                state = 0;
                break;
        }

        if (state !== 0) {
            $('.back').addClass('o');
        }
    });

});

let clearAll = () => {
    mainSection.removeClass('a p re');
    rightSection.removeClass('t');
};

let showAbout = () => {
	clearAll();
	mainSection.addClass('a');
}

let showProjects = () => {
	clearAll();
	mainSection.addClass('p');

}

let showResume = () => {
	clearAll();
	mainSection.addClass('re');

}