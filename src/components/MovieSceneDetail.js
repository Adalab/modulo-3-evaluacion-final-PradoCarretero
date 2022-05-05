function MovieSceneDetail(props) {
  console.log("im in details");
  console.log(props);
  console.log(props.movie.id);
  return (
    <section key={props.movie.index}>
      <img className="movie__poster" src={props.movie.poster} alt="" />
      <p>Nombre: {props.movie.movie}</p>
      <p>Año: {props.movie.year}</p>
      <p>Frase: {props.movie.quote}</p>
      <p>Director: {props.movie.director}</p>
      <a href={props.movie.audio} target="_blank">
        Escucha la frase
      </a>
    </section>
  );
}
export default MovieSceneDetail;
