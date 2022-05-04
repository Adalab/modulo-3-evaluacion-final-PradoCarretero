import FilterName from "./FilterName";
import FilterYear from "./FilterYear";

function Filters(props) {
  return (
    <form>
      <FilterName handleInputName={props.handleInputName} />
      <FilterYear movieFilters={props.movieFilters} />
    </form>
  );
}
export default Filters;
