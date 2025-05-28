// INICIO LIBRERIA AOS 
window.addEventListener("load", function() {
  let myElement = document.getElementById("myElement");
  myElement.setAttribute("data-aos", "zoom-out-right");
  myElement.setAttribute("data-aos-duration", "1500");

  AOS.init();
});

//INICIO LIBRERIA TYPED.JS
let typed;

function initTyped() {
    if (typed) {
        typed.destroy();
    }
    
    typed = new Typed(".type", {
        strings: ["Frontend", "Backend", "Fullstack Jr", "Web 🌐", "Móvil 📱"],
        typeSpeed: 90,
        backSpeed: 70,
        backDelay: 300,
        loop: true,
    });
}

// Inicializar Typed al cargar la página
document.addEventListener('DOMContentLoaded', initTyped);

// Reinicializar Typed cuando cambie el idioma
document.getElementById('lang-switch').addEventListener('change', initTyped);

//AUDIO
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


// Cambio idioma 
// Datos de traducción
const translations = {
  en: {
      home: "Home",
      skills: "Skills",
      works: "Works",
      contact: "Contact",
      greeting: "I'm David Condori",
      role: "Frontend Developer",
      aboutMeTitle: "About Me 🦈",
      profileTitle: "Profile",
      techTitle: "Technologies & Tools",
      timelineTitle: "My Journey 🚀",
      projectsTitle: "Featured Projects 💻",
      aboutMeText: "Welcome to my portfolio! My name is David Condori Aguilar, a passionate web developer. My goal is to deliver engaging, secure, and scalable results for every project I work on. Whether developing apps or creating captivating user interfaces, I'm always up for a challenge! Self-learning, persistence, and curiosity are some of the characteristics that define me.",
      downloadCV: "Download CV",
      contactTitle: "Getting in touch is easy!",
      contactIntro: "Don't be shy! It's fun to meet new people",
      location: "Lima- Peru",
    //   phone: "+51 928 193 119",
      email: "davids.condori.aguilar@gmail.com",
      // Form translations
      formName: "Name",
      formNamePlaceholder: "Enter your name",
      formEmail: "Email",
      formEmailPlaceholder: "Enter your email",
      formPhone: "Phone Number",
      formPhonePlaceholder: "Enter your phone number",
      formMessage: "Message",
      formMessagePlaceholder: "Enter your message",
      formSubmit: "Send Message",
      // Timeline translations
      frontendRole: "Frontend Developer",
      frontendDesc: "Specialization in frontend web development with React and modern technologies. Creation of responsive user interfaces and performance optimization.",
      fullstackRole: "Junior Full Stack Developer",
      fullstackDesc: "Development of full stack web applications using Spring Boot and React. Implementation of RESTful APIs and relational databases.",
      netRole: ".NET Developer",
      netDesc: "Development of enterprise applications using C# and .NET Framework. Work with Entity Framework and SQL Server.",
      trainingRole: "Technical Training",
      trainingDesc: "Studies in software development and programming fundamentals. Participation in academic projects and hackathons.",
      // Stats translations
      completedProjects: "Completed Projects",
      coffeeCups: "Coffee Cups",
      codeHours: "Hours of Code",
      happyClients: "Happy Clients",
      // Project translations
      reactCRUDTitle: "React CRUD",
      reactCRUDDesc: "CRUD application developed with React, implementing basic data management operations with a modern and responsive interface.",
      reactCRUDTech: "React · JavaScript · CSS · REST API",
      camaleonTitle: "Camaleon Ecológico",
      camaleonDesc: "E-commerce for ecological bags with responsive design, fluid animations and user experience optimized to maximize conversions.",
      camaleonTech: "HTML · CSS · JavaScript · Bootstrap",
      prestamosTitle: "Loan System",
      prestamosDesc: "REST API for loan management with Spring Boot and PostgreSQL. Implements Builder and Stream patterns for efficient data operations and object construction.",
      prestamosTech: "Spring Boot · PostgreSQL · JPA · Stream API",
      facturacionTitle: "Billing System",
      facturacionDesc: "Billing system developed with C# and Entity Framework. Uses LINQ and layered architecture for better maintainability.",
      facturacionTech: "C# · Entity Framework · LINQ · SQL Server",
      artecuTitle: "Artecu",
      artecuDesc: "Handicrafts with interactive gallery, contact system and design that highlights the beauty of each artisanal piece.",
      artecuTech: "JavaScript · HTML · CSS · Responsive Design",
      kawiTitle: "Kawi Barbershop",
      kawiDesc: "Professional website for barbershop with booking system, style gallery and modern design that reflects the business identity.",
      kawiTech: "Bootstrap · JavaScript · HTML · CSS",
      // Demo and Code links
      demoLink: "Demo",
      codeLink: "Code",
      // Profile translations
      profileName: "David Condori Aguilar",
      profileRole: "Frontend Developer",
      profileLocation: "Lima, Peru",
      profileBio: "Passionate about creating innovative web solutions and user-friendly interfaces. Specialized in frontend development with modern technologies.",
      // Additional translations
      viewProject: "View Project",
      technologies: "Technologies",
      contactMe: "Contact Me",
      getInTouch: "Get in Touch",
      sendMessage: "Send Message",
      followMe: "Follow Me",
      downloadResume: "Download Resume",
      brandName: "David-dev"
  },
  es: {
      home: "Inicio",
      skills: "Habilidades",
      works: "Trabajos",
      contact: "Contacto",
      greeting: "Soy David Condori",
      role: "Desarrollador Frontend",
      aboutMeTitle: "Sobre Mi 🦈",
      profileTitle: "Perfil",
      techTitle: "Tecnologías y Herramientas",
      timelineTitle: "Mi Trayectoria 🚀",
      projectsTitle: "Proyectos Destacados 💻",
      aboutMeText: "¡Bienvenido a mi portafolio! Mi nombre es David Condori Aguilar, un desarrollador web apasionado. Mi objetivo es ofrecer resultados atractivos, seguros y escalables para cada proyecto en el que trabajo. Ya sea desarrollando aplicaciones o creando interfaces de usuario cautivadoras, ¡siempre estoy preparado para un desafío! El autoaprendizaje, la perseverancia y la curiosidad son algunas de las características que me definen.",
      downloadCV: "Descargar CV",
      contactTitle: "¡Estar en contacto es fácil!",
        contactIntro: "¡No seas tímido! Es divertido conocer gente nueva",
        location: "Lima- Perú",
        // phone: "+51 928 193 119",
        email: "davids.condori.aguilar@gmail.com",
        // Form translations
        formName: "Nombre",
        formNamePlaceholder: "Ingrese su nombre",
        formEmail: "Correo electrónico",
        formEmailPlaceholder: "Ingrese su correo",
        formPhone: "Número Celular",
        formPhonePlaceholder: "Ingrese su número",
        formMessage: "Mensaje",
        formMessagePlaceholder: "Ingrese su mensaje",
        formSubmit: "Enviar mensaje",
        // Timeline translations
        frontendRole: "Desarrollador Frontend",
        frontendDesc: "Especialización en desarrollo web frontend con React y tecnologías modernas. Creación de interfaces de usuario responsivas y optimización de rendimiento.",
        fullstackRole: "Desarrollador Full Stack Jr",
        fullstackDesc: "Desarrollo de aplicaciones web full stack utilizando Spring Boot y React. Implementación de APIs RESTful y bases de datos relacionales.",
        netRole: "Desarrollador .NET",
        netDesc: "Desarrollo de aplicaciones empresariales usando C# y .NET Framework. Trabajo con Entity Framework y SQL Server.",
        trainingRole: "Formación Técnica",
        trainingDesc: "Estudios en desarrollo de software y fundamentos de programación. Participación en proyectos académicos y hackathons.",
        // Stats translations
        completedProjects: "Proyectos Completados",
        coffeeCups: "Tazas de Café",
        codeHours: "Horas de Código",
        happyClients: "Clientes Satisfechos",
        // Project translations
        reactCRUDTitle: "React CRUD",
        reactCRUDDesc: "Aplicación CRUD desarrollada con React, implementando operaciones CRUD con una interfaz responsive.",
        reactCRUDTech: "React · JavaScript · CSS · API REST",
        camaleonTitle: "Camaleon Ecológico",
        camaleonDesc: "E-commerce de bolsas ecológicas con diseño responsivo, animaciones fluidas y experiencia de usuario optimizada para maximizar conversiones.",
        camaleonTech: "HTML · CSS · JavaScript · Bootstrap",
        prestamosTitle: "Sistema de Préstamos",
        prestamosDesc: "API REST para gestión de préstamos con Spring Boot y PostgreSQL. Implementa patrones Builder y Stream para operaciones eficientes de datos y construcción de objetos.",
        prestamosTech: "Spring Boot · PostgreSQL · JPA · Stream API",
        facturacionTitle: "Sistema de Facturación",
        facturacionDesc: "Sistema de facturación desarrollado con C# y Entity Framework. Utiliza LINQ y arquitectura en capas para mejor mantenibilidad.",
        facturacionTech: "C# · Entity Framework · LINQ · SQL Server",
        artecuTitle: "Artecu",
        artecuDesc: "Artesanías con galería interactiva, sistema de contacto y diseño que resalta la belleza de cada pieza artesanal.",
        artecuTech: "JavaScript · HTML · CSS · Diseño Responsive",
        kawiTitle: "Kawi Barbershop",
        kawiDesc: "Sitio web profesional para barbería con sistema de reservas, galería de estilos y diseño moderno que refleja la identidad del negocio.",
        kawiTech: "Bootstrap · JavaScript · HTML · CSS",
        // Demo and Code links
        demoLink: "Demo",
        codeLink: "Código",
        // Profile translations
        profileName: "",
        profileRole: "Desarrollador Frontend",
        profileLocation: "Lima, Perú",
        profileBio: "Apasionado por crear soluciones web innovadoras e interfaces amigables. Especializado en desarrollo frontend con tecnologías modernas.",
        // Additional translations
        viewProject: "Ver Proyecto",
        technologies: "Tecnologías",
        contactMe: "Contáctame",
        getInTouch: "Ponte en Contacto",
        sendMessage: "Enviar Mensaje",
        followMe: "Sígueme",
        downloadResume: "Descargar CV",
        brandName: "David-dev"
  }
};

