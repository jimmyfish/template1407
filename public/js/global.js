$(function() {
    $('.searchbar').click(function(e) {
        e.preventDefault()
        $('.searchbar_input').toggle("slide");
    });
});
