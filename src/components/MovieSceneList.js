import MovieSceneItem from "./MovieSceneItem";
import "../styles/MovieSceneList.scss";

function MovieSceneList(props) {
  console.log(props.moviesData);
  const renderMovieSceneList = (props) => {
    if (props.moviesData.length === 0) {
      return (
        <p className="list__mesagge">
          No hay ninguna palabra que coincida con la palabra{" "}
          {props.searchNameValue}.
        </p>
      );
    } else if (props.moviesData.length === 0 && props.filterYears !== "") {
      return (
        <p className="list__mesagge">
          No hay ninguna palabra que coincida con la palabra
          {props.searchNameValue} y el año {props.filterYears}.
        </p>
      );
    } else {
      const movieElements = props.moviesData.map((movie) => {
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
