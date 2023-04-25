const emailInput = document.querySelector(".js-email-input")
const passwordInput = document.querySelector(".js-password-input")

const eyeIcon = document.querySelector(".js-eye-icon")

function togglePasswordVisibility() {
  const isPasswordFieldHidden = passwordInput.getAttribute("type") === "password"

  if (isPasswordFieldHidden) {
    passwordInput.setAttribute("type", "text")
    eyeIcon.setAttribute("src", "./assets/eye-closed.svg")
  } else {
    passwordInput.setAttribute("type", "password")
    eyeIcon.setAttribute("src", "./assets/eye.svg")
  }
}

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

  const activePasswordInput = passwordInput === document.activeElement

  if (activePasswordInput) {
    passwordContainer.classList.add("is-input-focus")
    lockIcon.setAttribute("src", "./assets/lock-focus.svg")
  } else {
    passwordContainer.classList.remove("is-input-focus")
    lockIcon.setAttribute("src", "./assets/lock.svg")
  }
}

emailInput.addEventListener("focus", toggleEmailFocus)
passwordInput.addEventListener("focus", togglePasswordFocus)
emailInput.addEventListener("blur", toggleEmailFocus)
passwordInput.addEventListener("blur", togglePasswordFocus)

eyeIcon.addEventListener("click", togglePasswordVisibility)
