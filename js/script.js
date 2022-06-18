function showNav() {
     var buttonAtive = document.querySelector(".main-navigation-header-navbar-responsive")

     if (buttonAtive.style.display == 'none' || buttonAtive.style.display == '') {
          buttonAtive.style.display = 'block'
     } else {
          buttonAtive.style.display = 'none'
     }
}