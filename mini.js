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
};

$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('#container').css('background-position', 'center ' + ((scrolledY)) + 'px');
  });