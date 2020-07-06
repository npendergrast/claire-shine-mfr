var navBar = document.querySelector('.main-header');
var scrollBtn = document.querySelector('.scroll-up-wrapper');
var html = document.querySelector('html');
var body = document.querySelector('body');
var header = document.querySelector('header');
var main = document.querySelector('main');
var logo = document.querySelector('.main-logo');
var logo2 = document.querySelector('.main-logo-2');
var filterOverlay = document.querySelector('.filter-overlay');
var mainMenu = document.querySelector('.main-menu');
var mainMenuName = document.querySelectorAll('.main-menu-name');
var vlMenu = document.querySelectorAll('.vl-menu');
var menuIcon = document.querySelector('.menu-icon');
var menuIcon1 = 'fa-bars';
var menuIcon2 = 'fa-times';
var filter = 'filter-overlay-on';
var menuIsHidden = true;
var pagePosition = window.pageYOffset;
var contentAnimation = document.getElementsByClassName('content-animation');
var brandText = document.querySelector('.brand-text');

scrollBtn.addEventListener('click', scrollToTop);
menuIcon.addEventListener('click', menuSlide);
filterOverlay.addEventListener('click', menuSlide);

window.onload = function () {
  navScroll();
  scrollBtnVisible();
};

window.onscroll = function () {
  navScroll();
  scrollBtnVisible();
};

function navScroll() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    logo.src = './Images/logo2.png';
    logo.classList.add('main-logo-shrink');
    logo2.classList.add('main-logo-2-shrink');
    navBar.classList.add('main-header-shrink');
    mainMenu.classList.add('main-menu-shrink');
    brandText.classList.add('brand-text-appear');
    for (i = 0; i < mainMenuName.length; i++) {
      mainMenuName[i].classList.add('main-menu-name-shrink');
    }
    for (i = 0; i < vlMenu.length; i++) {
      vlMenu[i].classList.add('vl-menu-shrink');
    }
  } else {
    logo.src = './Images/logo.png';
    logo.classList.remove('main-logo-shrink');
    logo2.classList.remove('main-logo-2-shrink');
    navBar.classList.remove('main-header-shrink');
    mainMenu.classList.remove('main-menu-shrink');
    brandText.classList.remove('brand-text-appear');
    for (i = 0; i < mainMenuName.length; i++) {
      mainMenuName[i].classList.remove('main-menu-name-shrink');
    }
    for (i = 0; i < vlMenu.length; i++) {
      vlMenu[i].classList.remove('vl-menu-shrink');
    }
  }
}

function scrollBtnVisible() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    scrollBtn.style.display = 'flex';
    scrollBtn.classList.add('scroll-btn-fade');
  } else {
    scrollBtn.classList.remove('scroll-btn-fade');
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function menuSlide() {
  if (menuIsHidden) {
    mainMenu.style.right = '0px';
    menuIsHidden = false;
    iconChange();
  } else {
    mainMenu.style.right = '-100%';
    menuIsHidden = true;
    iconChange();
  }
}

function iconChange() {
  if (menuIsHidden) {
    menuIcon.classList.add(menuIcon1);
    menuIcon.classList.remove(menuIcon2);
    filterOverlay.classList.remove(filter);
    html.classList.remove('html-menu-down');
  } else {
    menuIcon.classList.remove(menuIcon1);
    menuIcon.classList.add(menuIcon2);
    filterOverlay.classList.add(filter);
    html.classList.add('html-menu-down');
  }
}
