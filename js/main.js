$(document).ready(function() {
    $('#hamBurgerMenu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navBar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function() {
        $('#hamBurgerMenu').removeClass('fa-times');
        $('.navBar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 30) {
            $('.header').addClass('header-active');
        } else {
            $('.header').removeClass('header-active');
        }

        $('section').each(function() {
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            var top = $(window).scrollTop();
            if (top >= offset && top < offset + height) {
                console.log("Inside section: " + id);
                $('.navBar ul li a').removeClass('active');
                $('.navBar').find('[data-scroll="' + id + '"]').addClass('active');
            } 
        });
    });
})