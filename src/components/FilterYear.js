import "../styles/FilterYear.scss";
function FilterYear(props) {
  const handleYearSelect = (ev) => {
    props.handleInputYear(ev.target.value);
  };
  const getYears = () => {
    const movieYears = props.movieFilters.map((movie) => movie.year);
    const uniqueYears = movieYears.filter((city, index) => {
      return movieYears.indexOf(city) === index;
    });
    uniqueYears.sort();
    return uniqueYears;
  };
  const renderYears = () => {
    return getYears().map((year, index) => {
      return <option key={index}>{year}</option>;
    });
  };
  return (
    <>
      <select
        className="year__select"
        name="yearselect"
        onChange={handleYearSelect}
        value={props.filterYears}
      >
        <option value="">Año</option>
        {renderYears()}
      </select>
    </>
  );
}
export default FilterYear;
