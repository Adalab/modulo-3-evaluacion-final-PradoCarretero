function FilterYear(props) {
  const getYears = () => {
    const movieYears = props.movieFilters.map((movie) => movie.year);
    const uniqueYears = movieYears.filter((city, index) => {
      return movieYears.indexOf(city) === index;
    });
    return uniqueYears;
  };
  const renderYears = () => {
    return getYears().map((year) => {
      return <option>{year}</option>;
    });
  };
  return (
    <>
      <select name="yearselect">{renderYears()}</select>
    </>
  );
}
export default FilterYear;
