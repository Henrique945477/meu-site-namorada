// Data de início do relacionamento (ano, mês - 1, dia, hora, minuto, segundo)
const startDate = new Date(2024, 1, 19, 19, 0, 0); // 19/02/2024 às 19:00

function updateTimer() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);

  const years = Math.floor(diff / (365 * 24 * 60 * 60));
  diff %= 365 * 24 * 60 * 60;
  const days = Math.floor(diff / (24 * 60 * 60));
  diff %= 24 * 60 * 60;
  const hours = Math.floor(diff / (60 * 60));
  diff %= 60 * 60;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  document.getElementById("timeElapsed").textContent =
    `${years} ano(s), ${days} dia(s), ${hours} hora(s), ${minutes} minuto(s) e ${seconds} segundo(s)`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Carrossel de fotos
const images = document.querySelectorAll("#carousel img");
let current = 0;

setInterval(() => {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}, 4000); // Troca a cada 4 segundos

// Animação de corações adicionais (opcional)
function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.classList.add('floating-heart');
  heart.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 800);

// Estilo para corações animados extras
const style = document.createElement('style');
style.textContent = `
  .floating-heart {
    position: fixed;
    bottom: 0;
    font-size: 24px;
    animation: floatUp 8s ease-in forwards;
    pointer-events: none;
    z-index: 1;
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-120vh) scale(1.5);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// === BOTÃO CUSTOMIZADO DE PLAY/PAUSE ===
const audioPlayer = document.getElementById('audioPlayer');

// Cria botão personalizado
const playButton = document.createElement('button');
playButton.id = 'customPlayButton';
playButton.innerHTML = '▶️'; // Ícone inicial

let isPlaying = false;

playButton.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
    playButton.innerHTML = '▶️';
  } else {
    audioPlayer.play();
    playButton.innerHTML = '⏸️';
  }
  isPlaying = !isPlaying;
});

// Esconde o player padrão
audioPlayer.style.display = 'none';

// Adiciona o botão customizado ao DOM, logo depois do player
audioPlayer.parentNode.insertBefore(playButton, audioPlayer.nextSibling);

