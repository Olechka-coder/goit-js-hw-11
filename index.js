import{a as p,S as f,i as a}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="55158990-7244be83249386c7e2b523135";async function y(o){return(await p.get(d,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(){document.querySelector(".gallery").innerHTML=""}function b(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:u})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${r}" alt="${s}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${e}</p>
          <p><b>Views</b> ${t}</p>
          <p><b>Comments</b> ${n}</p>
          <p><b>Downloads</b> ${u}</p>
        </div>
      </li>
    `).join("")}function L(o){document.querySelector(".gallery").insertAdjacentHTML("beforeend",b(o)),g.refresh()}const c=document.querySelector(".form"),S=c.querySelector("input"),l=document.querySelector(".loader");c.addEventListener("submit",async o=>{o.preventDefault();const r=S.value.trim();if(!r){a.warning({message:"Please enter a search query!",position:"topRight"});return}h(),q();try{const i=await y(r);if(i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}catch{a.error({message:"Something went wrong!",position:"topRight"})}finally{v()}});function q(){l.classList.add("active")}function v(){l.classList.remove("active")}
//# sourceMappingURL=index.js.map
