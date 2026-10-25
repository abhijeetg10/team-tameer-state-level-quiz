// Full-Screen Ambient Starfield & Particle Constellation
class CosmicPosterCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 70;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
    this.animate();
  }

  resize() {
    this.w = this.canvas.width = window.innerWidth;
    this.h = this.canvas.height = window.innerHeight;
  }

  init() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        r: Math.random() * 2.6 + 0.8,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        color: ['#00f2fe', '#38bdf8', '#fbbf24', '#c084fc', '#ffffff'][Math.floor(Math.random() * 5)],
        alpha: Math.random() * 0.7 + 0.3
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.w, this.h);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.w;
      if (p.x > this.w) p.x = 0;
      if (p.y < 0) p.y = this.h;
      if (p.y > this.h) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fill();

      // subtle connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 135) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = '#38bdf8';
          this.ctx.globalAlpha = (1 - dist / 135) * 0.16;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    this.ctx.globalAlpha = 1;
    requestAnimationFrame(() => this.animate());
  }
}

// Toggle Big Screen Fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

// Interactive Arena Switcher / Confetti burst
function enterQuizArena() {
  const isCurrentlyFs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  if (isCurrentlyFs) {
    try {
      sessionStorage.setItem('quizArenaFullscreen', 'true');
    } catch(e) {}
  }

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 }
    });
  }

  // Smoothly transition into the live quiz battle stage
  setTimeout(() => {
    window.location.href = "arena.html";
  }, 120);
}

let isLandingAudioPlaying = false;

function toggleLandingAudio() {
  const audio = document.getElementById('landing-bg-audio');
  const icon = document.getElementById('landing-bgm-icon');
  const text = document.getElementById('landing-bgm-text');
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      isLandingAudioPlaying = true;
      if (icon) icon.innerText = '🔊';
      if (text) text.innerText = 'Music: ON';
    }).catch(e => console.log('Audio autoplay prevented:', e));
  } else {
    audio.pause();
    isLandingAudioPlaying = false;
    if (icon) icon.innerText = '🔇';
    if (text) text.innerText = 'Music: MUTED';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CosmicPosterCanvas('poster-canvas');

  // Attempt auto-play on first user interaction (click, keypress, etc.)
  const audio = document.getElementById('landing-bg-audio');
  const startAudioOnInteraction = () => {
    if (audio && audio.paused) {
      audio.volume = 0.65;
      audio.play().then(() => {
        isLandingAudioPlaying = true;
        const icon = document.getElementById('landing-bgm-icon');
        const text = document.getElementById('landing-bgm-text');
        if (icon) icon.innerText = '🔊';
        if (text) text.innerText = 'Music: ON';
      }).catch(() => {});
    }
    window.removeEventListener('click', startAudioOnInteraction);
    window.removeEventListener('keydown', startAudioOnInteraction);
  };

  window.addEventListener('click', startAudioOnInteraction, { once: true });
  window.addEventListener('keydown', startAudioOnInteraction, { once: true });

  // Hotkeys for live stage moderator
  window.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    }
    if (e.key === 'm' || e.key === 'M') {
      toggleLandingAudio();
    }
    if (e.key === 'Enter') {
      enterQuizArena();
    }
  });
});
