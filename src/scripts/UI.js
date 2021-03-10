class UI {
  constructor(data) {
    const thisUI = this;
    thisUI.data = data;

    thisUI.renderMovies(data);
  }

  renderMovies(data) {
    const thisUI = this;
    thisUI.movie = document.querySelector('.movies');
    const img_path = 'https://image.tmdb.org/t/p/w1280';
    let output = '';
    for (let movie of data) {
      const { original_title, poster_path, overview, vote_average } = movie;
      output += `
      <div class='card ${this.renderRatingColor(vote_average)}'>
        <h3 class='movies__title'>${original_title}</h3>
        <div class="movies__overview">
          <h3 class="movies__overview-header">Overview</h3>
          <p class="movies__overview-text">${overview}</p>
        </div>
        <img
          src='${img_path + poster_path}'
          alt='movie_photo'
          class='movies__img'
        />
        <div class='movies__icons'>
          <i class='fas fa-film'></i>
          <i class='fas fa-grin-hearts'></i>
          <span class='vote'>${vote_average}</span>
        </div>
      </div>
      `;
    }
    thisUI.movie.innerHTML = output;
  }

  renderRatingColor(vote) {
    if (vote <= 2) {
      return 'low';
    } else if (vote <= 5 && vote >= 2) {
      return 'med';
    } else if (vote <= 8 && vote >= 5) {
      return 'good';
    } else {
      return 'best';
    }
  }
}

export default UI;
