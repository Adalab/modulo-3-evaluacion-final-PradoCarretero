function MovieSceneDetail(props) {
  return (
    <li key={props.movie.index}>
      <img className="movie__poster" src={props.movie.poster} alt="" />
      <p>Nombre: {props.movie.movie}</p>
      <p>Año: {props.movie.year}</p>
      <p>Frase: {props.movie.quote}</p>
      <p>Director: {props.movie.director}</p>
    </li>
  );
}
export default MovieSceneDetail;
