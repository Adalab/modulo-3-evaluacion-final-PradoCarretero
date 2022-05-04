import "../styles/App.scss";
import { useState, useEffect } from "react";
import getApiData from "../services/moviesApi";
import MovieList from "./MovieList";
import Filters from "./Filters";

function App() {
  const [searchNameValue, setSearchNameValue] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [filterYears, setFilterYears] = useState("");

  useEffect(() => {
    getApiData().then((dataApi) => {
      setMoviesData(dataApi);
    });
  }, []);

  const handleInputName = (value) => {
    setSearchNameValue(value);
  };

  const handleInputYear = (value) => {
    /*   if (filterYears.includes(value)) {
      const newYears = filterYears.filter((city) => city !== value);
      setFilterYears(newYears);
    }
    setFilterYears([...filterYears, value]); */
    setFilterYears(value);
  };

  const movieFilters = moviesData
    .filter((movie) => {
      return movie.movie.toLowerCase().includes(searchNameValue.toLowerCase());
    })
    .filter((movie) => {
      return filterYears === ""
        ? true
        : parseInt(movie.year) === parseInt(filterYears);
    });

  return (
    <>
      <h1>Owen Wilson's "wow</h1>
      <Filters
        handleInputName={handleInputName}
        movieFilters={movieFilters}
        handleInputYear={handleInputYear}
      />
      <MovieList moviesData={movieFilters} />
    </>
  );
}

export default App;
