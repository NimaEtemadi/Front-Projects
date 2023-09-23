const navBtn = document.querySelector('.nav__toggle-btn')
const navMenu = document.querySelector('.nav-menu')

navBtn.addEventListener('click', function() {
    this.classList.toggle('nav__toggle-btn--open')
    navMenu.classList.toggle('nav-menu--open')
})