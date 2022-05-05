import "../styles/Filters.scss";
import FilterName from "./FilterName";
import FilterYear from "./FilterYear";

function Filters(props) {
  return (
    <>
      <FilterName
        handleInputName={props.handleInputName}
        searchNameValue={props.searchNameValue}
      />
      <FilterYear
        movieFilters={props.movieFilters}
        handleInputYear={props.handleInputYear}
        filterYears={props.filterYears}
      />
    </>
  );
}
export default Filters;
