document.addEventListener('DOMContentLoaded', function () {
  const menuOpenButton = document.querySelector('.menu__button')
  const menu = document.querySelector('.menu')
  const menuCloseButton = document.querySelector('.menu__close')
  const heroContainer = document.querySelector('.hero__container')

  function openMenu() {
    menu.classList.add('active')

    const background = document.createElement('div')
    background.classList.add('hero__background')
    heroContainer.appendChild(background)
  }

  function closeMenu() {
    menu.classList.remove('active')

    const background = document.querySelector('.hero__background')
    if (background) {
      heroContainer.removeChild(background)
    }
  }

  menuOpenButton.addEventListener('click', openMenu)
  menuCloseButton.addEventListener('click', closeMenu)

  const menuItems = document.querySelectorAll('.menu__link')
  menuItems.forEach((item) => {
    item.addEventListener('click', closeMenu)
  })
})
