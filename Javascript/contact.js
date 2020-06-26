var contentAnimation = document.getElementsByClassName('content-animation');
var contactBox = document.querySelector('.contact-box');
var mapBox = document.querySelector('.map-box');
var iframe = document.querySelector('iframe');

// html objects appear when in viewport
function objectsInViewport() {
  if (!window.IntersectionObserver) {
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
function objectAnimation(ck) {
  if (!checkCookie(ck)) {
    createCookie(ck, 300);
    objectsInViewport();
  } else {
    contactBox.style.animation = 'none';
    contactBox.classList.add('original-position');
    iframe.addEventListener('load', iFrameAppear);
    setTimeout(iFrameAppear, 3000);
  }
}

function iFrameAppear() {
  mapBox.classList.add('iframe-appear');
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
  document.cookie = `${cookieName}=true; max-age=${cookieTime}`;
}

// If no slide-in animation is required
function noObjectAnimation() {
  for (i = 0; i < contentAnimation.length; i++) {
    contentAnimation[i].style.animation = 'none';
    contentAnimation[i].classList.add('original-position');
  }
}

// START OF ROUTINE !
if (checkCookie('LandingOverlaySeen')) {
  createCookie('LandingOverlaySeen', 300);
}
objectAnimation('VisitedContactPage');
