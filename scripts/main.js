const sections = ['head', 'hero', 'about', 'skills', 'links', 'projects', 'footer'];

sections.forEach(section => {
  fetch(`components/${section}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById(section).innerHTML = data;
    });
});