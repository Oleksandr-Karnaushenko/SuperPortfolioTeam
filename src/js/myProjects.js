const projectsData = [
  {
    projectImage: '/img/my-project-images/webwallet-1x-min.webp',
    imgSet:
      '/img/my-project-images/webwallet-1x-min.webp 1x, /img/my-project-images/webwallet-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Wallet webservice ',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: '/img/my-project-images/green-1x-min.webp',
    imgSet:
      '/img/my-project-images/green-1x-min.webp 1x, /img/my-project-images/green-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Green Harvest online store',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: '/img/my-project-images/english-1x-min.webp',
    imgSet:
      '/img/my-project-images/english-1x-min.webp 1x, /img/my-project-images/english-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'English Exellence webservice',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: '/img/my-project-images/power-1x-min.webp',
    imgSet:
      '/img/my-project-images/power-1x-min.webp 1x, /img/my-project-images/power-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Power pulse webservice',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: '/img/my-project-images/mimino-1x-min.webp',
    imgSet:
      '/img/my-project-images/mimino-1x-min.webp 1x, /img/my-project-images/mimino-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Mimino website',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: '/img/my-project-images/vyshyvanka-1x-min.webp',
    imgSet:
      '/img/my-project-images/vyshyvanka-1x-min.webp 1x, /img/my-project-images/vyshyvanka-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Vyshyvanka vibes Landing Page',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: '/img/my-project-images/studio-1x-min.webp',
    imgSet:
      '/img/my-project-images/studio-1x-min.webp 1x, /img/my-project-images/studio-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Starlight Studio landing page',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: '/img/my-project-images/jewelry-1x-min.webp',
    imgSet:
      '/img/my-project-images/jewelry-1x-min.webp 1x, /img/my-project-images/jewelry-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Chego Jewelry website',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: '/img/my-project-images/energy-1x-min.webp',
    imgSet:
      '/img/my-project-images/energy-1x-min.webp 1x, /img/my-project-images/energy-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Energy Flow webservice ',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: '/img/my-project-images/fruitbox-1x-min.webp',
    imgSet:
      '/img/my-project-images/fruitbox-1x-min.webp 1x, /img/my-project-images/fruitbox-2x-min.webp 2x',
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Fruitbox Online store',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
];

const projects = document.querySelector('.projects');
const loadMoreBtn = document.querySelector('.load-more-btn');
const perLoad = 3;
let startIndex = 0;

function renderProjects(start, end) {
  for (let i = start; i < end; i++) {
    if (i >= projectsData.length) {
      return;
    }
    const project = projectsData[i];
    const projectElement = document.createElement('li');
    projectElement.classList.add('project-card');
    projectElement.innerHTML = `
    <img class="project-image"
    srcset="${project.imgSet}"
    src="${project.projectImage}" alt="${project.description}">
    <div class="project-card-descr">
    <p class="technologies">${project.technologies}</p>
    <h3 class="project-title">${project.description}</h3>
    <a class="link" href="${project.link}" target="_blank">Visit<svg class="visit-icon" width="24" height="24"><use href="/img/icons.svg#icon-my-projects-visit"></use></svg></a></div>`;
    projects.appendChild(projectElement);
  }
}

function loadMoreProjects() {
  const remainingProjects = projectsData.length - startIndex;
  const projectsToShow = Math.min(remainingProjects, perLoad);
  renderProjects(startIndex, startIndex + projectsToShow);
  startIndex += projectsToShow;
  if (startIndex >= projectsData.length) {
    loadMoreBtn.disabled = true;
  }
}
document.addEventListener('DOMContentLoaded', loadMoreProjects);

loadMoreBtn.addEventListener('click', loadMoreProjects);
