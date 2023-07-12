var $ = document;

const opener = $.querySelector('.menu-opener');
const menu = $.querySelector('.menu');
const closer = $.querySelector('.menu-closer');
const overlay = $.querySelector('.overlay2')

const menuToggler = () => {
    opener.classList.toggle('active');
    menu.classList.toggle('show');
    closer.classList.toggle('close');
    overlay.classList.toggle('active')
}

opener.onclick = () => {
    menuToggler()
}
closer.onclick = () => {
    menuToggler()
}

overlay.onclick = () => {
    menuToggler()
}

