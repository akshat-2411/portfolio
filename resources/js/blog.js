var swiper = new Swiper(".swiper-container", {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    mousewheel: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    zoom: false,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        dynamicBullets: true,
        clickable: true,
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Get the modal
var modal = document.getElementById("certificateModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");

// Get all certificate elements
var certificates = document.querySelectorAll(".port");

// Loop through each certificate
certificates.forEach(function(cert) {
    cert.addEventListener("click", function() {
        var imgSrc = cert.getAttribute("data-img");
        modal.style.display = "block";
        modalImg.src = imgSrc;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
