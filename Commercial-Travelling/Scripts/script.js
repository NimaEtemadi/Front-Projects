const navBtn = document.querySelector('.nav__btn')
const navMenu = document.querySelector('.nav-menu')

let navOpen = false;

navBtn.addEventListener('click', function () {
    if (navOpen) {
        navBtn.classList.remove('nav__btn--open')
        navOpen = false
        navMenu.style.left = '-25rem'
    } else {
        navBtn.classList.add('nav__btn--open')
        navOpen = true
        navMenu.style.left = '0'
    }
})

const btn1 = document.querySelector('.footer-scrolltop')

btn1.addEventListener('click', function () {
    window.scrollTo({top: 0, behavior: 'smooth'})
})

