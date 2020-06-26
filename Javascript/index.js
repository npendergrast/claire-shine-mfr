var megaLogoWrapper = document.querySelector('.mega-logo-wrapper');
var megaLogo = document.querySelector('.mega-logo');
var scrollWidth;
var timer;
var html = document.querySelector('html');
var body = document.querySelector('body');
var callToAction = document.querySelector('.call-to-action');
var mobileCallToAction = document.querySelector(
  '.mobile-call-to-action-wrapper'
);
var contentAnimation = document.getElementsByClassName('content-animation');
var ind = 0;

// Remove scroll bar, lock url bar, add event listeners/timer to end logo landing page
function addScrollWidth() {
  html.style.visibility = 'visible';
  timer = setTimeout(launchLandingPage, 3500);
  scrollWidth = window.innerWidth - document.documentElement.clientWidth;
  body.style.marginRight = `${scrollWidth}px`; // scrollWidth + 'px';
  html.style.overflow = 'hidden';
  html.classList.add('url-bar-lock');
  body.classList.add('url-bar-lock');
  html.addEventListener('click', launchLandingPage);
  html.addEventListener('keypress', launchLandingPage);
  timer;
}

// Remove event listeners/timeout and start
function launchLandingPage() {
  html.removeEventListener('click', launchLandingPage);
  html.removeEventListener('keypress', launchLandingPage);
  clearTimeout(timer);
  landingPageFade(scrollWidth);
}

// Fade-out landingpage and check if cookie exists for objects appear
function landingPageFade(width) {
  body.style.marginRight = '0px';
  html.style.overflow = 'visible';
  megaLogoWrapper.style.paddingLeft = `${width}px`; //width + 'px';
  megaLogoWrapper.classList.add('mega-logo-wrapper-fade');
  html.classList.remove('url-bar-lock');
  body.classList.remove('url-bar-lock');
  setTimeout(function () {
    megaLogoWrapper.style.display = 'none';
  }, 1600);
  if (checkCookie('VisitedIndexPage')) {
    noObjectAnimation();
  } else {
    createCookie('VisitedIndexPage', 300);
    setTimeout(function () {
      objectsInViewport();
      animateCalltoAction();
    }, 600);
  }
}

// html objects appear when in viewport
function objectsInViewport() {
  if (!window.IntersectionObserver) {
    console.log('test1');
    for (i = 0; i < contentAnimation.length; i++) {
      contentAnimation[i].style.animation = 'none';
      contentAnimation[i].classList.add('original-position');
    }
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        for (i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting === true) {
            entries[i].target.classList.add('object-slide-appear');
            observer.unobserve(entries[i].target);
          }
        }
      },
      { threshold: [0.1] }
    );
    setTimeout(initObserverObject, 800);
  }

  function initObserverObject() {
    for (i = 0; i < contentAnimation.length; i++) {
      observer.observe(contentAnimation[i]);
    }
  }
}

// Check if cookie exists for Visited Index Page and run routine for true or false
function objectAnimation() {
  if (!checkCookie('VisitedIndexPage')) {
    createCookie('VisitedIndexPage', 300);
    objectsInViewport();
    animateCalltoAction();
  } else {
    noObjectAnimation();
  }
}

// Check if cookie exists and return true or false
function checkCookie(cname) {
  var dc = document.cookie;
  if (dc.search(cname) == -1) {
    return false;
  } else {
    return true;
  }
}

// Create a new cookie
function createCookie(cookieName, cookieTime) {
  document.cookie = `${cookieName}=true; max-age=${cookieTime}`; //cookieName + '=true; max-age=' + cookieTime;
}

// If no slide-in animation is required
function noObjectAnimation() {
  for (i = 0; i < contentAnimation.length; i++) {
    contentAnimation[i].style.animation = 'none';
    contentAnimation[i].classList.add('original-position');
  }
}

// Add call to action animation
function animateCalltoAction() {
  if (ind < 2) {
    callToAction.classList.add('call-to-action-animation');
    mobileCallToAction.classList.add('call-to-action-animation');
    ind++;
    setTimeout(function () {
      callToAction.classList.remove('call-to-action-animation');
      mobileCallToAction.classList.remove('call-to-action-animation');
      setTimeout(animateCalltoAction, 200);
    }, 8000);
  }
}

// START OF ROUTINE !
if (checkCookie('LandingOverlaySeen')) {
  createCookie('LandingOverlaySeen', 300);
}
if (Math.floor(Math.random() * 2) + 1 == 1) {
  megaLogoWrapper.style.backgroundColor = 'white';
  megaLogo.style.backgroundImage = "url('./Images/logo2.png')";
}
if (!checkCookie('LandingOverlaySeen')) {
  createCookie('LandingOverlaySeen', 300);
  megaLogoWrapper.style.display = 'flex';
  addScrollWidth();
} else {
  html.style.visibility = 'visible';
  objectAnimation();
}
