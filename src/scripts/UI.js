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
        <h3 class='movie__title'>${original_title}</h3>
        <img
          src='${img_path + poster_path}'
          alt='movie_photo'
          class='movie__img'
        />
        <div class='movie__icons'>
          <i class='fas fa-film'></i>
          <i class='fas fa-grin-hearts'></i>
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
    } else if (vote >= 7 && vote <= 5) {
      return 'good';
    } else {
      return 'best';
    }
  }
}

export default UI;