let currentLang = 'es';

// Función para cambiar el idioma
function changeLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  updateText();
  // Guardar preferencia de idioma
  localStorage.setItem('language', currentLang);
}

// Función para actualizar el texto en el HTML
function updateText() {
  document.querySelectorAll('[data-lang]').forEach(element => {
      const langKey = element.getAttribute('data-lang');
      if (translations[currentLang][langKey]) {
          if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
              element.placeholder = translations[currentLang][langKey];
          } else if (element.id !== 'typed-text') { // No actualizar el texto tipado
              element.textContent = translations[currentLang][langKey];
          }
      }
  });
}

// Cargar preferencia de idioma guardada
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLang = savedLang;
        document.getElementById('lang-switch').checked = savedLang === 'en';
        updateText();
    }
});

// Event listener para el switch de idioma
document.getElementById('lang-switch').addEventListener('change', changeLanguage);
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;
const imageWidth = 80;
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

// Theme switcher functionality
const themeSwitch = document.getElementById('theme-switch');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    themeSwitch.checked = savedTheme === 'dark';
}

// Handle theme switch
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Animación de números en estadísticas
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; 
        const increment = target / (duration / 16);
        let current = 0;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };

        // Iniciar animación cuando el elemento es visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(stat);
    });
}

// Llamar a la función cuando el documento esté listo
document.addEventListener('DOMContentLoaded', animateStats);



