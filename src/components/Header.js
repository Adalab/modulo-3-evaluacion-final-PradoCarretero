import logo from "../images/logo.png";
import "../styles/Header.scss";
import Filters from "./Filters";
import PropTypes from "prop-types";

function Header(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <header className="header">
      <div className="header__hero">
        <img src={logo} className="header__logo" alt="Logo owen wilson's wow" />

        <h1 className="header__title">owen wilson's WOW</h1>
      </div>
      <form className="header__filters" onSubmit={handleSubmit}>
        <Filters
          handleInputName={props.handleInputName}
          movieFilters={props.movieFilters}
          handleInputYear={props.handleInputYear}
          filterYears={props.filterYears}
          searchNameValue={props.searchNameValue}
          handleReset={props.handleReset}
        />
      </form>
    </header>
  );
}
Header.defaultProps = {
  filterYears: "",
  movieFilters: [],
  searchNameValue: "",
};

Header.propTypes = {
  searchNameValue: PropTypes.string,
  movieFilters: PropTypes.array,
  filterYears: PropTypes.string,
  handleReset: PropTypes.func.isRequired,
  handleInputYear: PropTypes.func.isRequired,
  handleInputName: PropTypes.func.isRequired,
};
export default Header;
