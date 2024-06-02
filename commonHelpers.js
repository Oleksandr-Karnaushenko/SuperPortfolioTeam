import{A as L,S as q,N as E,a as w,i as P}from"./assets/vendor-a3b214ec.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const f=document.querySelector(".burger-btn"),S=document.querySelector(".burger-menu");f.addEventListener("click",t=>{x()});S.addEventListener("click",t=>{x()});function x(){f.classList.toggle("open"),S.classList.toggle("hidden"),document.body.classList.toggle("stop-scrolling")}const v="https://raw.githubusercontent.com/Oleksandr-Karnaushenko/SuperPortfolioTeam/main/src",h=[{projectImage:"/img/my-project-images/webwallet-1x-min.webp",imgSet:"/img/my-project-images/webwallet-1x-min.webp 1x, /img/my-project-images/webwallet-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Wallet webservice",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/green-1x-min.webp",imgSet:"/img/my-project-images/green-1x-min.webp 1x, /img/my-project-images/green-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Green Harvest online store",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/english-1x-min.webp",imgSet:"/img/my-project-images/english-1x-min.webp 1x, /img/my-project-images/english-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"English Exellence webservice",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/power-1x-min.webp",imgSet:"/img/my-project-images/power-1x-min.webp 1x, /img/my-project-images/power-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Power pulse webservice",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/mimino-1x-min.webp",imgSet:"/img/my-project-images/mimino-1x-min.webp 1x, /img/my-project-images/mimino-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Mimino website",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/vyshyvanka-1x-min.webp",imgSet:"/img/my-project-images/vyshyvanka-1x-min.webp 1x, /img/my-project-images/vyshyvanka-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Vyshyvanka vibes Landing Page",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/studio-1x-min.webp",imgSet:"/img/my-project-images/studio-1x-min.webp 1x, /img/my-project-images/studio-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Starlight Studio landing page",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/jewelry-1x-min.webp",imgSet:"/img/my-project-images/jewelry-1x-min.webp 1x, /img/my-project-images/jewelry-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Chego Jewelry website",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/energy-1x-min.webp",imgSet:"/img/my-project-images/energy-1x-min.webp 1x, /img/my-project-images/energy-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Energy Flow webservice",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"},{projectImage:"/img/my-project-images/fruitbox-1x-min.webp",imgSet:"/img/my-project-images/fruitbox-1x-min.webp 1x, /img/my-project-images/fruitbox-2x-min.webp 2x",technologies:"React, JavaScript, Node JS, Git",description:"Fruitbox Online store",link:"https://github.com/Oleksandr-Karnaushenko/SuperPortfolioTeam"}],J=document.querySelector(".projects"),k=document.querySelector(".load-more-btn"),O=3;let a=0;function T(t,e){const o=h.slice(t,e).reduce((s,i)=>s+`<li class="project-card">
          <img class="project-image"
             srcset="${v+i.imgSet}"
             src="${v+i.projectImage}" 
             alt="${i.description}">
            <div class="project-card-descr">
              <p class="technologies">${i.technologies}</p>
              <div class="line-title-link">
              <h3 class="project-title">${i.description}</h3>
              <a class="link" href="${i.link}" target="_blank">Visit
              <svg class="visit-icon" width="24" height="24">
              <use href="/img/icons.svg#icon-my-projects-visit"></use>
              </svg>
              </a>
              </div>
            </div>
        </li>`,"");J.insertAdjacentHTML("beforeend",o)}function j(){const t=h.length-a,e=Math.min(t,O);let o=a+e;T(a,o),a+=e,a>=h.length&&k.classList.add("visually-hidden")}document.addEventListener("DOMContentLoaded",j);k.addEventListener("click",j);new L(".accordion-ul-container",{duration:400,showMultiple:!1,removeButton:!0});function d(t){const e=t.classList.toggle("ac-header-custom");t.classList.toggle("ac-border-none",e);const o=t.querySelector(".icon-FAQ-arrow");o&&o.classList.toggle("rotated",e)}document.querySelectorAll(".ac-trigger").forEach(t=>{t.addEventListener("click",e=>{const o=e.target.closest(".ac-header");if(o){const s=document.querySelector(".ac-header.ac-header-custom");s&&s!==o&&d(s),d(o)}})});document.querySelectorAll(".ac").forEach(t=>{t.addEventListener("accordionjs:open",e=>{const o=e.target.querySelector(".ac-header");o&&d(o)}),t.addEventListener("accordionjs:close",e=>{const o=e.target.querySelector(".ac-header");o&&d(o)})});const N=new q(".swiper",{modules:[E],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{1280:{slidesPerView:2}},spaceBetween:32});document.querySelector(".swiper-button-next");document.querySelector(".swiper-button-prev");w.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function I(){try{return(await w.get("/reviews")).data}catch(t){return console.error("Failed to load reviews:",t),[]}}const R=t=>t.map(e=>`<li class="reviews-item swiper-slide">
        <p class="reviews-text">${e.review}</p>
        <div class="reviewer-data">
          <img
            src="${e.avatar_url}"
            alt="Natalia Shevchenko"
            loading="lazy"
            width="40"
            height="40"
            class="reviews-foto"
          />
          <p class="reviewer-name">${e.author}</p>
        </div>
      </li>`).join(""),M=async()=>{const t=document.querySelector(".reviews-list");try{const e=await I();if(e.length===0){t.innerHTML='<p class="not-found">Not found</p>';return}const o=R(e);t.innerHTML=o,N.update()}catch(e){console.log(e),alert("Failed to load reviews. Please try again later.")}};window.addEventListener("load",M);const b=document.querySelector("#work-form"),n=document.querySelector(".work-form-input"),g=document.querySelector(".work-form-input-text"),l=document.querySelector(".work-together-success"),m=document.querySelector(".work-together-error-input"),u=document.querySelector(".work-together-error-message"),K=document.querySelector(".close-modal-btn"),c=document.querySelector(".backdrop"),y=document.querySelector(".work-together-loader");K.addEventListener("click",()=>{c.classList.remove("is-open")});window.addEventListener("keydown",function(t){t.key==="Escape"&&c.classList.remove("is-open")});c.addEventListener("click",t=>{t.target===t.currentTarget&&c.classList.remove("is-open")});const G=()=>{n.validity.valid?(l.style.display="block",m.style.display="none"):l.style.display="none",n.value===""&&(l.style.display="none")};n.addEventListener("input",G);b.addEventListener("submit",t=>{t.preventDefault(),n.value.trim()===""&&(m.style.display="block",m.textContent="the field must be filled"),g.value.trim()===""?u.style.display="block":u.style.display="none",n.value.trim()!==""&&g.value.trim()!==""&&(y.classList.remove("is-hide"),w.post("https://portfolio-js.b.goit.study/api/requests",{email:n.value,comment:g.value}).then(e=>{y.classList.add("is-hide"),c.classList.add("is-open");const o=document.querySelector(".work-modal-text-green"),s=document.querySelector(".work-modal-text");o.textContent=e.data.title,s.textContent=e.data.message,m.style.display="none",u.style.display="none",l.style.display="none",b.reset()}).catch(e=>{y.classList.add("is-hide"),P.error({title:"Error",message:e.message,position:"center"})}))});
//# sourceMappingURL=commonHelpers.js.map
