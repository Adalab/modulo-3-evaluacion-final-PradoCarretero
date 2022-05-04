function MovieList(props) {
  const movieElements = props.moviesData.map((movie) => {
    return (
      <li key={movie.index}>
        <img className="movie__poster" src={movie.poster} alt="" />
        <p>
          {movie.movie} - {movie.year}
        </p>
        <p>{movie.quote}</p>
      </li>
    );
  });
  return (
    <section>
      <ul>{movieElements}</ul>
    </section>
  );
}
export default MovieList;
