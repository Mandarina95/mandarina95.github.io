document.addEventListener("DOMContentLoaded", () => {
    console.log("Script cargado y listo para celular");

    // 1. CONFIGURACIÓN DEL TIEMPO (Formato compatible universal)
    // Usamos comas en lugar de guiones para máxima compatibilidad en móviles
    const startDate = new Date(2023, 0, 3, 0, 0, 0).getTime(); 

    function updateTimer() {
        const now = new Date().getTime();
        const diff = now - startDate;

        if (diff < 0) return; // Por si la fecha es futura

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        const timerElement = document.getElementById("timer");
        if (timerElement) {
            // Formato más corto para que no se desborde en pantallas pequeñas
            timerElement.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    // 2. GENERADOR DEL ÁRBOL (Optimizado)
    const canopy = document.getElementById('canopy');
    if (canopy) {
        const colors = ['#ff4d6d', '#ff758f', '#c9184a', '#ffb3c1', '#a4133c'];
        for (let i = 0; i < 100; i++) { // Bajamos a 100 para mejor rendimiento en móvil
            const heart = document.createElement('div');
            heart.className = 'heart-leaf';
            
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 80; // Radio un poco más pequeño para móvil
            const x = Math.cos(angle) * radius + (canopy.offsetWidth / 2 || 110);
            const y = Math.sin(angle) * radius + (canopy.offsetHeight / 2 || 80);
            
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heart.style.position = 'absolute';
            heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            heart.style.animation = `float ${2 + Math.random() * 2}s infinite alternate`;
            
            canopy.appendChild(heart);
        }
    }

    // 3. CASCADA DE CORAZONES (Corregido y simplificado)
    const container = document.querySelector(".petal-container");
    if (container && !container.dataset.petalsInit) {
        container.dataset.petalsInit = "true";
        const PETAL_COUNT = 20; // Menos cantidad = más fluidez en móvil

        for (let i = 0; i < PETAL_COUNT; i++) {
            const p = document.createElement("div");
            p.className = "petal";

            const scale = Math.random() * (1.5 - 0.6) + 0.6;
            const size = Math.round(20 * scale);
            
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * -20 - 5}vh`;

            const fallDuration = Math.random() * (15 - 7) + 7;
            const swayDuration = Math.random() * (5 - 2) + 2;
            const delay = Math.random() * 10 - 5;

            p.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
            p.style.animationDelay = `${delay}s, ${Math.random() * 2}s`;
            p.style.opacity = Math.random() * (1 - 0.7) + 0.7;

            container.appendChild(p);
        }
    }
});
