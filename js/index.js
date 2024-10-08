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


//Cambio idioma 
// Cambio idioma 
// Datos de traducción
const translations = {
  en: {
      home: "Home",
      skills: "Skills",
      works: "Works",
      contact: "Contact",
      aboutMeTitle: "About Me",
      aboutMeText: "Welcome to my portfolio! My name is David Condori Aguilar, a passionate web developer. My goal is to deliver engaging, secure, and scalable results for every project I work on. Whether developing apps or creating captivating user interfaces, I'm always up for a challenge! Self-learning, persistence, and curiosity are some of the characteristics that define me.",
      downloadCV: "Download CV",
      contactTitle: "Contact Me",
      contactIntro: "Don't be shy! It's fun to meet new people",
      location: "Lima- Peru",
      phone: "+51 928 193 119",
      email: "davids.condori.aguilar@gmail.com",
      // Agrega más traducciones aquí
  },
  es: {
      home: "Inicio",
      skills: "Habilidades",
      works: "Trabajos",
      contact: "Contacto",
      aboutMeTitle: "Sobre Mi",
      aboutMeText: "¡Bienvenido a mi portafolio! Mi nombre es David Condori Aguilar, un desarrollador web apasionado. Mi objetivo es ofrecer resultados atractivos, seguros y escalables para cada proyecto en el que trabajo. Ya sea desarrollando aplicaciones o creando interfaces de usuario cautivadoras, ¡siempre estoy preparado para un desafío! El autoaprendizaje, la perseverancia y la curiosidad son algunas de las características que me definen.",
      downloadCV: "Descargar CV",
      contactTitle: "¡Estar en contacto es fácil!",
        contactIntro: "¡No seas tímido! Es divertido conocer gente nueva",
        location: "Lima- Perú",
        phone: "+51 928 193 119",
        email: "davids.condori.aguilar@gmail.com",
      // Agrega más traducciones aquí
  }
};

let currentLang = 'es'; // Idioma predeterminado

// Función para cambiar el idioma
function changeLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  updateText();
}

// Función para actualizar el texto en el HTML
function updateText() {
  document.querySelectorAll('[data-lang]').forEach(element => {
      const langKey = element.getAttribute('data-lang');
      element.textContent = translations[currentLang][langKey];
  });

  // Actualiza textos específicos
  document.querySelector('.about-me h2').textContent = translations[currentLang].aboutMeTitle;
  document.querySelector('.about-me .p-second').textContent = translations[currentLang].aboutMeText;
  document.querySelector('.first-button').textContent = translations[currentLang].downloadCV;
}

// Event listener para el switch de idioma
document.getElementById('lang-switch').addEventListener('change', changeLanguage);
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;
const imageWidth = 80; // Ancho de cada imagen
let currentIndex = 0;

// Clonar las imágenes para el efecto infinito
for (let i = 0; i < totalImages; i++) {
    const clone = images[i].cloneNode(true);
    slider.appendChild(clone);
}

// Ancho total del slider
const clonedImages = document.querySelectorAll('.slider img'); // Incluye clones
slider.style.width = `${clonedImages.length * imageWidth}px`; // Establece el ancho del slider

// Mover el slider
function moveSlider() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Reiniciar al inicio
        slider.style.transition = 'none'; // Evitar transición al reiniciar
        slider.style.transform = `translateX(0)`;
        
        // Asegurarse de que se recalcule la posición
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease'; // Restablecer transición
        }, 20);
    }
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Desplazar
}

// Cambiar cada 2 segundos
setInterval(moveSlider, 1000);
