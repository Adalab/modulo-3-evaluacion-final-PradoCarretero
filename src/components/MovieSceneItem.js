import { Link } from "react-router-dom";
import "../styles/MovieSceneItem.scss";

function MovieSceneItem(props) {
  return (
    <Link className="link" to={`/movie/${props.movie.id}`}>
      <img className="movie__poster" src={props.movie.poster} alt="" />

      <p>
        {props.movie.movie} - {props.movie.year}
      </p>
      <p>{props.movie.quote}</p>
    </Link>
  );
}
export default MovieSceneItem;
