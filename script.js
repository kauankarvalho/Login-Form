const emailInput = document.querySelector(".js-email-input")
const passwordInput = document.querySelector(".js-password-input")

function toggleEmailFocus() {
  const emailContainer = document.querySelector(".js-container-email")
  const emailIcon = document.querySelector(".js-email-icon")

  const activeEmailInput = emailInput === document.activeElement

  if (activeEmailInput) {
    emailContainer.classList.add("is-input-focus")
    emailIcon.setAttribute("src", "./assets/email-focus.svg")
  } else {
    emailContainer.classList.remove("is-input-focus")
    emailIcon.setAttribute("src", "./assets/email.svg")
  }
}

function togglePasswordFocus() {
  const passwordContainer = document.querySelector(".js-container-password")
  const lockIcon = document.querySelector(".js-lock-icon")
  const eyeIcon = document.querySelector(".js-eye-icon")

  const activePasswordInput = passwordInput === document.activeElement

  if (activePasswordInput) {
    passwordContainer.classList.add("is-input-focus")
    lockIcon.setAttribute("src", "./assets/lock-focus.svg")
    eyeIcon.setAttribute("src", "./assets/eye-focus.svg")
  } else {
    passwordContainer.classList.remove("is-input-focus")
    lockIcon.setAttribute("src", "./assets/lock.svg")
    eyeIcon.setAttribute("src", "./assets/eye.svg")
  }
}

emailInput.addEventListener("focus", toggleEmailFocus)
passwordInput.addEventListener("focus", togglePasswordFocus)
emailInput.addEventListener("blur", toggleEmailFocus)
passwordInput.addEventListener("blur", togglePasswordFocus)
