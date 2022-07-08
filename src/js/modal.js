const btns = document.querySelector('.movie-collection');
const modalOverlay = document.querySelector('.modal__card-overlay');
const modalCard = document.querySelector('.modal__card-content');
const closeBtn = document.querySelector('.modal__close');
const modalInfo = modalCard.querySelector('.modal__info');

btns.addEventListener('click', showModal);
async function showModal(e) {
  e.preventDefault();
  if (e.target !== btns) {
    const movieId = e.target.closest('.movies__item').dataset.id;
    modalInfo.innerHTML = await fetchMovieDetails(movieId).then(data => {
      const {
        original_title,
        vote_average,
        vote_count,
        poster_path,
        popularity,
        genres,
        overview,
      } = data;
      console.log(data);
      return `
                <img src="https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}" class="modal__img" />
                <h2 class="modal__info-title">${original_title.toUpperCase()}</h2>
                <ul class="discription__modal">
                  <li class="discription__modal-item">
                    <p class="discription__modal-title">Vote / Votes</p>
                    <p class="discription__modal-text"><span>${vote_average}</span> / ${vote_count}</p>
                  </li>
                  <li class="discription__modal-item">
                    <p class="discription__modal-title">Popularity</p>
                    <p class="discription__modal-text">${popularity.toFixed(
                      1
                    )}</p>
                  </li>
                  <li class="discription__modal-item">
                    <p class="discription__modal-title">Original Title</p>
                    <p class="discription__modal-text">${original_title.toUpperCase()}</p>
                  </li>
                  <li class="discription__modal-item">
                    <p class="discription__modal-title">Genre</p>
                    <p class="discription__modal-text">${checkGenreList(
                      genres
                    )}</p>
                  </li>
                </ul>

                <h4 class="about__modal-title">About</h4>
                <p class="about__modal-text">
                  ${overview}
                </p>
            `;
    });
  }
  closeBtn;
  modalOverlay.classList.add('modal__card-overlay--active');
  modalCard.classList.add('modal__card--active');
  closeBtn.addEventListener('click', closeByBtn);
  modalOverlay.addEventListener('click', closeByOverlay);
  window.addEventListener('keydown', closeByWindow);
}

// let path = e.currentTarget.getAttribute('data-path');
// modalCard.classList.remove('modal__card--active');
// document.querySelector(`[data-target="${path}"]`).classList.add('modal__card--active');
// modalOverlay.classList.add('modal__card-overlay--active');

function closeByOverlay(e) {
  if (e.target === modalOverlay) {
    modalOverlay.removeEventListener('click', closeByOverlay);
    modalOverlay.classList.remove('modal__card-overlay--active');
    modalCard.classList.remove('modal__card--active');
  }
}

function closeByBtn(e) {
  if (e.target === closeBtn) {
    closeBtn.removeEventListener('click', closeByBtn);
    modalOverlay.classList.remove('modal__card-overlay--active');
    modalCard.classList.remove('modal__card--active');
  }
}

function closeByWindow(e) {
  if (e.keyCode === 27) {
    window.removeEventListener('keydown', closeByWindow);
    modalOverlay.classList.remove('modal__card-overlay--active');
    modalCard.classList.remove('modal__card--active');
  }
}

async function fetchMovieDetails(id) {
  return await fetch(
    `https://api.themoviedb.org/3//movie/${id}?api_key=7fea517bd5b294dd7a1b57e94e2c1c68&language=en-US`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data;
    });
}

function checkGenreList(genres) {
  if (genres.length === 0) {
    return '';
  } else if (genres.length > 2) {
    return `${genres[0].name}, ${genres[1].name}, Other`;
  } else {
    return `${[genres.map(genre => genre.name)].join(', ')}`;
  }
}
