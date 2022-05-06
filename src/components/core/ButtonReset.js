import "../../styles/core/ButtonReset.scss";
import PropTypes from "prop-types";

function ButtonReset(props) {
  const handleClickBtn = () => {
    props.handleReset();
  };
  return (
    <button className="button__reset" onClick={handleClickBtn}>
      Reset
    </button>
  );
}
ButtonReset.propTypes = {
  handleReset: PropTypes.func.isRequired,
};
export default ButtonReset;
