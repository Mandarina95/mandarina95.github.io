// 1. CONFIGURACIÓN DEL TIEMPO
const startDate = new Date("2023-01-03T00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = now - startDate;

    // Cálculos de tiempo
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
    }
}

// Ejecutar inmediatamente y luego cada segundo
setInterval(updateTimer, 1000);
updateTimer();

// 2. GENERADOR DEL ÁRBOL DE CORAZONES
// Usamos DOMContentLoaded para asegurar que el HTML existe antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
    const canopy = document.getElementById('canopy');
    
    // Si el elemento no existe en el HTML, detenemos la ejecución para evitar errores
    if (!canopy) return;

    const colors = ['#ff4d6d', '#ff758f', '#c9184a', '#ffb3c1', '#a4133c'];

    for (let i = 0; i < 150; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-leaf';
        
        // Posicionamiento aleatorio en forma circular
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 100;
        
        // Ajustamos los centros (110 y 80) según el tamaño de tu contenedor CSS
        const x = Math.cos(angle) * radius + 110;
        const y = Math.sin(angle) * radius + 80;
        
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.position = 'absolute'; // Asegura que respeten el top/left
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Variación en la animación para que no se muevan todos iguales
        const duration = 2 + Math.random() * 2;
        const delay = Math.random() * 2;
        heart.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        canopy.appendChild(heart);
    }
});
