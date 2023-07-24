let icon = document.querySelector(".nav-btn");
let mobileNav = document.getElementById("dropdown-nav");

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
  mobileNav.classList.toggle("active");
});