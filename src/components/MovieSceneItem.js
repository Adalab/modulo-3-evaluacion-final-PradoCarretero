import { Link } from "react-router-dom";

import "../styles/MovieSceneItem.scss";
import PropTypes from "prop-types";
import ButtonHeart from "./core/ButtonHeart";

function MovieSceneItem(props) {
  const { id, poster, movie, year, quote, favorite } = props.movie;

  return (
    <>
      <img className="movie__poster" src={poster} alt="" />
      <div className="movie__info">
        <article>
          <p>
            {movie} - {year}
          </p>
          <p className="movie__quote">{quote}</p>
        </article>
        <div className="movie__links">
          <ButtonHeart
            id={id}
            favorite={favorite}
            addListFavorite={props.addListFavorite}
            favoriteList={props.favoriteList}
            moviesData={props.moviesData}
          />

          <Link to={`/movie/${id}`}>
            <i className="fa-solid fa-circle-plus fa-xl movie__icon"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
MovieSceneItem.defaultProps = {
  movie: {},
};
MovieSceneItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieSceneItem;
