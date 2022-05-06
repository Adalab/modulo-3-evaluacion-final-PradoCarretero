import MovieSceneItem from "./MovieSceneItem";
import "../styles/MovieSceneList.scss";

function MovieSceneList(props) {
  const renderMovieSceneList = (props) => {
    if (props.moviesData.length === 0) {
      return (
        <p className="list__mesagge">
          Cargando datos ... {props.searchNameValue}.
        </p>
      );
    } else if (props.movieFilters.length === 0) {
      return (
        <p className="list__mesagge">
          Upssssssss, no hay ninguna película que coincida con la palabra{" "}
          {props.searchNameValue}.
        </p>
      );
    } else {
      const movieElements = props.movieFilters.map((movie) => {
        return (
          <li key={movie.id} className="list__item">
            <MovieSceneItem movie={movie} />
          </li>
        );
      });
      return (
        <main className="list__wrapper">
          <ul className="list__ul">{movieElements}</ul>
        </main>
      );
    }
  };

  return <section>{renderMovieSceneList(props)}</section>;
}
export default MovieSceneList;
