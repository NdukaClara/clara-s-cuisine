const navIconEL = document.querySelector('.nav_icon');
const navCloseEl = document.querySelector('.nav_close');
const navListEl = document.querySelector('.nav_list');
const navBgOverlayEl = document.querySelector('.nav_bgOverLay');

const navOpen = () => {
   navListEl.classList.add('show');
   navBgOverlayEl.classList.add('active');
   document.body.style='visibility: visible; height: 100vh;  width: 100vw; overflow: hidden;';
}

const navClose = () => {
    navListEl.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEL.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);

// aos
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})