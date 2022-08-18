const signupForm = document.getElementById("signup-form");
const warningAlert = document.getElementById("warning_alert");
const correctAlert = document.getElementById("correct_alert");
const submit = document.getElementById("submit");
const warningCloseAlert = document.getElementById("closeWarning_alert");
const correctCloseAlert = document.getElementById("closeCorrect_alert");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let regEx = /[a-zA-Z]{2,}/;
  let regExEmail = /[a-zA-Z0-9]{2,}@gmail/;
  let regExPassword = /[a-zA-Z0-9]{2,}/;
  let ism = signupForm.firstName.value;
  let email = signupForm.email.value;
  let password = signupForm.password.value;
  if (
    regEx.test(ism) &&
    regExEmail.test(email) &&
    regExPassword.test(password)
  ) {
    correctAlert.classList.add("active");
    correctCloseAlert.classList.add("active");
    signupForm.firstName.value = "";
    signupForm.email.value = "";
    signupForm.password.value = "";
  } else {
    warningAlert.classList.add("active");
    warningCloseAlert.classList.add("active");
  }
});
warningCloseAlert.addEventListener("click", () => {
  warningAlert.classList.remove("active");
  warningCloseAlert.classList.remove("active");
});
correctCloseAlert.addEventListener("click", () => {
  correctAlert.classList.remove("active");
  correctCloseAlert.classList.remove("active");
});

const scrollHeader = document.querySelector("nav");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    scrollHeader.classList.add("scroll-header");
    scrollHeader.style.position = "fixed";
  } else {
    scrollHeader.classList.remove("scroll-header");
    scrollHeader.style.position = "absolute";
  }
});

// Search

const openSearch = document.querySelector("#openSearch");
const searchOverlay = document.querySelector(".searchOverlay");
const searchInput = document.querySelector(".searchInput");
const closeSearchInput = document.querySelector("#close--searchInput");
const inputSearch = document.querySelector("#inputSearch");
const searchInputValue = document.querySelector("#searchInputValue");
const message = document.querySelector(".message");

openSearch.addEventListener("click", () => {
  searchOverlay.classList.remove("hidden");
  searchInput.classList.remove("hidden");
  closeSearchInput.style.display = "flex";
});
closeSearchInput.addEventListener("click", () => {
  searchOverlay.classList.add("hidden");
  searchInput.classList.add("hidden");
  closeSearchInput.style.display = "none";
});

inputSearch.addEventListener("click", () => {
  if (searchInputValue.value.length > 0) {
    message.textContent = "";
  } else {
    message.textContent = `Iltimos, qidirilayotgan narsani kiriting...`;
    setTimeout(() => {
      message.textContent = "";
    }, 4000);
  }
});
