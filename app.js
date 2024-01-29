$(document).ready(function() {
     // Initially hide all innerBox elements except the first
     $('.innerBox').hide();
     $('#inner1').show();
     $('#makeActive').addClass('isActive');
     $('#makeActive').find('.fa-minus').removeClass('hide');
     $('#makeActive').find('.fa-plus').addClass('hide');

    // On click of heading, toggle its innerBox and update classes
    $('h3').on('click', function() {
        $(this).next().slideToggle(600);
        $(this).toggleClass('isActive');

        // Toggle icons
        let plusSign = $(this).find('.fa-plus');
        let minusSign = $(this).find('.fa-minus');
        plusSign.toggleClass('hide');
        minusSign.toggleClass('hide');
    });

})


// mobile menu functionality
const openMenu = () => {
    //onclick, maximize the sidemenu
    let sideMenu = document.getElementById('sideMenu');
    sideMenu.style.width = '100vw';

    //when user clicks any of the items in the menu, close it
    document.querySelector('ul.wrapper').addEventListener('click', () => {
        closeMenu()
    })

}
  
const closeMenu = () => {
    document.getElementById('sideMenu').style.width = '0';
}


