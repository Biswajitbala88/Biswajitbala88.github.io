$(document).ready(function () {
    // Smooth scrolling for details links
    $('a.nav-link, .btn').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70 // Adjust for navbar height
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Navbar active state on scroll
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('section').each(function (i) {
            if ($(this).position().top - 100 <= scrollDistance) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });

        // Scroll top button
        if ($(this).scrollTop() > 300) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
