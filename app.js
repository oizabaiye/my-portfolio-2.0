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
    document.getElementById('sideMenu').style.width = '100vw';
  }
  
  //? on clicking the x, return to default
  const closeMenu = () => {
    document.getElementById('sideMenu').style.width = '0';
  }
