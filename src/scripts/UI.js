class UI {
  constructor(data) {
    const thisUI = this;
    thisUI.data = data;
    thisUI.movie = document.querySelector('.movies');
    thisUI.renderMovies(data);
  }

  renderMovies(data) {
    const thisUI = this;
    let output = '';
    for (let movie of data) {
      const { original_title } = movie;
      output += `
      <div class='card'>
        <h3 class='movie__title'>${original_title}</h3>
        <img
          src='https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
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
}

// export const ui = new UI();
export default UI;
