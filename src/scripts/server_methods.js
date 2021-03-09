import UI from './UI';

const key = '3587a3fa0e0740b636671ff686bf592b';

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
