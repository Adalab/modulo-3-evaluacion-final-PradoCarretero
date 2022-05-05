import "../styles/FilterName.scss";

function FilterName(props) {
  const handleInputValue = (ev) => {
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
export default FilterName;
