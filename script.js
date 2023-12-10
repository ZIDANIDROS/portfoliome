let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector('.navbar');

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = `-10${navbar.offsetHeight}px`;
  }
  prevScrollpos = currentScrollPos;
};
