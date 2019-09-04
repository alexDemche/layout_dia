'use strict';

const burger = document.getElementById('burger');
const burgerBar = document.querySelector('.js-burger__bar');
// const body = document.getElementById('body');

const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  burgerBar.classList.toggle('js-open');
  menu.classList.toggle('js-show-menu');
  // body.classList.toggle('js-no-scroll');
});
