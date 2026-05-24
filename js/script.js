/* =========================================================
   KRISHISETU SEEDS  —  Interactivity
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });

    // close nav after clicking a link (mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          nav.classList.remove('open');
          const icon = navToggle.querySelector('i');
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Animated counters (stats) ---------- */
  const counters = document.querySelectorAll('.stat-num');
  if (counters.length) {
    const animate = (el) => {
      const target = +el.dataset.target;
      const duration = 1800;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = value.toLocaleString('en-IN') + (target >= 1000 ? '+' : '+');
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString('en-IN') + '+';
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(c => io.observe(c));
  }

  /* ---------- Contact form (front-end demo) ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      status.textContent = 'Thank you! Your message has been sent. We will get back to you soon.';
      status.style.color = '#0f5026';
      form.reset();
      setTimeout(() => { status.textContent = ''; }, 6000);
    });
  }
});
