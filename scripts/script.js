document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("header button");
  const navMenu = document.querySelector("header nav ul");

  menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});