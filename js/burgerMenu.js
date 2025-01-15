document.addEventListener('DOMContentLoaded', function () {
  const menuOpenButton = document.querySelector('.menu__button')
  const menu = document.querySelector('.menu')
  const menuCloseButton = document.querySelector('.menu__close')
  const heroContainer = document.querySelector('.hero__container')
  const menuItems = document.querySelectorAll('.menu__link')
  const menuIcons = document.querySelectorAll('.menu__icons a')

  function openMenu() {
    menu.classList.add('active')

    const background = document.createElement('div')
    background.classList.add('hero__background')
    heroContainer.appendChild(background)

    menuItems.forEach((item) => {
      item.setAttribute('tabindex', '0')
    })
    menuIcons.forEach((icon) => {
      icon.setAttribute('tabindex', '0')
    })
    menuCloseButton.setAttribute('tabindex', '0')
  }

  function closeMenu() {
    menu.classList.remove('active')

    const background = document.querySelector('.hero__background')
    if (background) {
      heroContainer.removeChild(background)
    }

    menuItems.forEach((item) => {
      item.setAttribute('tabindex', '-1')
    })
    menuIcons.forEach((icon) => {
      icon.setAttribute('tabindex', '-1')
    })
    menuCloseButton.setAttribute('tabindex', '-1')
  }

  menuOpenButton.addEventListener('click', openMenu)
  menuCloseButton.addEventListener('click', closeMenu)

  menuItems.forEach((item) => {
    item.addEventListener('click', closeMenu)
  })

  menuItems.forEach((item) => {
    item.setAttribute('tabindex', '-1')
  })
  menuIcons.forEach((icon) => {
    icon.setAttribute('tabindex', '-1')
  })
  menuCloseButton.setAttribute('tabindex', '-1')
})
