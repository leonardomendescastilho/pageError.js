const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', (event) => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLink = document.querySelectorAll('.nav__link');

function handleClickLink() {
  navMenu.classList.remove('show-menu');
}

navLink.forEach((link) => {
  link.addEventListener('click', handleClickLink);
});

const sr = ScrollReveal({
  distance: '90px',
  duration: 3000,
});

sr.reveal(`.home__data`, {
  origin: 'top',
  delay: 400,
});
sr.reveal(`.home__img`, {
  origin: 'bottom',
  delay: 600,
});
sr.reveal(`.home__footer`, {
  origin: 'bottom',
  delay: 800,
});


