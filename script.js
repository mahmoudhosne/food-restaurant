'use strict';

// sticky menu icon
const stickyMenuIcone = document.querySelector('.sticky-menu-icon');
const sticky = document.querySelector('.sticky');

stickyMenuIcone.addEventListener('click', function () {
  stickyMenuIcone.classList.toggle('move-sticky-icon');
  sticky.classList.toggle('show-sticky-menu');
});

// ====================

// navbar
const navbar = document.querySelector('.navbar');
const content = document.querySelector('.content');
const mainTitle = document.querySelector('.main-title');
const closeWindow = document.querySelector('.close-window');
const arrow = document.querySelector('.arrow-icon');

// const scrollZero = function () {
//   window.scroll = function () {
//     let top = window.screenY;
//     top = 0;
//   };
// };

window.onscroll = function () {
  let top = window.scrollY;

  if (top >= 10) {
    // change background nav bar
    navbar.classList.add('changeColor');
    arrow.classList.add('rotate');
    // rotate arrow icone
  } else if (top < 600) {
    navbar.classList.remove('changeColor');
    arrow.classList.remove('rotate');
  }
};

// pop up window
const popup = document.querySelector('.popup');
const overLay = document.querySelector('.overlay');
const showPopWindow = document.querySelector('.show-popup');

const showWindow = function () {
  popup.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const hideWindow = function () {
  popup.classList.add('hidden');
  overLay.classList.add('hidden');
};

closeWindow.addEventListener('click', hideWindow);

overLay.addEventListener('click', hideWindow);

showPopWindow.addEventListener('click', showWindow);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
    hideWindow();
  }
});
// scroll zero with arrow
//   window.onscroll = function () {
//     let top = window.scrollY;
// }

arrow.addEventListener('click', () => window.scrollTo(200, 0));
// let minutes = new Date().getMinutes();
// console.log(minutes);
// let cycle = 0;
// let allBackgrounds = ['backgrounf.jpg', 'bg2.jpg'];

const header = document.querySelector('header');

const changeBg = function () {
  const imges = ['url("img/bg2.jpg")', 'url("img/backgrounf.jpg")'];
  const bg = imges[Math.floor(Math.random() * imges.length)];
  header.style.backgroundImage = bg;
};
setInterval(changeBg, 5000);

// when window is lodedd
const sr = ScrollReveal({
  distance: '100px',
  duration: 2700,
  reset: true,
});
sr.reveal('section', { delay: 200, origin: 'bottom' });
sr.reveal('header', { delay: 350, origin: 'top' });
sr.reveal('.menu', { delay: 450, origin: 'right' });
