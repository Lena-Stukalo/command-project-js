!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var i=a("aRcm3");const o={watchedBtn:document.querySelector(".header_btn-watched"),queueBtn:document.querySelector(".header_btn-queue"),list:document.querySelector(".movie-collection"),addToWatchedBtn:document.querySelector(".modal__btn-add")},r=new(0,i.default),l=JSON.parse(localStorage.getItem("watched"));function d(){r.fetchGenr().then((e=>{var t,n;l&&(t=l,n=e.genres,o.list.innerHTML=t.map((e=>{let t=function(e){return e.map((e=>e.name))}(n);return t.length>2&&(t=[t[0],t[1],"Other"]),`<li class="movies__item" id="${e.id}" data-id=${e.id}>\n    <a href="" class="movies__link">\n        <img src='https://image.tmdb.org/t/p/original${e.poster_path}' class="movie__image" alt="Movie">\n        <div class="movie__text-part">\n            <h2 class="movie__title">${e.title}</h2>\n            <p class="movie__genre">${t.join(", ")} <span class="stick">|</span> \n                <span class="movie__year">${e.release_date.slice(0,4)}</span></p>\n        </div>\n    </a>\n</li>`})).join(""))}))}d(),o.watchedBtn.addEventListener("click",(function(){o.queueBtn.classList.remove("header-active-button"),o.watchedBtn.classList.add("header-active-button"),d()}))}();
//# sourceMappingURL=library.7ed2fd47.js.map
