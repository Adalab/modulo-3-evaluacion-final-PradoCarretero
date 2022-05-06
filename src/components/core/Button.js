import "../../styles/core/Button.scss";

function Button(props) {
  return (
    <a
      className="button"
      href={props.movie.audio}
      target="_blank"
      rel="noreferrer"
      title="Escucha la frase"
    >
      Escucha la frase
    </a>
  );
}
export default Button;
