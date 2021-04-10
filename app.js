const navIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navbar');

navIcon.addEventListener('click', () => {
    navBar.classList.toggle('active')
})