$(document).ready(function() {
    //keep about me text hidden
    $('.innerBox').hide()

    // on click of heading, show about me text
    $('h3').on('click', function(){
        $(this).next().toggle(600)
    })
})
