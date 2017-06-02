$(function() {
    var width = $(window).width();
    console.log(width);

    $('.searchbar').click(function(e) {
        e.preventDefault()
        $('.searchbar_input').toggle("slide");
    });

    $(window).scroll(function() {
    	var navbar = $('.sticky-top');
        if ($(window).scrollTop() > 0) {
            navbar
                .addClass('shadowed');
        } else {
        	navbar
                .removeClass('shadowed');
        }
    });

    if (width < 766) {

    }


});
