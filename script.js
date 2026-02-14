// 1. CONFIGURACIÓN DEL TIEMPO

const startDate = new Date("2023-01-03T00:00:00").getTime();

function updateTimer() {

  const now = new Date().getTime();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = 

    `${days} días ${hours} horas ${mins} minutos ${secs} segundos`;

}

setInterval(updateTimer, 1000);

updateTimer();

// 2. GENERADOR DEL ÁRBOL DE CORAZONES

const canopy = document.getElementById('canopy');

const colors = ['#ff4d6d', '#ff758f', '#c9184a', '#ffb3c1', '#a4133c'];

for (let i = 0; i < 150; i++) {

  const heart = document.createElement('div');

  heart.className = 'heart-leaf';

  

  // Posicionamiento aleatorio en forma de círculo/corazón

  const angle = Math.random() * Math.PI * 2;

  const radius = Math.random() * 100;

  const x = Math.cos(angle) * radius + 110;

  const y = Math.sin(angle) * radius + 80;

  

  heart.style.left = `${x}px`;

  heart.style.top = `${y}px`;

  heart.style.background = colors[Math.floor(Math.random() * colors.length)];

  heart.style.animation = `float ${2 + Math.random() * 2}s infinite alternate`;

  

  canopy.appendChild(heart);

}