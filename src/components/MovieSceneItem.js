import { Link } from "react-router-dom";
import "../styles/MovieSceneItem.scss";
import PropTypes from "prop-types";

function MovieSceneItem(props) {
  const { id, poster, movie, year, quote } = props.movie;

  return (
    <Link className="movie__link" to={`/movie/${id}`} title="ir a la película">
      <img className="movie__poster" src={poster} alt="" />
      <div className="movie__info">
        <article>
          <p>
            {movie} - {year}
          </p>
          <p className="movie__quote">{quote}</p>
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
