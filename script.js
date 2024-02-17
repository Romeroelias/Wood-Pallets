// Changing navbar color on scroll
function changeBg() {
    const scrollValue = window.scrollY;
    const navBar = document.getElementById('navbar');

    if(scrollValue < 150) {
        navBar.classList.remove('bgColor');
    } else {
        navBar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);


// Mobile navbar slider 
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

document.querySelectorAll(".mobile-nav-a").forEach(n => n.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
    menuBtn.classList.remove('is-active');
}))


// Landing page button

function scrollWin() {
    window.scrollTo(0, 500);
}

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navMenu.classList.toggle('active');
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     navMenu.classList.remove('active');
// }))
