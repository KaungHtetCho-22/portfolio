const sections = ['hero', 'about', 'skills', 'links', 'projects'];

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
  revealSections();
  setupRickRoll();
});
