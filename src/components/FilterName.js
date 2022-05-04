function FilterName(props) {
  const handleInputValue = (ev) => {
    props.handleInputName(ev.target.value);
  };
  return (
    <>
      <label htmlFor="">Nombre de la película</label>
      <input
        placeholder="nombre de la película"
        type="text"
        name=""
        id=""
        value={props.searchNameValue}
        onChange={handleInputValue}
      />
    </>
  );
}
export default FilterName;
