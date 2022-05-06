import "../styles/MovieSceneDetail.scss";
import ButtonPlay from "./core/ButtonPlay";
import PropTypes from "prop-types";
import ButtonArrow from "./core/ButtonArrow";

function MovieSceneDetail(props) {
  const { index, poster, movie, year, director, quote, audio } =
    props.movieFound;

  return (
    <>
      <section key={index} className="detail__wrapper">
        <ButtonArrow classLink="detail" />
        <img className="detail__poster" src={poster} alt="" />
        <article className="detail__text">
          <p>Nombre: {movie}</p>
          <p>Año: {year}</p>
          <p>Director: {director}</p>
          <p className="detail__quote">Frase: {quote}</p>
          <ButtonPlay audio={audio} />
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
