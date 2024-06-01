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