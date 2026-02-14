

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

// 3. GENERADOR DE CASCADA DE CORAZONES
(function () {
  const CONTAINER_SELECTOR = ".petal-container";
  const PETAL_COUNT = 28;
  const container = document.querySelector(CONTAINER_SELECTOR);
  if (!container) return;

  // Evitar ejecutar más de una vez
  if (container.dataset.petalsInit === "true") return;
  container.dataset.petalsInit = "true";

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  // --- corazones ---
  for (let i = 0; i < PETAL_COUNT; i++) {
    const p = document.createElement("div");
    p.className = "petal";

    const base = 24;
    const scale = rand(0.6, 1.5);
    const size = Math.round(base * scale);
    p.style.width = ${size}px;
    p.style.height = ${size}px;

    p.style.left = ${rand(-10, 110)}%;
    p.style.top = ${rand(-20, -5)}vh;

    const fallDuration = rand(6, 18);
    const swayDuration = rand(3, 6);
    const delay = rand(-10, 8);
    p.style.animationDuration = ${fallDuration}s, ${swayDuration}s;
    p.style.animationDelay = ${delay}s, ${rand(0, 2)}s;

    p.style.opacity = ${rand(0.85, 1)};

    container.appendChild(p);
  }

    // animaciones (coinciden con las keyframes fallText, swayText en CSS)
    const fallDuration = rand(7, 16);
    const swayDuration = rand(2.5, 5.5);
    const delay = rand(-10, 6);
    t.style.animationDuration = ${fallDuration}s, ${swayDuration}s;
    t.style.animationDelay = ${delay}s, ${rand(0, 2)}s;

    t.style.opacity = ${rand(0.7, 1)};

    container.appendChild(t);
  }
})();
    
