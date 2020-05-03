//Hamburger navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const parallax = document.getElementById("hero");



// Parallax for hero image
window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .6 + "px";
});

// Navbar open and close

[hamburger, navLinks].forEach((i) => {
    i.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle('fade');
        });
    });
})

// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("open");
//     links.forEach(link => {
//         link.classList.toggle('fade');
//     });
// });



// navLinks.addEventListener("click", () => {
//     navLinks.classList.toggle("open");
//     links.forEach(link => {
//         link.classList.toggle('fade');
//     });
// });

// $(document).ready(function () {
//     $('#nav-icon3, #nav-about, #classes').click(function () {
//         $("#nav-icon3").toggleClass('open');
//     });
// });

// Map
function initMap() {
    var location = {
        lat: 51.465952,
        lng: -0.072594
    }
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
};





