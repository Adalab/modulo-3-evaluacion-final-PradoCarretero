import MovieSceneItem from "./MovieSceneItem";
import ButtonArrow from "./core/ButtonArrow";

function Favorites(props) {
  const movieElements = props.moviesData.map((movie) => {
    return (
      <li key={movie.id} className="list__item">
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <main className="list__wrapper">
      <ButtonArrow classLink="favorite" />
      <ul className="list__ul">{movieElements}</ul>
    </main>
  );
}
export default Favorites;
