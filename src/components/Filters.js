import logo from "../images/logo.png";
import "../styles/Filters.scss";
import FilterName from "./FilterName";
import FilterYear from "./FilterYear";

function Filters(props) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Logo owen wilson's wow" />

      <div className="header__content">
        <h1 class="header__title">owen wilson's WOW</h1>
        <form className="filters">
          <FilterName
            handleInputName={props.handleInputName}
            searchNameValue={props.searchNameValue}
          />
          <FilterYear
            movieFilters={props.movieFilters}
            handleInputYear={props.handleInputYear}
            filterYears={props.filterYears}
          />
        </form>
      </div>
    </header>
  );
}
export default Filters;
