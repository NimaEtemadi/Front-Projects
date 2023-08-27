const navBtn = document.querySelector('.nav-toggle__btn')
const mobileMenu = document.querySelector('.mobile-menu__wrapper')

let navOpen = false

navBtn.addEventListener('click', function() {
    this.classList.toggle('nav-toggle__btn--open')

    if (navOpen) {
        navOpen = false,
        mobileMenu.style.left = '-25rem'
    } else {
        navOpen = true,
        mobileMenu.style.left = '0'
    }

})

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {

        navBtn.classList.remove('nav-toggle__Btn--open')
        navOpen = false,
        mobileMenu.style.left = '-25rem'

    }
})


const personnelContent = document.querySelectorAll('.personnel-content')

personnelContent.forEach( content => {
    content.addEventListener('click', function () {
        document.querySelector('.personnel-content--active').classList.remove('personnel-content--active')
        document.querySelector('.personnel__title--active').classList.remove('personnel__title--active')
        document.querySelector('.personnel__infomation--show').classList.remove('personnel__infomation--show')
        content.classList.toggle('personnel-content--active')
        content.classList.toggle('personnel__title--active')
        let contentId = content.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('personnel__infomation--show')
    })
})

const footerPhoto = document.querySelectorAll('.footer__photo')
const footer = document.querySelector('.footer')

