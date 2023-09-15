let icon = document.querySelector(".nav-btn");
let mobileNav = document.getElementById("dropdown-nav");
let dropdownBtn = document.querySelectorAll(".dropdown-link");
let menu = document.getElementById('menu')
let about = document.getElementById('about')

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
  mobileNav.classList.toggle("active");
  if (mobileNav.classList.contains("active")) {
      mobileNav.style.transform = "translateY(100vh)"
  }
});
dropdownBtn.forEach(button => {
    button.addEventListener('click', () => {
        icon.classList.toggle('clicked')
        mobileNav.classList.toggle('active')
    })
});

function scrollMenu() {
    menu.scrollIntoView
}
function scrollAbout() {
    about.scrollIntoView
}