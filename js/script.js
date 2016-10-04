// Карусели

$('#owl-demo').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('#owl-demo2').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                loop: false
            }
        }
    })

    $('#owl-demo3').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoWidth: true
    })