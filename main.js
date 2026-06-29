/* ============================================================
   main.js  |  Navigation + Scroll + Interactions
   ============================================================ */

'use strict';

// ── NAV ──────────────────────────────────────────────────────
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Scroll → add .scrolled class
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.classList.toggle('active', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close menu on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Hamburger → X animation
const toggleSpans = navToggle.querySelectorAll('span');
navToggle.addEventListener('click', () => {
  const active = navToggle.classList.contains('active');
  if (active) {
    toggleSpans[0].style.transform = 'translateY(7px) rotate(45deg)';
    toggleSpans[1].style.opacity  = '0';
    toggleSpans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    toggleSpans[0].style.transform = '';
    toggleSpans[1].style.opacity  = '';
    toggleSpans[2].style.transform = '';
  }
});

// ── ACTIVE NAV LINK (scroll spy) ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ── SMOOTH SCROLL (polyfill for Safari) ──────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── CONTACT FORM ─────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate send (replace with Netlify/Formspree/API integration)
    await new Promise(r => setTimeout(r, 1200));

    // Show success state
    const wrap = contactForm.parentElement;
    contactForm.style.display = 'none';

    const success = document.createElement('div');
    success.className = 'form-success active';
    success.innerHTML = `
      <h3>Got it!</h3>
      <p>Thanks for reaching out. The campaign will be in touch soon.</p>
    `;
    wrap.appendChild(success);

    // Reset after 5s (optional)
    // setTimeout(() => {
    //   contactForm.reset();
    //   contactForm.style.display = '';
    //   success.remove();
    //   btn.textContent = original;
    //   btn.disabled = false;
    // }, 5000);
  });
}

// ── PARALLAX HERO PHOTOS (subtle) ────────────────────────────
const heroPhotos = document.querySelectorAll('.hero-photo');
if (heroPhotos.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroPhotos.forEach((photo, i) => {
      const speed = 0.04 + (i * 0.015);
      photo.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

// ── TICKER PAUSE ON HOVER ─────────────────────────────────────
const ticker = document.querySelector('.ticker-inner');
if (ticker) {
  ticker.parentElement.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
  });
  ticker.parentElement.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
  });
}

// ── PHOTO LIGHTBOX (simple) ───────────────────────────────────
// Opens photos in overlay when clicked
function initLightbox() {
  const clickablePhotos = document.querySelectorAll(
    '.about-photo-item, .endorsement-photo, .collage-item:not(.graphic-placeholder)'
  );

  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.style.cssText = `
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.95);
    z-index: 999;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  `;
  const img = document.createElement('div');
  img.style.cssText = `
    max-width: 90vw;
    max-height: 90vh;
    width: 800px;
    height: 600px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `;
  const close = document.createElement('button');
  close.textContent = '×';
  close.style.cssText = `
    position: absolute;
    top: 1.5rem; right: 2rem;
    font-size: 2.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    line-height: 1;
  `;
  overlay.appendChild(img);
  overlay.appendChild(close);
  document.body.appendChild(overlay);

  clickablePhotos.forEach(photo => {
    const bg = photo.style.backgroundImage;
    if (!bg || bg === 'none') return;
    photo.style.cursor = 'pointer';
    photo.addEventListener('click', () => {
      img.style.backgroundImage = bg;
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', closeLightbox);
  close.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

initLightbox();

// ── DONATE AMOUNT HIGHLIGHT ───────────────────────────────────
document.querySelectorAll('.donate-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.donate-btn').forEach(b => {
      b.classList.remove('donate-btn--active');
    });
    this.classList.add('donate-btn--active');
  });
});

// ── YEAR ─────────────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── LOG ──────────────────────────────────────────────────────
console.log('%c JACKSON FOR BOROUGH ASSEMBLY ', 'background:#d94f3a;color:#fff;font-weight:bold;font-size:14px;padding:4px 8px;');
console.log('Campaign site loaded. Questions? Contact the campaign team.');
