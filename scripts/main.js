const sections = ['themeToggleContainer', 'hero', 'about', 'skills', 'links', 'projects'];

sections.forEach(section => {
  fetch(`/portfolio/components/${section}.html`)
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

const projects = [
  {
    title: "HLS-Client",
    description: "This project implements HTTP-Live Streaming Protocol server and player in the client device, using gstreamer multimedia framework",
    url: "https://github.com/akashblsbrmnm/hlsclient",
    image: "https://opengraph.githubassets.com/1/akashblsbrmnm/hlsclient"
  },
  {
    title: "Developer Portfolio",
    description: "This is a developer portfolio made using Tailwind framework, and a little bit of JS",
    url: "https://github.com/akashblsbrmnm/akashblsbrmnm.github.io",
    image: "https://opengraph.githubassets.com/1/akashblsbrmnm/akashblsbrmnm.github.io"
  },
  {
    title: "Deep learning : Skin Cancer Classification",
    description: "This was my project for AI/ML Coursework at the University",
    url: "https://github.com/akashblsbrmnm/skin-cancer-classifier",
    image: "https://opengraph.githubassets.com/1/akashblsbrmnm/skin-cancer-classifier"
  },
  {
    title: "Project Y",
    description: "STILL WORK IN PROGRESS",
    url: "https://github.com/akashblsbrmnm",
    image: "https://opengraph.githubassets.com/1/"
  }
];

function createProjectTiles() {
  const container = document.getElementById("project-tiles");
  if (!container) return;

  projects.forEach(project => {
    const tile = document.createElement('div');
    tile.className = 'project-tile';
    tile.innerHTML = \`
      <div class="project-thumbnail mb-4">
          <img src="\${project.image}" alt="\${project.title}" class="w-full h-full object-cover">
          <div class="redirect-icon">
              <i data-lucide="external-link"></i>
          </div>
      </div>
      <h3 class="text-xl font-bold mb-2">\${project.title}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">\${project.description}</p>
      <a href="\${project.url}" target="_blank" class="read-more">
          find more <i data-lucide="github"></i>
      </a>
      <div class="repo-actions">
          <a href="\${project.url}/stargazers" target="_blank" class="repo-action">
              <i data-lucide="star"></i> Star
          </a>
          <a href="\${project.url}/fork" target="_blank" class="repo-action">
              <i data-lucide="git-fork"></i> Fork
          </a>
      </div>
    \`;
    const thumbnail = tile.querySelector('.project-thumbnail');
    thumbnail.addEventListener('click', () => window.open(project.url, '_blank'));
    container.appendChild(tile);
  });

  lucide.createIcons();
}

window.addEventListener('load', createProjectTiles);
