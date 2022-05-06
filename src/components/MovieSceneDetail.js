import { Link } from "react-router-dom";
import "../styles/MovieSceneDetail.scss";
import Button from "./core/Button";
import PropTypes from "prop-types";

function MovieSceneDetail(props) {
  return (
    <>
      <section key={props.movieFound.index} className="detail__wrapper">
        <Link to={"/"} className="detail__link">
          <i className="fa-solid fa-arrow-left fa-2xl detail__icon"></i>
        </Link>
        <img className="detail__poster" src={props.movieFound.poster} alt="" />
        <article className="detail__text">
          <p>Nombre: {props.movieFound.movie}</p>
          <p>Año: {props.movieFound.year}</p>
          <p>Director: {props.movieFound.director}</p>
          <p className="detail__quote">Frase: {props.movieFound.quote}</p>
          <Button audio={props.movieFound.audio} />
        </article>
      </section>
    </>
  );
}
MovieSceneDetail.defaultProps = {
  movieFound: {},
};
MovieSceneDetail.propTypes = {
  movieFound: PropTypes.object.isRequired,
};
export default MovieSceneDetail;
