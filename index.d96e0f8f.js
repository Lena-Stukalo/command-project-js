!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in i){var n=i[t];delete i[t];var s={id:t,exports:{}};return e[t]=s,n.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},t.parcelRequired7c6=n);var s=n("aRcm3");const a={list:document.querySelector(".movie-collection"),pagination:document.querySelector("#tui-pagination-container")},l=new(0,s.default);function r(){a.list.innerHTML='<div class="loader"></div>',l.fetchMovies().then((t=>{l.fetchGenr().then((e=>{!function(t,e){a.list.innerHTML=t.map((t=>{let i=function(t,e){return t.map((t=>e.find((e=>e.id===t))?e.find((e=>e.id===t)).name:"Self made"))}(t.genre_ids,e);return i.length>2&&(i=[i[0],i[1],"Other"]),`<li class="movies__item" id="${t.id}" data-id=${t.id}>\n    <a href="" class="movies__link">\n        <img src='https://image.tmdb.org/t/p/original${t.poster_path}' class="movie__image" alt="Movie">\n        <div class="movie__text-part">\n            <h2 class="movie__title">${t.title||t.name}</h2>\n            <p class="movie__genre">${i.join(", ")} <span class="stick">|</span> \n                <span class="movie__year">${(t.release_date||t.first_air_date).slice(0,4)}</span></p>\n        </div>\n    </a>\n</li>`})).join("")}(t.results,e.genres)}))}))}r(),a.pagination.addEventListener("click",(function(t){if(t.target===a.pagination)return;t.target.classList.contains("tui-ico-first")&&(l.resetPage(),r());t.target.classList.contains("tui-ico-last")&&(l.lastPage(),r());!t.target.classList.contains("tui-page-btn")||t.target.classList.contains("tui-next-is-ellip")||t.target.classList.contains("tui-prev-is-ellip")||(l.cengePage(Number(t.target.textContent)),r());t.target.classList.contains("tui-ico-next")&&(l.nextPage(),r());t.target.classList.contains("tui-ico-prev")&&(l.prePage(),r());t.target.classList.contains("tui-next-is-ellip")&&(l.nextElip(),r());t.target.classList.contains("tui-prev-is-ellip")&&(l.preElip(),r());t.target.classList.contains("tui-ico-ellip")&&(t.target.parentElement.classList.contains("tui-next-is-ellip")&&(l.nextElip(),r()),t.target.parentElement.classList.contains("tui-prev-is-ellip")&&(l.preElip(),r()))}))}();
//# sourceMappingURL=index.d96e0f8f.js.map
