import{A as g}from"./assets/vendor-8f98089f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const c=[{projectImage:"/img/my-project-images/webwallet-1x-min.webp",imgSet:"/img/my-project-images/webwallet-1x-min.webp 1x, /img/my-project-images/webwallet-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Wallet webservice ",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/green-1x-min.webp",imgSet:"/img/my-project-images/green-1x-min.webp 1x, /img/my-project-images/green-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Green Harvest online store",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/english-1x-min.webp",imgSet:"/img/my-project-images/english-1x-min.webp 1x, /img/my-project-images/english-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"English Exellence webservice",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/power-1x-min.webp",imgSet:"/img/my-project-images/power-1x-min.webp 1x, /img/my-project-images/power-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Power pulse webservice",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/mimino-1x-min.webp",imgSet:"/img/my-project-images/mimino-1x-min.webp 1x, /img/my-project-images/mimino-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Mimino website",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/vyshyvanka-1x-min.webp",imgSet:"/img/my-project-images/vyshyvanka-1x-min.webp 1x, /img/my-project-images/vyshyvanka-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Vyshyvanka vibes Landing Page",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/studio-1x-min.webp",imgSet:"/img/my-project-images/studio-1x-min.webp 1x, /img/my-project-images/studio-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Starlight Studio landing page",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/jewelry-1x-min.webp",imgSet:"/img/my-project-images/jewelry-1x-min.webp 1x, /img/my-project-images/jewelry-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Chego Jewelry website",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/energy-1x-min.webp",imgSet:"/img/my-project-images/energy-1x-min.webp 1x, /img/my-project-images/energy-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Energy Flow webservice ",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/fruitbox-1x-min.webp",imgSet:"/img/my-project-images/fruitbox-1x-min.webp 1x, /img/my-project-images/fruitbox-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Fruitbox Online store",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"}],l=document.querySelector(".projects"),m=document.querySelector(".load-more-btn"),d=3;let s=0;function u(n,t){for(let r=n;r<t;r++){if(r>=c.length)return;const i=c[r],e=document.createElement("li");e.classList.add("project-card"),e.innerHTML=`
    <img class="project-image"
    srcset="${i.imgSet}"
    src="${i.projectImage}" alt="${i.description}">
    <div class="project-card-descr">
    <p class="technologies">${i.technologies}</p>
    <h3 class="project-title">${i.description}</h3>
    <a class="link" href="${i.link}" target="_blank">Visit<svg class="visit-icon" width="24" height="24"><use href="/img/icons.svg#icon-my-projects-visit"></use></svg></a></div>`,l.appendChild(e)}}function p(){const n=c.length-s,t=Math.min(n,d);u(s,s+t),s+=t,s>=c.length&&(m.disabled=!0)}document.addEventListener("DOMContentLoaded",p);m.addEventListener("click",p);new g(".accordion-ul-container",{duration:400,showMultiple:!1,removeButton:!0});document.querySelectorAll(".ac-trigger").forEach(n=>{n.addEventListener("click",t=>{document.querySelectorAll(".ac-header").forEach(i=>{i.classList.remove("ac-header-custom"),i.classList.remove("ac-border-none")});const r=t.target.closest(".ac-header");r&&(r.classList.add("ac-header-custom"),r.classList.add("ac-border-none"))}),n.addEventListener("blur",()=>{const t=n.closest(".ac-header");t&&t.classList.remove("ac-border-none")})});
//# sourceMappingURL=commonHelpers.js.map