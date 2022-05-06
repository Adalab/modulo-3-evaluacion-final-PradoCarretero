import { Link } from "react-router-dom";
import "../styles/MovieSceneItem.scss";
import PropTypes from "prop-types";

function MovieSceneItem(props) {
  return (
    <Link className="movie__link" to={`/movie/${props.movie.id}`}>
      <img className="movie__poster" src={props.movie.poster} alt="" />
      <div className="movie__info">
        <article>
          <p>
            {props.movie.movie} - {props.movie.year}
          </p>
          <p className="movie__quote">{props.movie.quote}</p>
        </article>
        <i className="fa-solid fa-circle-plus fa-xl movie__icon"></i>
      </div>
    </Link>
  );
}
MovieSceneItem.defaultProps = {
  movie: {},
};
MovieSceneItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieSceneItem;
