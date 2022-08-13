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
