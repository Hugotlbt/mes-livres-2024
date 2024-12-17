(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=(n,t,s,o)=>{const e={titre:n,auteur:t,resume:s,estLu:o,id:crypto.randomUUID(),createdAt:new Date().toDateString()};JSON.stringify(e);const r=localStorage.getItem("livres"),i=r?JSON.parse(r):[];console.log(i),i.push(e),localStorage.setItem("livres",JSON.stringify(i))},m=()=>{const n=localStorage.getItem("livres"),t=n?JSON.parse(n):[];return console.log(t),t},g=n=>{const t=localStorage.getItem("livres"),o=(t?JSON.parse(t):[]).filter(e=>e.id!==n);localStorage.setItem("livres",JSON.stringify(o))},f=n=>{const t=localStorage.getItem("livres"),o=(t?JSON.parse(t):[]).filter(e=>e.id!==n);localStorage.setItem("livres",JSON.stringify(o))},c=()=>{const n=document.querySelector("#booksList"),t=m();n.innerHTML=t.map(s=>{const o=new Date(s.createdAt).toLocaleDateString("fr");return`<div class="col-md-6 col-lg-4" id="book-${s.id}">
     <div class="card h-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">${s.titre}</h5>
                <span class="badge ${s.estLu?"bg-success":"bg-secondary"} toggle-read-btn" 
                        style="cursor: pointer" data-id=${s.id}>
                    ${s.estLu?'<i class="bi bi-check-circle me-1"></i>Lu':'<i class="bi bi-circle me-1"></i>Non lu'} 
                </span>
                </div>
                <h6 class="card-subtitle mb-2">
                <i class="bi bi-person me-1"></i>${s.auteur}
                </h6>
                <p class="card-text small">${s.resume}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-muted">
                    <i class="bi bi-calendar3 me-1"></i>${o}
                </small>
                <button class="btn btn-outline-danger btn-sm delete-btn" data-id="${s.id}" >
                    <i class="bi bi-trash me-1"></i>Supprimer
                </button>
            </div>
        </div>
    </div>
</div>
`}).join("")},v=()=>{const n=document.querySelector("#toggleFormBtn"),t=document.querySelector("#formSection"),s=new bootstrap.Collapse(t,{toggle:!1}),o=document.querySelector("#bookForm");n.addEventListener("click",()=>{s.toggle()}),t.addEventListener("hidden.bs.collapse",()=>{o.reset()}),o.addEventListener("submit",r=>{r.preventDefault();const i=o.title.value,l=o.author.value,a=o.summary.value,d=o.isRead.checked;u(i,l,a,d),s.hide(),c()}),document.querySelector("#booksList").addEventListener("click",r=>{const i=r.target.closest(".delete-btn, .toggle-read-btn");if(i===null)return;const l=i.dataset.id;i.classList.contains("delete-btn")?(g(l),c()):i.classList.contains("toggle-read-btn")&&(console.log("toggle click"),f(),c())})};v();c();
