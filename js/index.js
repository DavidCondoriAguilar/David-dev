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
  var loadingOverlay = document.querySelector(".loading-overlay");

  setTimeout(function () {
    loadingOverlay.style.display = "none";

    // Agregar acciones adicionales después de la carga
  }, 2000); // 3000 ms = 3 segundos de espera
});
