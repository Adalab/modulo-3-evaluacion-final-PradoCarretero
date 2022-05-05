import MovieSceneItem from "./MovieSceneItem";

function MovieSceneList(props) {
  const movieElements = props.moviesData.map((movie) => {
    return (
      <li key={movie.id}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul>{movieElements}</ul>
    </section>
  );
}
export default MovieSceneList;
