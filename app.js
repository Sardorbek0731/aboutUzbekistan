// Scroll Header

const scrollHeader = document.querySelector("nav");
const navUl = document.querySelector(".navUl");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    scrollHeader.classList.add("scroll-header");
    scrollHeader.style.position = "fixed";
    navUl.style.display = "flex";
  } else {
    scrollHeader.classList.remove("scroll-header");
    scrollHeader.style.position = "absolute";
    navUl.style.display = "none";
  }
});

// Nav link Active
const navItem = document.querySelectorAll(".nav__item");

document.addEventListener("scroll", () => {
  if (window.scrollY <= 1500) {
    navItem.forEach((item, i) => {
      if (i == 0) {
        item.classList.add("active");
      }
      if (i == 1) {
        item.classList.remove("active");
      }
      if (i == 2) {
        item.classList.remove("active");
      }
      if (i == 3) {
        item.classList.remove("active");
      }
      if (i == 4) {
        item.classList.remove("active");
      }
    });
  }
  if (window.scrollY > 1500) {
    navItem.forEach((item, i) => {
      if (i == 0) {
        item.classList.remove("active");
      }
      if (i == 1) {
        item.classList.add("active");
      }
      if (i == 2) {
        item.classList.remove("active");
      }
      if (i == 3) {
        item.classList.remove("active");
      }
      if (i == 4) {
        item.classList.remove("active");
      }
    });
  }
  if (window.scrollY > 2900) {
    navItem.forEach((item, i) => {
      if (i == 0) {
        item.classList.remove("active");
      }
      if (i == 1) {
        item.classList.remove("active");
      }
      if (i == 2) {
        item.classList.add("active");
      }
      if (i == 3) {
        item.classList.remove("active");
      }
      if (i == 4) {
        item.classList.remove("active");
      }
    });
  }
  if (window.scrollY > 4900) {
    navItem.forEach((item, i) => {
      if (i == 0) {
        item.classList.remove("active");
      }
      if (i == 1) {
        item.classList.remove("active");
      }
      if (i == 2) {
        item.classList.remove("active");
      }
      if (i == 3) {
        item.classList.add("active");
      }
      if (i == 4) {
        item.classList.remove("active");
      }
    });
  }
  if (window.scrollY > 6300) {
    navItem.forEach((item, i) => {
      if (i == 0) {
        item.classList.remove("active");
      }
      if (i == 1) {
        item.classList.remove("active");
      }
      if (i == 2) {
        item.classList.remove("active");
      }
      if (i == 3) {
        item.classList.remove("active");
      }
      if (i == 4) {
        item.classList.add("active");
      }
    });
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
  searchInputValue.value = "";
});

// Angle top && My telephone
function scrollItem() {
  if (window.scrollY > 200) {
    angleUp.style.display = "flex";
    myTelephone.style.display = "flex";
  } else {
    angleUp.style.display = "none";
    myTelephone.style.display = "none";
  }
}

// Angle top
const angleUp = document.querySelector(".angle_top");

document.addEventListener("scroll", () => {
  scrollItem();
});

// My telephone
const myTelephone = document.querySelector(".my_telephone");

document.addEventListener("scroll", () => {
  scrollItem();
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
  }, 5400);
}
function correctAlertProgress() {
  setTimeout(() => {
    correctProgress.classList.remove("active");
  }, 5400);
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
