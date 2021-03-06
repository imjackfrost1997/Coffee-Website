window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const nav = document.querySelector('.nav');
const menus = document.querySelector('.menus');
menus.addEventListener('click', () => {
    nav.classList.toggle('active');
    menus.classList.toggle('active');
});

function showLinks() {
    nav.classList.toggle('active');
    menus.classList.toggle('active');
}