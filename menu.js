let btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
  let nav = document.getElementById('nav')
  nav.classList.toggle('active')
  let btn = document.getElementById('btn-mobile')
  btn.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
