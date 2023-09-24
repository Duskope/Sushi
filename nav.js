let icon = document.querySelector(".nav-btn");
let mobileNav = document.getElementById("dropdown-nav");
let dropdownBtn = document.querySelectorAll(".dropdown-link");
let menu = document.getElementById('menu')
let about = document.getElementById('about')
let navLogo = document.getElementById('nav-logo')

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
  mobileNav.classList.toggle("active");

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

navLogo.addEventListener('click', () => {
    document.location.pathname = 'Sushi/index.html'
})