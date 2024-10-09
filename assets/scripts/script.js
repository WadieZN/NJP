const icon = document.querySelector("#nav-icon");
const menu = document.querySelector("header nav ul");

// Hamburger icon behavior
icon.addEventListener("click", () => {
  icon.classList.toggle("open");
  menu.style.top === "0%"
    ? (menu.style.top = "-1000px")
    : (menu.style.top = "0%");
});