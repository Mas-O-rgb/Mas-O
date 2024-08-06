// Navbar-Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbyyhA79VJ2BrJ6VBM3dl6fTkPNJgj1Ew1vQBjQn8Gv-grJc4MgbPavQMMaYFt9yzHWg/exec'
const form = document.forms['Mas-O-Kontak-Form']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
  
form.addEventListener('submit', e => {
  e.preventDefault();
  // Ketika tombol submit diklik
  // Tampilkan tombol laoding, hilangkan tombol kirim
  btnLoading.classList.toggle('hidden');
  btnKirim.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');
      // Tampilkan Alert
      myAlert.classList.toggle('hidden');
      // Reset Form
      form.reset();
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
  })