footerPhoto.forEach(function (photo) {
    photo.addEventListener('click', function () {
        footer.innerHTML = ''
        footer.insertAdjacentHTML('afterbegin', '<div class="container"> <div class="row"> <div class="col-4"> <div class="contact-content"> <svg class="cclogo1" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M54 3.03445e-06H6C2.691 3.03445e-06 0 2.682 0 5.976V42.024C0 45.318 2.691 48 6 48H15V60L34.053 48H54C57.309 48 60 45.318 60 42.024V5.976C59.9952 4.38838 59.3608 2.86749 58.2359 1.74712C57.111 0.626742 55.5876 -0.00159334 54 3.03445e-06ZM36 33H15V27H36V33ZM45 21H15V15H45V21Z" fill="#666666" /> </svg> <div class="contact-content__titles"> <p class="contact__title">Have any questions?</p> <h6 class="contact__caption">noreply@website.com</h6> </div> </div> </div> <div class="col-4"> <div class="contact-content"> <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M53.6839 28.4166H59.9998C59.9998 12.2173 47.7691 0 31.5469 0V6.3155C44.3744 6.3155 53.6839 15.6088 53.6839 28.4166Z" fill="#666666" /> <path d="M31.5801 18.9497C38.2212 18.9497 41.0539 21.7822 41.0539 28.4229H47.3697C47.3697 18.2392 41.7644 12.6342 31.5801 12.6342V18.9497ZM42.3865 36.1373C41.7797 35.5858 40.9824 35.2917 40.1628 35.317C39.3431 35.3424 38.5655 35.6852 37.9939 36.2731L30.437 44.0443C28.618 43.697 24.9611 42.557 21.1969 38.8025C17.4326 35.0353 16.2926 31.3691 15.9547 29.5629L23.7201 22.0032C24.3087 21.4321 24.6521 20.6543 24.6774 19.8345C24.7028 19.0147 24.4081 18.2172 23.8558 17.6108L12.1873 4.78086C11.6348 4.17254 10.8669 3.80355 10.0467 3.75226C9.22653 3.70096 8.41865 3.9714 7.79465 4.50614L0.941952 10.3827C0.395982 10.9306 0.0701107 11.6599 0.0261538 12.4321C-0.021215 13.2215 -0.924381 31.9217 13.5768 46.4284C26.2274 59.0752 42.0739 60.0005 46.4382 60.0005C47.0761 60.0005 47.4676 59.9815 47.5718 59.9752C48.344 59.932 49.0729 59.6047 49.6182 59.0563L55.4919 52.2008C56.0271 51.5772 56.2981 50.7696 56.2474 49.9495C56.1967 49.1294 55.8282 48.3613 55.2203 47.8084L42.3865 36.1373Z" fill="#666666" />/svg> <div class="contact-content__titles"> <p class="contact__title">Call us</p> <h6 class="contact__caption">+1 234 456 789</h6> </div> </div> </div> <div class="col-4"> <div class="contact-content"> <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.57143 6.42857C8.57143 4.72361 9.24872 3.08848 10.4543 1.88289C11.6599 0.677294 13.295 0 15 0H45C46.705 0 48.3401 0.677294 49.5457 1.88289C50.7513 3.08848 51.4286 4.72361 51.4286 6.42857V17.1429H47.1429V6.42857C47.1429 5.86025 46.9171 5.31521 46.5152 4.91334C46.1134 4.51148 45.5683 4.28571 45 4.28571H15C14.4317 4.28571 13.8866 4.51148 13.4848 4.91334C13.0829 5.31521 12.8571 5.86025 12.8571 6.42857V21.4286H36.4286C35.0348 23.2817 34.2826 25.5384 34.2857 27.8571V53.5714C34.2857 55.9843 35.0829 58.2086 36.4286 60H6.42857C4.72361 60 3.08848 59.3227 1.88289 58.1171C0.677294 56.9115 0 55.2764 0 53.5714V30C0 27.7267 0.903058 25.5465 2.51051 23.9391C4.11797 22.3316 6.29814 21.4286 8.57143 21.4286V6.42857ZM13.9286 32.6786C13.9286 31.9682 13.6464 31.2869 13.144 30.7845C12.6417 30.2822 11.9604 30 11.25 30C10.5396 30 9.85829 30.2822 9.35596 30.7845C8.85363 31.2869 8.57143 31.9682 8.57143 32.6786C8.57143 33.389 8.85363 34.0703 9.35596 34.5726C9.85829 35.0749 10.5396 35.3571 11.25 35.3571C11.9604 35.3571 12.6417 35.0749 13.144 34.5726C13.6464 34.0703 13.9286 33.389 13.9286 32.6786ZM13.9286 42.3214C13.9286 41.611 13.6464 40.9297 13.144 40.4274C12.6417 39.9251 11.9604 39.6429 11.25 39.6429C10.5396 39.6429 9.85829 39.9251 9.35596 40.4274C8.85363 40.9297 8.57143 41.611 8.57143 42.3214C8.57143 43.0318 8.85363 43.7131 9.35596 44.2155C9.85829 44.7178 10.5396 45 11.25 45C11.9604 45 12.6417 44.7178 13.144 44.2155C13.6464 43.7131 13.9286 43.0318 13.9286 42.3214ZM20.8929 40.1786C20.1825 40.1786 19.5012 40.4608 18.9988 40.9631C18.4965 41.4654 18.2143 42.1467 18.2143 42.8571C18.2143 43.5675 18.4965 44.2489 18.9988 44.7512C19.5012 45.2535 20.1825 45.5357 20.8929 45.5357C21.6033 45.5357 22.2846 45.2535 22.7869 44.7512C23.2892 44.2489 23.5714 43.5675 23.5714 42.8571C23.5714 42.1467 23.2892 41.4654 22.7869 40.9631C22.2846 40.4608 21.6033 40.1786 20.8929 40.1786ZM23.5714 32.6786C23.5714 31.9682 23.2892 31.2869 22.7869 30.7845C22.2846 30.2822 21.6033 30 20.8929 30C20.1825 30 19.5012 30.2822 18.9988 30.7845C18.4965 31.2869 18.2143 31.9682 18.2143 32.6786C18.2143 33.389 18.4965 34.0703 18.9988 34.5726C19.5012 35.0749 20.1825 35.3571 20.8929 35.3571C21.6033 35.3571 22.2846 35.0749 22.7869 34.5726C23.2892 34.0703 23.5714 33.389 23.5714 32.6786ZM45 21.4286C43.295 21.4286 41.6599 22.1059 40.4543 23.3115C39.2487 24.517 38.5714 26.1522 38.5714 27.8571V53.5714C38.5714 55.2764 39.2487 56.9115 40.4543 58.1171C41.6599 59.3227 43.295 60 45 60H53.5714C55.2764 60 56.9115 59.3227 58.1171 58.1171C59.3227 56.9115 60 55.2764 60 53.5714V27.8571C60 26.1522 59.3227 24.517 58.1171 23.3115C56.9115 22.1059 55.2764 21.4286 53.5714 21.4286H45Z"fill="#666666" /> </svg> <div class="contact-content__titles"><p class="contact__title">Fax</p><h6 class="contact__caption">+1 234 456 789</h6></div> </div> </div><div class="row"><div class="col-4"> <div class="contact-connection"><h3 class="contact__connection-title">Write a message</h3> <p class="contact__connection-caption">If you got any questions, please do not hesitate to send us a message. We reply within 24 hours!</p> <p class="contact__socials-title">Our profiles in social media:</p><img src="Images/svgs/socials+googleplus.svg" alt="Google Plus" class="google-plus"></div></div><div class="col-8"><div class="contact-connection2"><form action="" class="contact-form"><div class="contact-inputs"><div class="vertical-input"><label class="contact-label" for="name">Name:</label><input type="text" class="contact-input" id="name" maxlength="10" required></div><div class="vertical-input"><label class="contact-label" for="email">E-mail address:</label><input type="text" class="contact-input" id="email" maxlength="20" required></div><div class="vertical-input"><label class="contact-label" for="subject">Subject:</label><input type="text" class="contact-input" id="subject" maxlength="30" required></div></div><div class="vertical-input vita"><label class="contact-label" for="message">Message:</label><textarea class="contact-textarea" id="message" cols="30" rows="20"></textarea></div><button class="contact-button" type="submit">Send message</button></form></div></div></div></div>')
    })
})