// Navbar-Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  if (!header) return; // Mencegah error jika header belum dimuat
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

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
  });

// Angka karakter
document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("message");
  const counter = document.getElementById("counter");
  inputField.addEventListener("keyup", function () {
      counter.innerText = this.value.length;
  });
});

// Alert XXXXXXX
function myXXXXXXX() {
  // window.alert('XXXXXXX')
  const name = prompt("Absen dulu yuk, siapa nama lu?");
  alert(name ? `Selamat datang, ${name}!` : "Wahh kaco ngga masukin nama.")
}
