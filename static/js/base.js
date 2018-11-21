const burger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger-menu')

if (burger) {
  burger.addEventListener('click', function () {
    this.classList.toggle('open')
    burgerMenu.classList.toggle('open')
  })
}