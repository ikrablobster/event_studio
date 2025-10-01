const headerBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuBtn = document.querySelector('.menu__btn');
const body = document.body;

headerBtn.addEventListener('click', () => {
  menuList.classList.toggle('active')
  menuBtn.classList.toggle('active')
  body.classList.toggle('no-scroll')
});