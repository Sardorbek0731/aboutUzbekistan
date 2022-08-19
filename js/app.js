// Scroll Header

const scrollHeader = document.querySelector("nav");
const navUl = document.querySelector(".navUl");
const brandIcon = document.querySelector("#brand-icon");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    scrollHeader.classList.add("scroll-header");
    scrollHeader.style.position = "fixed";
    navUl.style.display = "flex";
    brandIcon.style.display = "block";
  } else {
    scrollHeader.classList.remove("scroll-header");
    scrollHeader.style.position = "absolute";
    navUl.style.display = "none";
    brandIcon.style.display = "none";
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

// Home Carousel
const prew = document.getElementById("prew");
const next = document.getElementById("next");
const imgs = document.querySelector(".imgs");

const img = document.querySelectorAll(".imgs img");

let index = 0;
function changeImage() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }
  imgs.style.marginLeft = `-${index * 100}%`;
}
next.addEventListener("click", () => {
  index++;
  changeImage();
});

prew.addEventListener("click", () => {
  index--;
  changeImage();
});

// Region Carousel
const prew_region = document.getElementById("prew_region");
const next_region = document.getElementById("next_region");
const homeRegion_row = document.querySelector(".homeRegion_row");

const homeRegionRow_item = document.querySelectorAll(
  ".homeRegion_row .homeRegionRow_item"
);
console.log(homeRegionRow_item);

let idx = 0;
function changeRegion() {
  if (idx > homeRegionRow_item.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = homeRegionRow_item.length - 1;
  }
  homeRegion_row.style.transform = `translateX(${-idx * 27}rem)`;
}
next_region.addEventListener("click", () => {
  idx++;
  changeRegion();
});

prew_region.addEventListener("click", () => {
  idx--;
  changeRegion();
});
