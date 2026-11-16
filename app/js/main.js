const menuBtn = document.querySelector('.menu__btn');
const menuList = document.getElementById('menu-list');
const body = document.body;

function setMenu(open) {
  menuList.classList.toggle('active', open);
  menuBtn.classList.toggle('active', open);
  body.classList.toggle('no-scroll', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Закрити меню' : 'Відкрити меню');
}

menuBtn.addEventListener('click', () => {
  setMenu(!menuList.classList.contains('active'));
});

menuList.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuList.classList.contains('active')) {
    setMenu(false);
    menuBtn.focus();
  }
});