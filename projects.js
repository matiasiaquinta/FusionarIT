document.addEventListener("DOMContentLoaded", function () {
   
  
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
  
  
    //proyectos funcion
    var btnProjects = document.querySelectorAll(".btnProject");
    var closeButtons = document.querySelectorAll(".close_project");
    var closeBehind = document.querySelectorAll(".close-btn-behind");
  
    btnProjects.forEach(function (btn) {
      btn.addEventListener("click", function () {
        // Get the corresponding popup ID from the data attribute
        var popupId = this.getAttribute("data-popup");
  
        // Find the corresponding popup element and toggle a class to show it
        var popup = document.querySelector(popupId);
        popup.classList.add("visible");
        
      });
    });
  
    // X
    closeButtons.forEach(function (closeBtn) {
      closeBtn.addEventListener("click", function () {
        // Get the corresponding popup ID from the data attribute
        var popupId = this.getAttribute("data-popup");
  
        // Find the corresponding popup element and toggle a class to hide it
        var popup = document.querySelector(popupId);
        popup.classList.remove("visible");
      });
    });

    // Outside Div
    closeBehind.forEach(function (closeBtnBehind) {
      closeBtnBehind.addEventListener("click", function () {
        // Get the corresponding popup ID from the data attribute
        var popupId = this.getAttribute("data-popup");
  
        // Find the corresponding popup element and toggle a class to hide it
        var popup = document.querySelector(popupId);
        popup.classList.remove("visible");
      });
    });

  });