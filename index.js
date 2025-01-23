const modal = document.getElementById('modal');
const nav   = document.getElementById('nav');
const menu  = document.getElementById('menu');

const openModal = () => {
  modal.showModal();
};

const closeModal = () => {
  modal.close();
};

const handleClickOutside = (e) => {

  if (!nav.contains(e.target) && e.target !== menu) {
    nav.classList.remove('open');
    window.removeEventListener('click', handleClickOutside);
  }
};

const opennav = () => {
  nav.classList.add('open');
  console.log('OPEN GESETZT🐒')
  setTimeout(() => {
    window.addEventListener('click', handleClickOutside)
  },500 );
};

const closenav = () => {
  nav.classList.remove('open');
  console.log('OPEN ENTFERNT')
  window.removeEventListener('click', handleClickOutside);
  
};

const togglenav = (e) => {
 /*  e.stopPropagation(); */
  if (nav.classList.contains('open')) {
    closenav();
  } else {
    opennav();
  }
};

if (menu) { 
  menu.addEventListener('click', togglenav);
}