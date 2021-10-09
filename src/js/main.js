$(document).ready(function() {
    $('.header__nav-link').click(function() {
        $('.header__nav-bullet').removeClass('active');
        $(this).find('span').addClass('active');
    });

    $('a[href*="#"]').on('click', function() {
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    $('.header__burger').click(function() {
        $('.header__burger, .header__menu, .header__burger-line').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.intro__slider').slick({
        arrows: false,
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        infinity: true,
    });

    $('.news__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});
 
function initMap() {
    const coordinates = {
        lat: 40.67780138200784,
        lng: -73.91530550103808
    };

    const map = new google.maps.Map(document.querySelector('#map'), {
        center: coordinates,
        zoom: 12,
    });

    const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: {
            url: '../src/img/contact/marker.png',
        }
    });
}