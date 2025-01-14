function notify(message) {
  const container = document.getElementById('notify-container')
  const notification = document.createElement('div')
  notification.className = 'notify'
  notification.innerHTML = `
      <div class="notify__line"></div>
      <div class="notify__circle"></div>
      <div class="notify__content">${message}</div>
  `
  container.appendChild(notification)

  setTimeout(() => {
    notification.classList.add('show')
  }, 10)

  setTimeout(() => {
    notification.classList.remove('show')
    setTimeout(() => {
      container.removeChild(notification)
    }, 300)
  }, 5000)
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function validateForm() {
  const form = document.getElementById('contactForm')
  const name = form.querySelector('#name')
  const email = form.querySelector('#email')
  const message = form.querySelector('#message')
  let isValid = true

  const nameError = name.parentElement.nextElementSibling
  const emailError = email.parentElement.nextElementSibling
  const messageError = message.parentElement.nextElementSibling

  if (name.value.trim() === '') {
    name.parentElement.classList.add('error')
    nameError.textContent = 'Пожалуйста, введите ваше имя'
    isValid = false
  } else {
    name.parentElement.classList.remove('error')
    nameError.textContent = ''
  }

  if (email.value.trim() === '' || !validateEmail(email.value.trim())) {
    email.parentElement.classList.add('error')
    emailError.textContent = 'Пожалуйста, введите корректный email'
    isValid = false
  } else {
    email.parentElement.classList.remove('error')
    emailError.textContent = ''
  }

  if (message.value.trim() === '') {
    message.parentElement.classList.add('error')
    messageError.textContent = 'Пожалуйста, введите ваше сообщение'
    isValid = false
  } else {
    message.parentElement.classList.remove('error')
    messageError.textContent = ''
  }

  return isValid
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm')
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    if (validateForm()) {
      const formData = new FormData(form)
      const data = Object.fromEntries(formData)

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          notify('Ваши данные отправлены!')
          form.reset()
        })
        .catch((error) => {
          notify('Произошла ошибка при отправке данных.')
          console.error('Error:', error)
        })
    }
  })
})
