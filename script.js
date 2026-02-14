window.onload = function() {
    console.log("El script se ha cargado correctamente");

    // 1. CONFIGURACIÓN DEL TIEMPO
    const startDate = new Date("2023-01-03T00:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        const timerElement = document.getElementById("timer");
        if (timerElement) {
            timerElement.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    // 2. GENERADOR DEL ÁRBOL
    const canopy = document.getElementById('canopy');
    if (canopy) {
        const colors = ['#ff4d6d', '#ff758f', '#c9184a', '#ffb3c1', '#a4133c'];
        for (let i = 0; i < 150; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-leaf';
            
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 100;
            const x = Math.cos(angle) * radius + 110;
            const y = Math.sin(angle) * radius + 80;
            
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heart.style.position = 'absolute';
            heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            heart.style.animation = `float ${2 + Math.random() * 2}s infinite alternate`;
            
            canopy.appendChild(heart);
        }
    } else {
        console.error("No se encontró el elemento con ID 'canopy'");
    }
};
