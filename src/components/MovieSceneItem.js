import { Link } from "react-router-dom";
function MovieSceneItem(props) {
  return (
    <Link to={`/movie/${props.movie.id}`}>
      <li key={props.movie.index}>
        <img className="movie__poster" src={props.movie.poster} alt="" />
        <p>
          {props.movie.movie} - {props.movie.year}
        </p>
        <p>{props.movie.quote}</p>
      </li>
    </Link>
  );
}
export default MovieSceneItem;
