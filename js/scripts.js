    // Funciones para el selector de temas
    function setTheme(theme) {
      // Remover tema actual
      document.documentElement.removeAttribute('data-theme');
      
      // Aplicar nuevo tema (excepto si es rojo que es el default)
      if (theme !== 'red') {
        document.documentElement.setAttribute('data-theme', theme);
      }
      
      // Actualizar botón activo
      document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelector(`.theme-btn.${theme}`).classList.add('active');
      
      // Guardar preferencia
      localStorage.setItem('theme', theme);
    }

    // Cargar tema guardado
    function loadTheme() {
      const savedTheme = localStorage.getItem('theme') || 'red';
      setTheme(savedTheme);
    }

    // Funciones para el menú móvil
    function toggleMenu() {
      const menu = document.getElementById('menu');
      const toggle = document.querySelector('.menu-toggle');
      
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
    }

    function closeMenu() {
      const menu = document.getElementById('menu');
      const toggle = document.querySelector('.menu-toggle');
      
      menu.classList.remove('active');
      toggle.classList.remove('active');
    }

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
      const menu = document.getElementById('menu');
      const toggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('.topbar');
      
      if (!nav.contains(event.target) && menu.classList.contains('active')) {
        closeMenu();
      }
    });

    // Cerrar menú al cambiar tamaño de pantalla
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });

    // Inicializar tema al cargar la página
    document.addEventListener('DOMContentLoaded', loadTheme);

    // Smooth scroll mejorado para dispositivos móviles
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offsetTop = target.offsetTop - 70; // Ajustar por la navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

document.addEventListener("DOMContentLoaded", () => {
    const fondo = document.querySelector(".bg-fondo");

    // Rutas de tus imágenes dentro de la carpeta img/
    const imagenes = [
      "img/python.png",
      "img/css.png",
      "img/BLACK-END.png",
      "img/java.png",
      " img/proyectoInnovador.png",
      " img/EmpresasTecnologicas.png"
     
    ];

    let index = 0;

    // Inicia con la primera
    fondo.style.backgroundImage = `url('${imagenes[index]}')`;

    // Cambia cada 3 segundos
    setInterval(() => {
      index = (index + 1) % imagenes.length;
      fondo.style.backgroundImage = `url('${imagenes[index]}')`;
    }, 3000);
  });





    
