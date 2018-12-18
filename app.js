$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        loop:true,
        items:1,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    var $frontSlider = $( '.slider' );
    $frontSlider.owlCarousel ({
        items:1,

    });

/*Mobile Menu*/

    var $canvasBtn = $('#canvas-trigger');
    var $canvasMenu = $('#canvas-menu');


    var $win = $( window );

    var resetMenu = function() {
        $canvasMenu.removeClass('open');
        $canvasBtn.removeClass('active');
    }

    resetMenu();
    $win.on( 'resize', function() {     
        if( window.innerWidth > 992 ) {
            resetMenu();
        }
    })


     $canvasBtn.on ('click', function() {
        
        if ($canvasMenu.hasClass('open') ) {
            $canvasMenu.removeClass('open');
            $canvasBtn.removeClass('active');
            return;
        }

        $canvasMenu.addClass('open');
        $canvasBtn.addClass('active');

     });

});