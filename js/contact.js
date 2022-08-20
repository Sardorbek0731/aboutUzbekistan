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
  searchInputValue.value = "";
});

// Alert progress
const signupForm = document.getElementById("signup-form");
const warningAlert = document.getElementById("warning_alert");
const correctAlert = document.getElementById("correct_alert");
const submit = document.getElementById("submit");
const warningCloseAlert = document.getElementById("closeWarning_alert");
const correctCloseAlert = document.getElementById("closeCorrect_alert");
const warningProgress = document.querySelector(".warning-progress");
const correctProgress = document.querySelector(".correct-progress");

function warningAlertProgress() {
  setTimeout(() => {
    warningProgress.classList.remove("active");
  }, 5300);
}
function correctAlertProgress() {
  setTimeout(() => {
    correctProgress.classList.remove("active");
  }, 5300);
}
function warningCloseAlertProgress() {
  setTimeout(() => {
    warningProgress.classList.remove("active");
  }, 300);
}
function correctCloseAlertProgress() {
  setTimeout(() => {
    correctProgress.classList.remove("active");
  }, 300);
}
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
    correctProgress.classList.add("active");
    setTimeout(() => {
      correctAlert.classList.remove("active");
    }, 5000);
    correctAlertProgress();
    signupForm.firstName.value = "";
    signupForm.email.value = "";
    signupForm.password.value = "";
  } else {
    warningAlert.classList.add("active");
    warningProgress.classList.add("active");
    setTimeout(() => {
      warningAlert.classList.remove("active");
    }, 5000);
    warningAlertProgress();
  }
});
warningCloseAlert.addEventListener("click", () => {
  warningAlert.classList.remove("active");
  warningCloseAlertProgress();
});
correctCloseAlert.addEventListener("click", () => {
  correctAlert.classList.remove("active");
  correctCloseAlertProgress();
});
