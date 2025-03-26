const sections = ['themeToggleContainer', 'hero', 'about', 'skills', 'links', 'projects'];

sections.forEach(section => {
  fetch(`components/${section}.html`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to fetch ${section}: ${res.status}`);
      }
      return res.text();
    })
    .then(html => {
      document.getElementById(section).innerHTML = html;
    })
    .catch(err => {
      console.error(err);
    });
});
