import "../../styles/core/ButtonPlay.scss";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <a
      className="button"
      href={props.audio}
      target="_blank"
      rel="noreferrer"
      title="Escucha la frase"
    >
      Escucha la frase
    </a>
  );
}
Button.defaultProps = {
  audio: "",
};
Button.propTypes = {
  audio: PropTypes.string.isRequired,
};
export default Button;
