import FilterName from "./FilterName";
import FilterYear from "./FilterYear";

function Filters(props) {
  return (
    <form>
      <FilterName handleInputName={props.handleInputName} />
      <FilterYear
        movieFilters={props.movieFilters}
        handleInputYear={props.handleInputYear}
        filterYears={props.filterYears}
      />
    </form>
  );
}
export default Filters;
