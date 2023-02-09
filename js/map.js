const menu = document.querySelector('.burgerSVG');
const close = document.querySelector('.close');
const list = document.querySelector('.list');
menu.addEventListener('click', () => {
    list.classList.add('openMenu')
});
close.addEventListener('click', () => {
    list.classList.remove('openMenu')
});