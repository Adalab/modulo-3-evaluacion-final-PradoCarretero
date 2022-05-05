import { Link } from "react-router-dom";
import "../styles/MovieSceneDetail.scss";

function MovieSceneDetail(props) {
  return (
    <>
      <section key={props.movie.index} className="detail__wrapper">
        <Link to={"/"} className="detail__link">
          <i className="fa-solid fa-arrow-left fa-2xl detail__icon"></i>
        </Link>
        <img className="detail__poster" src={props.movie.poster} alt="" />
        <article className="detail__text">
          <p>Nombre: {props.movie.movie}</p>
          <p>Año: {props.movie.year}</p>
          <p>Director: {props.movie.director}</p>
          <p className="detail__quote">Frase: {props.movie.quote}</p>
          <a
            className="detail__button"
            href={props.movie.audio}
            target="_blank"
            rel="noreferrer"
            title="Escucha la frase"
          >
            Escucha la frase
          </a>
        </article>
      </section>
    </>
  );
}
export default MovieSceneDetail;
