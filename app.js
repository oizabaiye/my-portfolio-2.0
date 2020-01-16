$(document).ready(function() {
    //keep about me text hidden
    $('.innerBox').hide()

    // on click of heading, show about me text
    $('h3').on('click', function(){
        $(this).next().toggle(600)
    })
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


