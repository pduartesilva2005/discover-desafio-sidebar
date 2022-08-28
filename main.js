const nav = document.getElementById('nav');
const toggle = document.getElementById('toggle');
const items = document.querySelectorAll('.item');
const main = document.getElementById('main');
const search = document.getElementById('search');

search.addEventListener('click', showMenu);
toggle.addEventListener('click', showMenu);

function showMenu() {
  nav.classList.toggle('show');
  items.forEach(item => item.classList.toggle('none'));
  main.classList.toggle('left');
}
