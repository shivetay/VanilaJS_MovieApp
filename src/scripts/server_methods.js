import UI from './UI';

const key = '3587a3fa0e0740b636671ff686bf592b';
let currentPage = 1;

export const getMovies = async (page) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&page=${page}`
    );
    if (res.status === 200) {
      const data = await res.json();
      const allMovies = new UI(data.results);
      console.log(res);
      return allMovies;
    } else {
      console.log(res.status);
    }
  } catch (err) {
    throw new Error('error');
  }
};

export const changePage = (e) => {
  e.preventDefault();

  // currentPage = 1;
  const first = document.getElementById('first');
  const back = document.getElementById('back');
  // const next = document.getElementById('next');
  console.log(currentPage);

  if (e.target.innerHTML == 'First') {
    currentPage = 1;
    getMovies(currentPage);
    console.log(currentPage);
  } else if (e.target.innerHTML == 'Next') {
    currentPage++;
    getMovies(currentPage);
  } else {
    currentPage--;
    getMovies(currentPage);
  }

  if (currentPage === 1 || currentPage <= 0 || currentPage === 'undefined') {
    first.disabled = true;
    back.disabled = true;
    currentPage = 1;
  } else {
    first.disabled = false;
    back.disabled = false;
  }
  console.log(currentPage);
};
