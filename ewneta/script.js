const hid = document.querySelector('.hid');
const navLinks = document.querySelector('.nav-links');

hid.addEventListener('click', () => {
  hid.classList.toggle('active');
  navLinks.classList.toggle('active');
});