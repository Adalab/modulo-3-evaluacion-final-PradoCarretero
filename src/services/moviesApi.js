const getApiData = () => {
  return fetch(
    `https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50`
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          poster: movie.poster,
          movie: movie.movie,
          quote: movie.full_line,
          year: movie.year,
          id: index,
          director: movie.director,
          audio: movie.audio,
          favorite: false,
        };
      });
      return dataClean;
    });
};
export default getApiData;
