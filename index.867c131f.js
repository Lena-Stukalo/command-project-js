const e=document.querySelector(".movie-collection"),t=document.querySelector(".modal__card-overlay"),a=document.querySelector(".modal__card-content"),i=document.querySelector(".modal__close"),o=a.querySelector(".modal__info"),n=document.querySelector(".wached"),s=document.querySelector(".queue");function c(e){e.target===t&&(t.removeEventListener("click",c),t.classList.remove("modal__card-overlay--active"),a.classList.remove("modal__card--active"),r())}function l(e){e.target===i&&(i.removeEventListener("click",l),t.classList.remove("modal__card-overlay--active"),a.classList.remove("modal__card--active"),r())}function d(e){27===e.keyCode&&(window.removeEventListener("keydown",d),t.classList.remove("modal__card-overlay--active"),a.classList.remove("modal__card--active"),r())}function r(){s.classList.remove("modal__active-btn"),n.classList.remove("modal__active-btn"),s.textContent="add to queue",n.textContent="add to Watched"}e.addEventListener("click",(async function(n){if(n.preventDefault(),n.target!==e){const e=n.target.closest(".movies__item").dataset.id;a.setAttribute("data-id",e),o.innerHTML=await async function(e){return await fetch(`https://api.themoviedb.org/3//movie/${e}?api_key=7fea517bd5b294dd7a1b57e94e2c1c68&language=en-US`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e))}(e).then((e=>{const{original_title:t,vote_average:a,vote_count:i,poster_path:o,popularity:n,genres:s,overview:c,id:l}=e;return`\n                <img src="https://image.tmdb.org/t/p/original${o}" alt="${t} " class="modal__img" />\n                <h2 class="modal__info-title">${t.toUpperCase()}</h2>\n                <ul class="discription__modal id=${l}">\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Vote / Votes</p>\n                    <p class="discription__modal-text"><span>${a}</span> / ${i}</p>\n                  </li>\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Popularity</p>\n                    <p class="discription__modal-text">${n.toFixed(1)}</p>\n                  </li>\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Original Title</p>\n                    <p class="discription__modal-text">${t.toUpperCase()}</p>\n                  </li>\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Genre</p>\n                    <p class="discription__modal-text">${function(e){return 0===e.length?"":e.length>2?`${e[0].name}, ${e[1].name}, Other`:`${[e.map((e=>e.name))].join(", ")}`}(s)}</p>\n                  </li>\n                </ul>\n\n                <h4 class="about__modal-title">About</h4>\n                <p class="about__modal-text">\n                  ${c}\n                </p>\n            `}))}t.classList.add("modal__card-overlay--active"),a.classList.add("modal__card--active"),i.addEventListener("click",l),t.addEventListener("click",c),window.addEventListener("keydown",d)}));
//# sourceMappingURL=index.867c131f.js.map
