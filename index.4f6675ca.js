var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n);var s=n("kKeZA");const a={list:document.querySelector(".movie-collection"),pagination:document.querySelector("#tui-pagination-container")},l=new(0,s.default);function r(){a.list.innerHTML='<div class="loader"></div>',l.fetchMovies().then((e=>{console.log(e),l.fetchGenr().then((t=>{console.log(t.genres),function(e,t){a.list.innerHTML=e.map((e=>{let i=function(e,t){return e.map((e=>t.find((t=>t.id===e))?t.find((t=>t.id===e)).name:"Self made"))}(e.genre_ids,t);return i.length>2&&(i=[i[0],i[1],"Other"]),`<li class="movies__item" id="${e.id}" data-id=${e.id}>\n    <a href="" class="movies__link">\n        <img src='https://image.tmdb.org/t/p/original${e.poster_path}' class="movie__image" alt="Movie">\n        <div class="movie__text-part">\n            <h2 class="movie__title">${e.title||e.name}</h2>\n            <p class="movie__genre">${i.join(", ")} <span class="stick">|</span> \n                <span class="movie__year">${(e.release_date||e.first_air_date).slice(0,4)}</span></p>\n        </div>\n    </a>\n</li>`})).join("")}(e.results,t.genres)}))}))}r(),a.pagination.addEventListener("click",(function(e){if(e.target===a.pagination)return;e.target.classList.contains("tui-ico-first")&&(l.resetPage(),r());e.target.classList.contains("tui-ico-last")&&(l.lastPage(),r());!e.target.classList.contains("tui-page-btn")||e.target.classList.contains("tui-next-is-ellip")||e.target.classList.contains("tui-prev-is-ellip")||(l.cengePage(Number(e.target.textContent)),r());e.target.classList.contains("tui-ico-next")&&(l.nextPage(),r());e.target.classList.contains("tui-ico-prev")&&(l.prePage(),r());e.target.classList.contains("tui-next-is-ellip")&&(l.nextElip(),r());e.target.classList.contains("tui-prev-is-ellip")&&(l.preElip(),r());e.target.classList.contains("tui-ico-ellip")&&(e.target.parentElement.classList.contains("tui-next-is-ellip")&&(l.nextElip(),r()),e.target.parentElement.classList.contains("tui-prev-is-ellip")&&(l.preElip(),r()))}));
//# sourceMappingURL=index.4f6675ca.js.map
