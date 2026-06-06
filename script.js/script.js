// 1) Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeTextarea = document.getElementById('mensaje');
    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorEmail');
    const errorMensaje = document.getElementById('errorMensaje');
    const resultadoDiv = document.getElementById('formResultado');

    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Evita recarga de página

        // Limpiar errores previos
        errorNombre.textContent = '';
        errorEmail.textContent = '';
        errorMensaje.textContent = '';
        resultadoDiv.innerHTML = '';

        let isValid = true;

        // Validar nombre
        const nombre = nombreInput.value.trim();
        if (nombre === '') {
            errorNombre.textContent = 'El nombre es obligatorio.';
            isValid = false;
        } else if (nombre.length < 3) {
            errorNombre.textContent = 'Ingrese al menos 3 caracteres.';
            isValid = false;
        }

        // Validar email con expresión regular simple
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            errorEmail.textContent = 'El correo electrónico es obligatorio.';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errorEmail.textContent = 'Introduzca un correo válido (ejemplo: usuario@unsa.edu.pe).';
            isValid = false;
        }

        // Validar mensaje (mínimo 10 caracteres)
        const mensaje = mensajeTextarea.value.trim();
        if (mensaje === '') {
            errorMensaje.textContent = 'El mensaje no puede estar vacío.';
            isValid = false;
        } else if (mensaje.length < 10) {
            errorMensaje.textContent = 'El mensaje debe tener al menos 10 caracteres.';
            isValid = false;
        }

        if (isValid) {
            resultadoDiv.innerHTML = '<div style="background:#d4edda; color:#155724; padding:10px; border-radius:12px;">✅ Mensaje enviado correctamente. Pronto nos comunicaremos contigo.</div>';
            form.reset();  // Limpiar campos
            // Opcional: ocultar mensaje después de 5 segundos
            setTimeout(() => {
                resultadoDiv.innerHTML = '';
            }, 5000);
        } else {
            resultadoDiv.innerHTML = '<div style="background:#f8d7da; color:#721c24; padding:10px; border-radius:12px;">⚠️ Por favor corrige los errores en el formulario.</div>';
        }
    });

    // 2) Evento dinámico: botón mostrar/ocultar detalles de tutoría
    const btnDetalles = document.getElementById('btnDetallesTutoria');
    const detallesDiv = document.getElementById('detallesTutoria');

    btnDetalles.addEventListener('click', function() {
        // Alternar clase 'visible' y cambiar texto del botón
        if (detallesDiv.classList.contains('visible')) {
            detallesDiv.classList.remove('visible');
            btnDetalles.innerHTML = '<i class="fas fa-eye"></i> Mostrar detalles del acompañamiento';
        } else {
            detallesDiv.classList.add('visible');
            btnDetalles.innerHTML = '<i class="fas fa-eye-slash"></i> Ocultar detalles del acompañamiento';
        }
    });

    // Pequeño efecto para resaltar enlace activo en navegación (opcional)
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});