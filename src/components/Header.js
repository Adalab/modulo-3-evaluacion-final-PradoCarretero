import logo from "../images/logo.png";
import "../styles/Header.scss";
import Filters from "./Filters";

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
export default Header;
