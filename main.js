// main js

//inicio animate css
AOS.init({
  duration: 1000, //0 a 3000ms
  once: true //para que no se repita la animacion al scrollear para arriba
});

//TRANSICION fin

  //togle idioma
  document.addEventListener('DOMContentLoaded', function () {
    const languageButtons = document.querySelectorAll('.language-button');
  
    // Función para cambiar el idioma
    function changeLanguage(language) {
      const languageElements = document.querySelectorAll('[data-es], [data-en]');
  
      languageElements.forEach(element => {
        const textKey = language === 'en' ? 'en' : 'es';
        element.textContent = element.getAttribute(`data-${textKey}`);
      });
    }
  
    // Agregar evento de cambio de idioma para cada botón
    languageButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Obtener el idioma del botón clickeado
        const language = button.getAttribute('data-language');
        // Cambiar el idioma
        changeLanguage(language);
        // Marcar el botón clickeado como activo y desactivar los demás
        languageButtons.forEach(btn => {
          btn.classList.toggle('active', btn === button);
        });
      });
    });
});

  
  
// =================================================================


// ANIMACIONES INICIAL
// animaciones del header y del loader

let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})

//esto es para que al refrescar me lleve siempre arriba del todo
window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
  });

function showContent() {
  var tl = new TimelineMax();

  // Your existing animation code
  tl.to('nav', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: .2})
    //.to('.shapeBkg', { opacity: 1, duration: 2})
    .to('.imgBkg', { opacity: 0.1, duration: .2})
    .to('.firstSpan', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: .3})
    .to('.home-text-title', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: .3})
    .to('.divider', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, x: 0, duration: .2})
    .to('.secondSpan', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=0.2")
    .to('.startButton', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=0.2")
    .to('.logoimg', { opacity: 1, duration: 2}, "-=1");
}

window.onload = function () {
  showContent();
  //alert("cargo la web");
};


// ANIMACIONES FINAL
// =================================================================

//button to TOP (HACER)

//nav sticky
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let nav = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
    nav.classList.toggle('sticky', window.scrollY > 0);
  });
  
//hamburger
document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    const hamburger_open = document.querySelector('.hamburger-oculto');

    // Variable para rastrear si el menú está activo
    var isMenuActive = false;

    const menuLinks = document.querySelectorAll('.hamburger-oculto-container a[href^="#"]');
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", function(){
        hamburger.classList.remove("is-active");
        hamburger_open.classList.remove("is-active");
      })
    })

    // Agregar un manejador de eventos al botón de hamburguesa
    hamburger.addEventListener("click", function() {
      // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      // Do something else, como abrir/cerrar el menú
      hamburger_open.classList.toggle("is-active");

      // Cambiar el estado del menú al revés
      isMenuActive = !isMenuActive;
      // Llamar a la función para bloquear/desbloquear el desplazamiento
      //toggleScrollLock();
  });
});