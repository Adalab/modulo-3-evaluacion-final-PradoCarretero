import { Link } from "react-router-dom";
import "../styles/MovieSceneItem.scss";

function MovieSceneItem(props) {
  return (
    <Link className="movie__link" to={`/movie/${props.movie.id}`}>
      <img className="movie__poster" src={props.movie.poster} alt="" />

      <article className="movie__text">
        <p>
          {props.movie.movie} - {props.movie.year}
        </p>
        <p className="movie__quote">{props.movie.quote}</p>
      </article>
    </Link>
  );
}
export default MovieSceneItem;
