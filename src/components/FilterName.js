import "../styles/FilterName.scss";
import PropTypes from "prop-types";

function FilterName(props) {
  const handleInputValue = (ev) => {
    ev.preventDefault();
    props.handleInputName(ev.target.value);
  };

  return (
    <>
      <input
        className="input__name"
        placeholder="nombre de la película"
        type="text"
        value={props.searchNameValue}
        onChange={handleInputValue}
      />
    </>
  );
}

FilterName.defaultProps = {
  searchNameValue: "",
};
FilterName.propTypes = {
  searchNameValue: PropTypes.string,
};
export default FilterName;
