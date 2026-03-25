import{a as p,S as f,i as c}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="55158990-7244be83249386c7e2b523135";async function y(o){return(await p.get(d,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});const n=document.querySelector(".loader");function h(){document.querySelector(".gallery").innerHTML=""}function b(o){return o.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:s,downloads:u})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${r}" alt="${a}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${e}</p>
          <p><b>Views</b> ${t}</p>
          <p><b>Comments</b> ${s}</p>
          <p><b>Downloads</b> ${u}</p>
        </div>
      </li>
    `).join("")}function L(o){document.querySelector(".gallery").insertAdjacentHTML("beforeend",b(o)),g.refresh()}function S(){n==null||n.classList.add("active")}function q(){n==null||n.classList.remove("active")}const l=document.querySelector(".form"),v=l.querySelector("input");l.addEventListener("submit",async o=>{o.preventDefault();const r=v.value.trim();if(!r){c.warning({message:"Please enter a search query!",position:"topRight"});return}h(),S();try{const i=await y(r);if(i.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}catch{c.error({message:"Something went wrong!",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
