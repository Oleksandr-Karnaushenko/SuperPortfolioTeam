const images = {
  webwallet1x: new URL(
    '../img/my-project-images/webwallet-1x-min.webp',
    import.meta.url
  ).href,
  webwallet2x: new URL(
    '../img/my-project-images/webwallet-2x-min.webp',
    import.meta.url
  ).href,
  green1x: new URL(
    '../img/my-project-images/green-1x-min.webp',
    import.meta.url
  ).href,
  green2x: new URL(
    '../img/my-project-images/green-2x-min.webp',
    import.meta.url
  ).href,
  english1x: new URL(
    '../img/my-project-images/english-1x-min.webp',
    import.meta.url
  ).href,
  english2x: new URL(
    '../img/my-project-images/english-2x-min.webp',
    import.meta.url
  ).href,
  power1x: new URL(
    '../img/my-project-images/power-1x-min.webp',
    import.meta.url
  ).href,
  power2x: new URL(
    '../img/my-project-images/power-2x-min.webp',
    import.meta.url
  ).href,
  mimino1x: new URL(
    '../img/my-project-images/mimino-1x-min.webp',
    import.meta.url
  ).href,
  mimino2x: new URL(
    '../img/my-project-images/mimino-2x-min.webp',
    import.meta.url
  ).href,
  vyshyvanka1x: new URL(
    '../img/my-project-images/vyshyvanka-1x-min.webp',
    import.meta.url
  ).href,
  vyshyvanka2x: new URL(
    '../img/my-project-images/vyshyvanka-2x-min.webp',
    import.meta.url
  ).href,
  studio1x: new URL(
    '../img/my-project-images/studio-1x-min.webp',
    import.meta.url
  ).href,
  studio2x: new URL(
    '../img/my-project-images/studio-2x-min.webp',
    import.meta.url
  ).href,
  jewelry1x: new URL(
    '../img/my-project-images/jewelry-1x-min.webp',
    import.meta.url
  ).href,
  jewelry2x: new URL(
    '../img/my-project-images/jewelry-2x-min.webp',
    import.meta.url
  ).href,
  energy1x: new URL(
    '../img/my-project-images/energy-1x-min.webp',
    import.meta.url
  ).href,
  energy2x: new URL(
    '../img/my-project-images/energy-2x-min.webp',
    import.meta.url
  ).href,
  fruitbox1x: new URL(
    '../img/my-project-images/fruitbox-1x-min.webp',
    import.meta.url
  ).href,
  fruitbox2x: new URL(
    '../img/my-project-images/fruitbox-2x-min.webp',
    import.meta.url
  ).href,
};

const iconArrow = new URL(
  '../img/icons.svg#icon-my-projects-visit',
  import.meta.url
).href;

const projectsData = [
  {
    projectImage: images.webwallet1x,
    imgSet: `${images.webwallet1x} 1x, ${images.webwallet2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Wallet webservice',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: images.green1x,
    imgSet: `${images.green1x} 1x, ${images.green2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Green Harvest online store',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: images.english1x,
    imgSet: `${images.english1x} 1x, ${images.english2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'English Exellence webservice',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: images.power1x,
    imgSet: `${images.power1x} 1x, ${images.power2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Power pulse webservice',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: images.mimino1x,
    imgSet: `${images.mimino1x} 1x, ${images.mimino2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Mimino website',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: images.vyshyvanka1x,
    imgSet: `${images.vyshyvanka1x} 1x, ${images.vyshyvanka2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Vyshyvanka vibes Landing Page',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: images.studio1x,
    imgSet: `${images.studio1x} 1x, ${images.studio2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Starlight Studio landing page',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: images.jewelry1x,
    imgSet: `${images.jewelry1x} 1x, ${images.jewelry2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Chego Jewelry website',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: images.energy1x,
    imgSet: `${images.energy1x} 1x, ${images.energy2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Energy Flow webservice',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
  {
    projectImage: images.fruitbox1x,
    imgSet: `${images.fruitbox1x} 1x, ${images.fruitbox2x} 2x`,
    technologies: 'React, JavaScript, Node JS, Git',
    description: 'Fruitbox Online store',
    link: 'https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam',
  },
];

const projectsContainer = document.querySelector('.projects');
const loadMoreBtn = document.querySelector('.load-more-btn');
const perLoad = 3;
let startIndex = 0;

function renderProjects(startIndex, endIndex) {
  const markup = projectsData
    .slice(startIndex, endIndex)
    .reduce((html, project) => {
      return (
        html +
        `<li class="project-card">
          <img class="project-image"
             srcset="${project.imgSet}"
             src="${project.projectImage}" 
             alt="${project.description}"
             loading="lazy">
            <div class="project-card-descr">
              <p class="technologies">${project.technologies}</p>
              <div class="line-title-link">
              <h3 class="project-title">${project.description}</h3>
              <a class="link" href="${project.link}" target="_blank">Visit
              <svg class="visit-icon" width="24" height="24">
              <use href="${iconArrow}"></use>
              </svg>
              </a>
              </div>
            </div>
        </li>`
      );
    }, '');
  projectsContainer.insertAdjacentHTML('beforeend', markup);
}

function loadMoreProjects() {
  const remainingProjects = projectsData.length - startIndex;
  const projectsToShow = Math.min(remainingProjects, perLoad);
  let endIndex = startIndex + projectsToShow;
  renderProjects(startIndex, endIndex);
  startIndex += projectsToShow;
  if (startIndex >= projectsData.length) {
    loadMoreBtn.classList.add('visually-hidden');
  }
}

document.addEventListener('DOMContentLoaded', loadMoreProjects);
loadMoreBtn.addEventListener('click', loadMoreProjects);
