const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  nav.style.display = "flex";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  hamburger.style.display = "block";
  nav.style.display = "none";
  close.style.display = "none";
});
