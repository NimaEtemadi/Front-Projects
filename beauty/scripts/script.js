const $ = document

const hamburgerMenuIcon = $.querySelector('.hamburger-icon__wrapper')
const body = $.querySelector('body')
const darkLayerElem = $.querySelector('.dark-layer')

function openHamburgerMenu(){
    const MenuElem = $.querySelector('.nav-list')

    MenuElem.classList.toggle('nav-list--open')
    hamburgerMenuIcon.classList.toggle('hamburger-icon__wrapper--open')
    body.classList.toggle('overflow')
}

hamburgerMenuIcon.addEventListener('click',openHamburgerMenu)