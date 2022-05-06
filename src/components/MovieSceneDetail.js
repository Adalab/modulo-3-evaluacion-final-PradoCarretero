import { Link } from "react-router-dom";
import "../styles/MovieSceneDetail.scss";
import Button from "./core/Button";

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
          <Button movie={props.movie} />
        </article>
      </section>
    </>
  );
}
export default MovieSceneDetail;
