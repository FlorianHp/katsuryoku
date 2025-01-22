const modal      = document.getElementById('modal');
const menu       = document.getElementById('breadcrumbs');
const burgerMenu = document.getElementById('menu');

const openModal = () => {
  modal.showModal();
};

const closeModal = () => {
  modal.close();
};

const handleClickOutside = (e) => {

  if (!menu.contains(e.target) && e.target !== burgerMenu) {
    menu.classList.remove('open');
    window.removeEventListener('click', handleClickOutside);
  }
};

const openMenu = () => {
  menu.classList.add('open');
  console.log('OPEN GESETZT🐒')
  setTimeout(() => {
    window.addEventListener('click', handleClickOutside)
  },500 );
};

const closeMenu = () => {
  menu.classList.remove('open');
  console.log('OPEN ENTFERNT')
  window.removeEventListener('click', handleClickOutside);
  
};

const toggleMenu = (e) => {
 /*  e.stopPropagation(); */
  if (menu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
};

if (burgerMenu) { 
  burgerMenu.addEventListener('click', toggleMenu);
}