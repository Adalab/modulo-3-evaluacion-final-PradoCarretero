import MovieSceneItem from "./MovieSceneItem";

function MovieSceneList(props) {
  const renderMovieSceneList = (props) => {
    console.log(props.moviesData);
    if (props.moviesData.length === 0) {
      return (
        <p>
          No hay ninguna palabra que coincida con la palabra{" "}
          {props.searchNameValue}.
        </p>
      );
    } else if (props.moviesData.length === 0 && props.filterYears !== "") {
      return (
        <p>
          No hay ninguna palabra que coincida con la palabra
          {props.searchNameValue} y el año {props.filterYears}.
        </p>
      );
    } else {
      const movieElements = props.moviesData.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieSceneItem movie={movie} />
          </li>
        );
      });
      return <ul>{movieElements}</ul>;
    }
  };

  return <section>{renderMovieSceneList(props)}</section>;
}
export default MovieSceneList;
