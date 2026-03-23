// Nav scroll effect
window.addEventListener('scroll', () => {
  document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
});

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// Intersection observer for fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Confetti Cursor Effect
document.addEventListener('mousedown', (e) => {
  const numParticles = 15;
  const colors = ['#1e1206', '#c8964a', '#8b5a2b', '#5c3a21', '#d4a373'];
  
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    document.body.appendChild(particle);
    
    const size = Math.random() * 6 + 4;
    particle.style.position = 'fixed';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 60 + 40;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity + 15;
    
    const animation = particle.animate([
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`, opacity: 0 }
    ], {
      duration: Math.random() * 300 + 500,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
    });
    
    animation.onfinish = () => particle.remove();
  }
});


