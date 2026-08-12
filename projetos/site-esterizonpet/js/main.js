// ---------- Intro (logo + wordmark grande) — só existe na home ----------
const intro = document.getElementById('intro');
if (intro) {
  const introWordmark = document.getElementById('introWordmark');
  const introSkip = document.getElementById('introSkip');

  // Monta o wordmark letra por letra pra animar o "surgindo aos poucos".
  // Quando o vídeo da logo chegar, trocar esse bloco por um <video> e manter
  // a mesma lógica de "finishIntro()" no final.
  let letterIndex = 0;
  introWordmark.querySelectorAll('.intro__word').forEach((wordEl) => {
    const word = wordEl.dataset.word || '';
    word.split('').forEach((char) => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = char === ' ' ? ' ' : char;
      span.style.animationDelay = `${0.55 + letterIndex * 0.045}s`;
      wordEl.appendChild(span);
      letterIndex += 1;
    });
  });

  const finishIntro = () => {
    intro.classList.add('is-done');
    document.body.classList.remove('intro-active');
  };

  const introTimer = setTimeout(finishIntro, 2600);
  introSkip.addEventListener('click', () => {
    clearTimeout(introTimer);
    finishIntro();
  });
}

// ---------- Nav: estado "scrolled" ----------
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---------- Nav mobile ----------
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.remove('is-open'));
  });
}

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal-up, .reveal-fade');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);
revealEls.forEach((el) => observer.observe(el));

// ---------- Ano no footer ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Contagem crescente da barra de estatísticas ----------
const countEls = document.querySelectorAll('.stats-bar__value[data-count]');
if (countEls.length) {
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${Math.round(eased * target)}+`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  countEls.forEach((el) => countObserver.observe(el));
}

// ---------- Carrossel de depoimentos — só existe na home ----------
const testimonialTrack = document.getElementById('testimonialTrack');
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');
if (testimonialTrack && testimonialPrev && testimonialNext) {
  const scrollStep = () => {
    const card = testimonialTrack.querySelector('.testimonial');
    const gap = 22;
    return card ? card.getBoundingClientRect().width + gap : 300;
  };
  testimonialPrev.addEventListener('click', () => {
    testimonialTrack.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
  });
  testimonialNext.addEventListener('click', () => {
    testimonialTrack.scrollBy({ left: scrollStep(), behavior: 'smooth' });
  });
}

// ---------- Form de contato: redireciona pro WhatsApp da Esterizon ----------
const form = document.getElementById('contactForm');
if (form) {
  const formNote = document.getElementById('formNote');
  const WHATSAPP_NUMBER = '5511919040777';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const petshop = document.getElementById('petshop').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const linhas = [
      `Olá! Meu nome é ${nome}, do petshop ${petshop}.`,
      `Meu WhatsApp: ${whatsapp}`,
    ];
    if (mensagem) linhas.push(`Mensagem: ${mensagem}`);
    linhas.push('Gostaria de solicitar um orçamento com a Esterizon.');

    const texto = encodeURIComponent(linhas.join('\n'));
    formNote.textContent = 'Abrindo o WhatsApp da Esterizon…';
    formNote.style.color = 'var(--accent)';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank', 'noopener');
  });
}
