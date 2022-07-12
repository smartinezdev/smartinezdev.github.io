$('a.ev-js1[href*="#"]').on('click', function (e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 80);
    e.preventDefault();
});

$('.ev-js2').click(function () {
    $('.navbar-collapse').collapse('hide');
});

$('.logo').on('click', () => {
    $('html,body').animate({
        scrollTop: 0
    }, 80);
});