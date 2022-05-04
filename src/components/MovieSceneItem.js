function MovieSceneItem(props) {
  return (
    <li key={props.movie.index}>
      <img className="movie__poster" src={props.movie.poster} alt="" />
      <p>
        {props.movie.movie} - {props.movie.year}
      </p>
      <p>{props.movie.quote}</p>
    </li>
  );
}
export default MovieSceneItem;
