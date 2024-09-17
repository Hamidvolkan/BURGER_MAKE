const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const burger = document.querySelectorAll(".order__Card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else entry.target.classList.remove("animate");
  });
});

burger.forEach((burger) => {
  observer.observe(burger);
});

// make animation for last part image
const eventImage = document.querySelectorAll(".event__image");
const eventContent = document.querySelectorAll(".event__content");

const observing = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      console.log("happening");
    } else entry.target.classList.remove("animate");
  });
});

eventImage.forEach((item) => {
  observing.observe(item);
});
eventContent.forEach((item) => {
  observing.observe(item);
});
