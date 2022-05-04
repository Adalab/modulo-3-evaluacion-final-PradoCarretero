import FilterName from "./FilterName";

function Filters(props) {
  return (
    <form>
      <FilterName handleInputName={props.handleInputName} />
    </form>
  );
}
export default Filters;
