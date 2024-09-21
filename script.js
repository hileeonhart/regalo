const florContainer = document.querySelector('.flor-container');
let florCount = 0;

// Función para generar una flor
function generarFlor() {
    florCount++;
    const flor = document.createElement('div');
    flor.classList.add('flor');
    flor.id = `flor${florCount}`; 

    // Posicionamiento aleatorio
    flor.style.left = `${Math.random() * 100}%`;
    flor.style.top = `${Math.random() * 100}%`;

    // Animaciones
    flor.style.animation = 'florecer 1s ease-in-out forwards';
    flor.addEventListener('animationend', () => {
        flor.style.animation = 'danzar 3s infinite linear';
    });

    // Interacción del usuario
    flor.addEventListener('click', () => {
        flor.style.animation = 'none';
        flor.style.transition = 'opacity 0.5s ease-in-out';
        flor.style.opacity = 0;
        setTimeout(() => {
            florContainer.removeChild(flor);
        }, 500);
    });

    // Agregando la flor al contenedor
    florContainer.appendChild(flor);
}

// Generar una flor cada 2 segundos
setInterval(generarFlor, 2000); // 2000 milisegundos = 2 segundos