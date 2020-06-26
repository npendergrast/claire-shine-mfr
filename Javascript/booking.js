var iframeWrapper = document.querySelector('.iframe-wrapper');
var iframe = document.querySelector('iframe');
var spinner = document.querySelector('.loader');

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

// START OF ROUTINE !
if (checkCookie('LandingOverlaySeen')) {
  createCookie('LandingOverlaySeen', 300);
}
iframe.addEventListener('load', iFrameAppear);
setTimeout(iFrameAppear, 2000);

function iFrameAppear() {
  spinner.classList.add('loader-hide');
  iframe.classList.add('iframe-appear');
  setTimeout(function () {
    spinner.style.display = 'none';
  }, 600);
}
