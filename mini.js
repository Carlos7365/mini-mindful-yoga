//paralax on hero

const parallax = document.getElementById
("hero");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .6 + "px";
    // console.log('Offset: ' + offset);
    // console.log("offset * 0.7" + offset)
})


//Hamburger navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");



hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});



navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});



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
}


