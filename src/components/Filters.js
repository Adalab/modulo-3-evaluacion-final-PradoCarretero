import FilterName from "./FilterName";
import FilterYear from "./FilterYear";
import ButtonReset from "./core/ButtonReset";
import PropTypes from "prop-types";

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
Filters.defaultProps = {
  searchNameValue: "",
  movieFilters: [],
  filterYears: "",
};

Filters.propTypes = {
  searchNameValue: PropTypes.string,
  movieFilters: PropTypes.array,
  filterYears: PropTypes.string,
  handleReset: PropTypes.func.isRequired,
  handleInputYear: PropTypes.func.isRequired,
  handleInputName: PropTypes.func.isRequired,
};

export default Filters;