document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  let posX = 0, posY = 0;
  let mouseX = 0, mouseY = 0;
  
  // Actualizar posición del cursor
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Animación suave del cursor
  function updateCursor() {
    posX += (mouseX - posX) / 5;
    posY += (mouseY - posY) / 5;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    
    follower.style.left = posX + 'px';
    follower.style.top = posY + 'px';
    
    requestAnimationFrame(updateCursor);
  }
  
  updateCursor();
  
  // Efectos al hacer hover en enlaces
  const hoverElements = document.querySelectorAll('a, button, [data-cursor="hover"]');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
      follower.style.borderColor = '#ff3366';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.borderColor = '#0660c0';
    });
  });
});





document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor-particle');
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    // Configuración del canvas
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Variables para el cursor
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    // Partículas
    const particles = [];
    const particleCount = 30;
    
    // Clase de partícula
    class Particle {
      constructor() {
        this.x = 0;
        this.y = 0;
        this.size = Math.random() * 3 + 1;
        this.density = Math.random() * 30 + 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`;
        this.baseX = 0;
        this.baseY = 0;
        this.velocity = Math.random() * 0.2 + 0.1;
        this.distance = 0;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density * this.velocity;
        let directionY = forceDirectionY * force * this.density * this.velocity;
        
        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
        
        this.draw();
      }
    }
    
    // Inicializar partículas
    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    
    // Animación
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Actualizar posición del cursor personalizado
      cursorX = mouseX;
      cursorY = mouseY;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      // Actualizar partículas
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      
      requestAnimationFrame(animate);
    }
    
    // Eventos
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Efectos al hacer hover
    const hoverElements = document.querySelectorAll('a, button, [data-cursor="hover"]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
    
    // Efecto al hacer clic
    document.addEventListener('mousedown', () => {
      cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
      cursor.classList.remove('click');
    });
    
    // Manejo del redimensionamiento
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
    
    // Iniciar
    init();
    animate();
  });




  // Modern Loader 2025
  document.addEventListener('DOMContentLoaded', function() {
      const loader = document.getElementById('modernLoader');
      const progressFill = document.querySelector('.progress-fill');
      const percentage = document.querySelector('.percentage');
      
      if (!loader) return;
      
      // Bloquear scroll
      document.body.style.overflow = 'hidden';
      
      // Simular carga
      let progress = 0;
      const interval = setInterval(() => {
          progress += Math.random() * 15;
          if (progress > 100) progress = 100;
          
          // Actualizar UI
          progressFill.style.width = `${progress}%`;
          percentage.textContent = `${Math.floor(progress)}%`;
          
          // Completado
          if (progress >= 100) {
              clearInterval(interval);
              
              // Animación de salida
              loader.style.opacity = '0';
              loader.style.transition = 'opacity 0.8s ease';
              
              // Limpiar
              setTimeout(() => {
                  loader.remove();
                  document.body.style.overflow = 'auto';
              }, 800);
          }
      }, 200);
  });