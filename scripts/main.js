const sections = ['themeToggleContainer', 'hero', 'about', 'skills', 'links', 'projects'];

Promise.all(
  sections.map(section =>
    fetch(`components/${section}.html`)
      .then(res => res.text())
      .then(html => {
        document.getElementById(section).innerHTML = html;
      })
  )
).then(() => {
  lucide.createIcons();
  setupThemeToggle();
  setupRickRoll();
  setupRDKClick();
  revealSections();
});

// Scroll reveal
function revealSections() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Theme toggle
function setupThemeToggle() {
  const html = document.documentElement;
  const toggleEl = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('darkMode');

  function setTheme(isDark) {
    html.classList.toggle('dark', isDark);
    updateIcon(isDark);
    localStorage.setItem('darkMode', isDark);
  }

  function updateIcon(isDark) {
    toggleEl.innerHTML = isDark
      ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" ...>...</svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" ...>...</svg>';
  }

  if (savedTheme !== null) {
    setTheme(JSON.parse(savedTheme));
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }

  toggleEl.addEventListener('click', () => {
    setTheme(!html.classList.contains('dark'));
  });
}

// RickRoll
function setupRickRoll() {
  const footerText = document.querySelector('.footer-text');
  if (footerText) {
    footerText.onclick = () => {
      window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0', '_blank');
    };
  }
}

// RDK-B clickable term
function setupRDKClick() {
  document.querySelectorAll('.rdk-hover').forEach(el => {
    el.addEventListener('click', () => {
      if (el.textContent === 'RDK-B') {
        window.open('https://wiki.rdkcentral.com/display/RDK/RDK-Broadband', '_blank');
      } else if (el.textContent === 'RDK') {
        window.open('https://en.wikipedia.org/wiki/Reference_Design_Kit', '_blank');
      }
    });
  });
}
