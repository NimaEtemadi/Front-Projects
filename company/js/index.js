//codes for hamburger menu
function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    }
    else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {
        let offcanvas_id = everyelement.getAttribute('data-trigger');
        everyelement.addEventListener('click', function (e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);
        });
    });

    document.querySelectorAll('.btn-close').forEach(function (everybutton) {
        everybutton.addEventListener('click', function (e) {
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function (event) {
        close_offcanvas();
    });

});




//codes for navbar
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 100)
})




//codes for buttons animation
//!FIXME add animation to buttons


// const bars = document.querySelector('.fa-bars');
// const xmark = document.querySelector('.fa-xmark');
// const offcanvas = document.querySelector('.offcanvas');

// bars.addEventListener('click', () => {
//     bars.classList.toggle('spin');
//     xmark.classList.toggle('spin');
// });
// xmark.addEventListener('click', () => {
//     xmark.classList.toggle('spin');
//     bars.classList.toggle('spin');
// });

// console.log(offcanvas)

// if(body.classList.contains('offcanvas-active')){
//     // bars.classList.remove('spin');
//     // xmark.classList.remove('spin');
//     console.log('hello')
// }
