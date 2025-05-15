
const translations = {
  es: {
    "title": "Jairo Ocaña | Programador y Diseñador de Videojuegos - Portfolio",
    "name": "Jairo Ocaña",
    "role": "Programador y Diseñador de Videojuegos",
    "about": "Sobre mí",
    "projects": "🎮 Proyectos",
    "prototypes": "🧪 Prototipos",
    "experience": "Experiencia Laboral y Educación",
    "about-text": "Soy un programador apasionado...",
    "title-experience1": "FREELANCER",
    "title-experience2": "ESPECIALIZACIÓN DE VIDEOJUEGOS Y VR - IES RAFAEL ALBERTI",
    "title-experience3": "PROGRAMADOR JUNIOR FULLSTACK EN PRÁCTICAS - CONTROLNET",
    "title-experience4": "DESARROLLO DE APLICACIONES MULTIPLATAFORMA - IES FERNANDO AGUILAR QUIGNON",
    "time-experience1": "Mayo 2025",
    "time-experience2": "2025",
    "time-experience3": "Marzo 2024 – Junio 2024",
    "time-experience4": "2024",
    "list-experience1": "Desarrollo de páginas CRM y ERP en equipo, trabajando con clientes reales (3 proyectos en total).",
    "list-experience2": "He adquirido conocimiento de C#, Entity Framework, Javascript y MVC con ASP.NET.",
    "list-experience3": "Estructuración backend para las soluciones CRM y ERP.",
    "list-experience4": "Diseño frontend para los mismos software.",
    "desc-experience1": "",
    "desc-experience2": "Especialización donde adquirí mis conocimientos sobre programación, arte, diseño y producción orientado a videojuegos.",
    "desc-experience3": "En ControlNet he adquirido experiencia como programador FullStack:",
    "desc-experience4": "Grado superior donde adquirí mis conocimientos de programación orientado a objetos.",
    "proj1-title": "Fragmented Memory",
    "proj1-desc": "Juego corto de terror que había realizado con un equipo en mis estudios. Llevé acabo el rol de productor y programador de soporte. Además de crear la narrativa y muchos de sus puzles. También me encargé de diseñar los sonidos y la música, aunque estas fueron producidas por terceros.",
    "proj2-title": "Oh My Godz",
    "proj2-desc": "Clicker que desarrollé por mi cuenta con un pequeño equipo para una Jam. Actualmente lo voy actualizando poco a poco en mis tiempos libres añadiéndole cosas que se me vayan ocurriendo. El objetivo era realizar un juego sólo con canvas.",
    "proj3-title": "Globrush",
    "proj3-desc": "Fue el primer proyecto donde participé como artista pixelart. Realicé los tilesets además del personaje principal.",
    "prot1-title": "Alizia's Project",
    "prot1-desc": "Fue mi primer proyecto en Unity. Intentamos hacer un Zelda Like en 24 horas. Un juego bastante simple para probar el motor.",
    "prot2-title": "Super Intergalactic Death Tournament",
    "prot2-desc": "Un prototipo que hice para practicar las máquinas de estados de los enemigos. El objetivo era diseñar un juego donde atacar al ritmo de la música crearía mayor daño.",
    "footer": "Portfolio"
  },
  en: {
    "title": "Jairo Ocaña | Programmer and Game Designer - Portfolio",
    "name": "Jairo Ocaña",
    "role": "Programmer and Game Designer",
    "about": "About me",
    "projects": "🎮 Projects",
    "prototypes": "🧪 Prototypes",
    "experience": "Experience",
    "about-text": "I'm a passionate game developer...",
    "title-experience1": "FREELANCER",
    "title-experience2": "GAME AND VR SPECIALIZATION - IES RAFAEL ALBERTI",
    "title-experience3": "JUNIOR FULLSTACK PROGRAMMER INTERN - CONTROLNET",
    "title-experience4": "CERTIFICATE OF HIGHER EDUCATION MULTIPLATFORM APPLICATION DEVELOPMENT - IES FERNANDO AGUILAR QUIGNON",
    "time-experience1": "May 2025",
    "time-experience2": "2025",
    "time-experience3": "March 2024 – June 2024",
    "time-experience4": "2024",
    "list-experience1": "Development of CRM and ERP pages as a team, working with real clients (3 projects in total).",
    "list-experience2": "I have acquired knowledge of C#, Entity Framework, Javascript and MVC with ASP.NET.",
    "list-experience3": "Backend structuring for CRM and ERP solutions.",
    "list-experience4": "Frontend design for the same software.",
    "desc-experience1": "",
    "desc-experience2": "Specialization where I acquired my knowledge of programming, art, design, and production focused on video games.",
    "desc-experience3": "At ControlNet I have gained experience as a FullStack programmer:",
    "desc-experience4": "Higher vocational degree where I gained my knowledge of object-oriented programming.",
    "proj1-title": "Fragmented Memory",
    "proj1-desc": "A short horror game I made with a team during my studies. I served as producer and support programmer, and also created the narrative and many of the puzzles. I was in charge of sound and music design as well, although the assets were produced by third parties.",
    "proj2-title": "Oh My Godz",
    "proj2-desc": "A clicker game I developed with a small team for a jam. I'm currently updating it little by little in my spare time, adding new features as they come to mind. The goal was to make a game using only canvas.",
    "proj3-title": "Globrush",
    "proj3-desc": "This was the first project I participated in as a pixel artist. I created both the tilesets and the main character.",
    "prot1-title": "Alizia's Project",
    "prot1-desc": "It was my first project in Unity. We tried to make a Zelda-like game in 24 hours, a fairly simple project to test the engine.",
    "prot2-title": "Super Intergalactic Death Tournament",
    "prot2-desc": "A prototype I made to practice enemy state machines. The goal was to design a game where attacking on the beat of the music would deal more damage.",
    "footer": "Portfolio"
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language || navigator.userLanguage; 
  const lang = (userLang.startsWith("es") ? "es" : "en");
  const savedLang = localStorage.getItem("lang");
  const finalLang = savedLang && (savedLang === "es" || savedLang === "en") ? savedLang : lang;
  setLang(finalLang);
});

function setLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.querySelectorAll('.project').forEach(img => {
  img.style.transition = 'transform 0.4s ease';
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});


//Background-Sliders
let slides = document.querySelectorAll(".bg-slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 8000);
///////////////////