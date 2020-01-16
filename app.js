$(document).ready(function() {
    //keep about me text hidden
    $('.innerBox').hide()

    // keeps 'JavaScript is my jam' active on page load
    $('#inner1').show()
    $('#makeActive').addClass('isActive')

    // on click of heading, show about me text
    $('h3').on('click', function(){
        $(this).next().toggle(600)

        // check if plus or minus is in the DOM
        let plusSign = $(this).find('.fa-plus')
        let minusSign = $(this).find('.fa-minus')
        console.log(plusSign)

        //if there's a plus sign remove it and show minus, and vice versa
        plusSign.toggleClass('hide')
        minusSign.toggleClass('hide')
    })

    $('#makeActive').on('click', function(){
        $(this).toggleClass('isActive')
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


