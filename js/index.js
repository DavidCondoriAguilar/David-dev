// INICIO LIBRERIA AOS 
window.addEventListener("load", function() {
  let myElement = document.getElementById("myElement");
  myElement.setAttribute("data-aos", "zoom-out-right");
  myElement.setAttribute("data-aos-duration", "1500");

  AOS.init();
});


// TYPED LIBRARY
let typed = new Typed(".type", {
  strings: ["Developer&#128187;", "Designer&#128736;", "Freelancer&#10166;"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// AUDIO

let sound = new Audio();
sound.src = "mario-bros tuberia.mp3";

// LOADING
window.addEventListener("load", function () {
  let loadingOverlay = document.querySelector(".loading-overlay");

  setTimeout(function () {
    loadingOverlay.style.display = "none";

    // Agregar acciones adicionales después de la carga
  }, 2000); // 2000 ms = 2 segundos de espera
});
window.addEventListener("load", function() {
  AOS.init();
});


