particlesJS('particles-js', {
  "particles": {
      "number": {
          "value": 200, // Número de partículas (ajustable)
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#ffffff" // Color de las partículas
      },
      "shape": {
          "type": "circle", // Forma de las partículas
          "stroke": {
              "width": 0,
              "color": "#000000"
          }
      },
      "opacity": {
          "value": 0.6, // Opacidad base
          "random": true,
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 5, // Tamaño de las partículas
          "random": true,
          "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": false // Desactiva las líneas de conexión
      },
      "move": {
          "enable": true,
          "speed": 1, // Velocidad de movimiento de las partículas
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": true // Hace que las partículas reboten al borde
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": false
          },
          "onclick": {
              "enable": false
          },
          "resize": true
      }
  },
  "retina_detect": true
});


    document.addEventListener("DOMContentLoaded", function() {
        const readMoreBtns = document.querySelectorAll(".read-more-btn");

        readMoreBtns.forEach(function(btn) {
            btn.addEventListener("click", function() {
                const projectItem = btn.closest(".project-item");
                const textSummary = projectItem.querySelector(".text-summary");
                const textFull = projectItem.querySelector(".text-full");

                if (textFull.style.display === "none" || textFull.style.display === "") {
                    textFull.style.display = "block";
                    textSummary.style.display = "none";
                    btn.textContent = "Leer menos";
                } else {
                    textFull.style.display = "none";
                    textSummary.style.display = "block";
                    btn.textContent = "Leer más";
                }
            });
        });
    });


/*codigo de fecha y hora */
function updateDateTime() {
    const now = new Date();

    // Formatear la fecha
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString(undefined, options);

    // Formatear la hora
    const timeStr = now.toLocaleTimeString(); // Incluye horas, minutos y segundos

    // Actualizar el contenido de los elementos
    document.getElementById('time').textContent = timeStr;
    document.getElementById('date').textContent = dateStr;
}

// Actualizar la fecha y hora inmediatamente
updateDateTime();

// Actualizar la hora cada segundo
setInterval(updateDateTime, 1000);


/*codigo para el nav en moviles */
// Selecciona el menú y el botón del menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Agrega un evento para mostrar/ocultar el menú cuando se toca el botón de menú
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});

// Opción adicional: cerrar el menú cuando se hace clic en cualquier parte de la pantalla
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideToggle = menuToggle.contains(event.target);

    // Si se hace clic fuera del menú y del ícono de menú, oculta el menú
    if (!isClickInsideMenu && !isClickInsideToggle) {
        menu.classList.remove('active');
    }
});


 // Esperar a que la página esté completamente cargada
 window.addEventListener('load', function() {
    // Aplicar la clase 'fade-in' al cuerpo una vez cargado
    document.body.classList.remove('hidden');
    document.body.classList.add('fade-in');
});


///


async function handleFormSubmit(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    
    const form = event.target;
    const formData = new FormData(form);
    
    try {
        const response = await fetch('https://formspree.io/f/mrbzvwpe', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Muestra el modal
            document.getElementById('success-modal').style.display = 'block';
            form.reset(); // Limpia el formulario
            // Redirige después de mostrar el modal
            setTimeout(() => {
               // Cambia 'http://localhost:3000' por la URL de tu sitio desplegado
               window.location.href = 'https://web-portafolio-piero.onrender.com'; 
            }, 2000); // Redirige después de 2 segundos
        } else {
            console.error('Error en el envío del formulario');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

function closeModal() {
    document.getElementById('success-modal').style.display = 'none';
}

// Añade el manejador de eventos al formulario
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);




/* JavaScript para la validación del formulario en tiempo real */

document.getElementById("name").addEventListener("input", validateName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phone").addEventListener("input", validatePhone);


function validateForm() {
    let isValid = true;

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
 

    return isValid;
}

function validateName() {
    const name = document.getElementById("name").value;
    const namePattern = /^[A-Za-z\s]{3,40}$/;
    const nameError = document.getElementById("name-error");

    if (!namePattern.test(name)) {
        nameError.textContent = "El nombre debe tener entre 3 y 20 caracteres y solo contener letras.";
        return false;
    } else {
        nameError.textContent = ""; // Limpia el mensaje de error si es válido
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const emailError = document.getElementById("email-error");

    if (!emailPattern.test(email)) {
        emailError.textContent = "El correo debe ser una dirección válida de Gmail (terminar en @gmail.com).";
        return false;
    } else {
        emailError.textContent = ""; // Limpia el mensaje de error si es válido
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phonePattern = /^9[0-9]{8}$/;
    const phoneError = document.getElementById("phone-error");

    if (!phonePattern.test(phone)) {
        phoneError.textContent = "El número de teléfono debe comenzar con 9 y tener 9 dígitos.";
        return false;
    } else {
        phoneError.textContent = ""; // Limpia el mensaje de error si es válido
        return true;
    }
}


///ajax 
