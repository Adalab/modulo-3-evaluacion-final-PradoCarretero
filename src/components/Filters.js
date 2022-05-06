import FilterName from "./FilterName";
import FilterYear from "./FilterYear";
import ButtonReset from "./core/ButtonReset";

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
      <ButtonReset handleReset={props.handleReset} />
    </>
  );
}
export default Filters;
